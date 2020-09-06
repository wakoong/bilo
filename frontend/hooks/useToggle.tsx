import { useState } from "react";

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return { open, handleToggle };
};

export default useToggle;
