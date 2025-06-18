import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Succesfully log out");
      queryClient.clear();
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("Something wrong!");
    },
  });
  return { logout, isLoggingOut };
}
