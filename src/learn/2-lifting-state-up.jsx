import debounce from "@/utils/debounce";
import { useState } from "react";

function LiftingStateUp() {
  const [color, setColor] = useState("#999");
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <div className="PassingProps">
      <Parent color={color} onChangeColor={handleChangeBgColor} />
      <OtherParent color={color} />
    </div>
  );
}

export default LiftingStateUp;

/* -------------------------------------------------------------------------- */

function OtherParent({ color }) {
  return (
    <div
      className="Parent flex justify-center items-center p-4 bg-slate-200"
      style={{ backgroundColor: color }}
    >
      <p className=""> change bg color</p>
    </div>
  );
}

export function Parent({ color, onChangeColor }) {
  return (
    <div className="Parent">
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <div className="Child flex items-center justify-center gap-8">
      <p className="text-4xl font-extralight uppercase" style={{ color }}>
        Child
      </p>
      <input
        type="color"
        aria-label="글자 색상 변경"
        defaultValue={color}
        onChange={debounce((e) => onChangeColor(e.target.value), 500)}
      />
    </div>
  );
}
