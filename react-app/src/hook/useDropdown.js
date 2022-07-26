import { useState, useEffect } from "react";

const useDropdown = (element) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (element.current.contains(e.target)) return;
      setActive(false);
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return [active, setActive];
};

export default useDropdown;
