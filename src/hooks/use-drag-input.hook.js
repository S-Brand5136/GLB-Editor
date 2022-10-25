import { useState, useCallback, useEffect, useRef } from "react";

export function useDragInput(value, setValue) {
  const [snapshot, setSnapshot] = useState(value);
  const [startVal, setStartVal] = useState(0);
  const oldX = useRef({ num: 0 });

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
        if (event.clientX < oldX.num) {
          setValue(Number(value - 0.01));
        } else {
          setValue(Number(value + 0.01));
        }

        oldX.num = event.clientX;
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
  }, [startVal, setValue, snapshot]);

  return onStart;
}
