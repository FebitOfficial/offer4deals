import { useEffect } from "react";

function useScrollToTopOnRouteChange() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const removeScrollListener = () => {
      window.removeEventListener("hashchange", scrollToTop);
    };

    window.addEventListener("hashchange", scrollToTop);
    window.scrollTo(0, 0);

    return () => {
      removeScrollListener();
    };
  }, []);
}

export default useScrollToTopOnRouteChange;
