import { useEffect } from "react";

type toastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: toastProps) => {
  useEffect(() => {
    const removeToast = setTimeout(() => {
      onClose();
    }, 3500);

    return () => {
      clearTimeout(removeToast);
    };
  });
  
  const isError = type === "ERROR";

  const styles = isError
    ? "fixed opacity-90 top-20 right-4 z-50 w-45 text-center bg-red-300 border border-red-400 text-red-700 px-4 py-3 rounded"
    : "fixed opacity-90 top-20 right-4 z-50 w-45 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded";

  const label = isError ? "Error!" : "Success!";

  return (
    <div  className={styles} role="alert">
      <strong className="font-bold">{label}</strong>
      <span className="block sm:inline"> {message} </span>
    </div>
  );
};

export default Toast;