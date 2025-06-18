import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCheckin() {
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: (breakfast = {}) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success(`Booking #${bookingId} succesfully checked in.`);
      navigate("/");
    },
    onError: () => {
      toast.error("There was an error when checking in.");
    },
  });
  return { checkin, isCheckingIn };
}
