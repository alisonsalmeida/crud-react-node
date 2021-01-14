import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const success = (text) => {
  toast.configure();
  toast.success(text, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

const error = (text) => {
  toast.configure();
  toast.error(text, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

export { success, error };
