// src/components/ui/use-toast.js

import { useState } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success") => {
    const id = new Date().getTime();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000); // Toast disappears after 3 seconds
  };

  return { toasts, addToast };
};

export default useToast;
