import { useMutation } from "@tanstack/react-query";
import { singup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export default function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        `Sign up succesfully. Please verify the new account from the user's email address`
      );
    },
  });

  return { signup, isSigningUp };
}
