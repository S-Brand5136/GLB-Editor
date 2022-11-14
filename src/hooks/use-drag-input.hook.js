import { useState, useCallback, useEffect } from "react";

export function useDragInput(value, setValue) {
  const [snapshot, setSnapshot] = useState(value);
  const [startVal, setStartVal] = useState(0);

  // Start the drag to change operation when the mouse button is down.
  const onStart = useCallback(
    (event) => {
      setStartVal(event.clientX);
      setSnapshot(value);
    },
    [value]
  );

  useEffect(() => {
    // Only change the value if the drag was actually started.
    const onUpdate = (event) => {
      if (startVal) {
        if (event.pageX < startVal) {
          setStartVal(event.pageX);
          return setValue(value - 0.01);
        }

        setStartVal(event.pageX);
        setValue(value + 0.01);
      }
    };

    // Stop the drag operation now.
    const onEnd = () => {
      setStartVal(0);
    };

    document.addEventListener("mousemove", onUpdate);
    document.addEventListener("mouseup", onEnd);
    return () => {
      document.removeEventListener("mousemove", onUpdate);
      document.removeEventListener("mouseup", onEnd);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startVal, setValue, snapshot]);

  return onStart;
}
