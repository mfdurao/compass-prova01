import { toast } from "react-toastify";

const notifyRemoved = (items) =>
  toast.info(`The book "${items.title}" has been removed`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default notifyRemoved;
