import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "white" : "black",
      }}
    >
      <p>Siuuuu</p>
    </div>
  );
};

export default Content;
