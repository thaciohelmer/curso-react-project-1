import { useState } from "react";

export default function useLayout() {
  const [mode, setMode] = useState(true)

  function ToggleMode() {
    setMode(!mode)
  }

  return {
    mode,
    ToggleMode
  }
};
