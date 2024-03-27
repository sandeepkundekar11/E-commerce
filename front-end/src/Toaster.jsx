import { toast } from "react-toastify";
const Tosters = () => {
  const Success = (message) =>
    toast.info(message, {
      position: "bottom-left",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "z-40 Toaster  rounded-md",
    });

  return { Success };
};

export default Tosters;
