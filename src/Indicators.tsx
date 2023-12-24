import React from "react";
import "./Indicators.css";
import { $dots, changeActiveButtons, fetchData } from "./store";
import { useUnit } from "effector-react";
import DotParts from "./DotParts";

interface IndicatorsProps {
  onPositionChange?: (positions: string[]) => void;
  onComplete?: (positions: string[]) => void;
  onInit?: () => void;
}

const Indicators: React.FC<IndicatorsProps> = ({
  onPositionChange,
  onComplete,
}) => {
  const dots: string[] = useUnit($dots);
  // console.log(dots);

  const toggleActive = async (d: string) => {
    onPositionChange && onPositionChange([...dots]);
    const index = dots.findIndex((dot: string) => dot === d);
    if (index === -1) {
      await changeActiveButtons([...dots, d]);
      const data = await fetchData();
      onComplete && onComplete(data);
      return;
    }
    const changed: string[] = dots;
    changed.splice(index, 1);

    await changeActiveButtons(changed);
    const data = await fetchData();
    onComplete && onComplete(data);
  };

  return (
    <div className="flex-col">
      <div className="car-image">
        <div className="background"></div>
        <DotParts
          toggleActive={toggleActive}
          className="damage-indicator ml-2 justify-end "
          value="A"
          count={4}
          gridClassName="grid-4 h-8"
        />
        <DotParts
          toggleActive={toggleActive}
          className="damage-indicator-2 justify-start "
          value="B"
          count={5}
          gridClassName="grid-5"
        />
        <DotParts
          toggleActive={toggleActive}
          className="damage-indicator-3 ml-4 justify-center "
          value="C"
          count={4}
          gridClassName="grid-4 h-8"
        />
      </div>
      <button className="report">Rapporto danni</button>
    </div>
  );
};

export default Indicators;
