import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `amirmmolazemi/${title}`;
  }, []);
};

export { useTitle };
