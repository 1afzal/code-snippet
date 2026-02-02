import { useEffect, useState } from "react";

function ToggleTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(prev => !prev)}>
      Toggle theme
    </button>
  );
}

export default ToggleTheme;