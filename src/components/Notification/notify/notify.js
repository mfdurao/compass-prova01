import { toast } from "react-toastify";

const notify = (items) =>
  toast.info(`The book "${items.title}" has been moved`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default notify;
