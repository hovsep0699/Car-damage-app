import React from "react";
import { $dots } from "./store";
import { useUnit } from "effector-react";

interface DotPartsProps {
  toggleActive: (dot: string) => void;
  value: string;
  className: string;
  gridClassName: string;
  count: number
}

const DotParts: React.FC<DotPartsProps> = ({
  toggleActive,
  value,
  className,
  gridClassName,
  count
}) => {
  const damageIndicators: number[] = Array(count)
    .fill(0)
    .map((_, i) => i);
  const dots = useUnit($dots);
  const checkActive = (id: string) => {
    if (dots) {
      for (const dot of dots) {
        if (dot === id) return true;
      }
    }
    return false;
  };
  return (
    <div className={`${gridClassName}`}>
      {damageIndicators &&
        damageIndicators.map((indicator, i) => (
          <div key={indicator} className={`${className} flex-col`}>
            <div className="text">{value + i}</div>
            <div
              className={`rounded ${checkActive(value + i) ? "active" : ""}`}
              onClick={() => {
                toggleActive(value + i);
              }}
            ></div>
          </div>
        ))}
    </div>
  );
};

export default DotParts;
