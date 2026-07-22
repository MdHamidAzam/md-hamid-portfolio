import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 bg-cyan-500 p-4 rounded-full text-black shadow-xl hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTop;