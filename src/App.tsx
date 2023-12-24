import React, { useEffect } from "react";
import { changeActiveButtons } from "./store";
import Indicators from "./Indicators";

const App: React.FC<{ options: PluginOptions }> = ({ options }) => {
  const { options: pluginOptions } = options;
  const {
    initializedOptions,
    onPositionChange,
    onComplete,
    onInit,
  } = pluginOptions;

  // const Init = () => {
  // };

  // useEffect(() => {
  //   Init();
  // });

  useEffect(() => {
    onInit && onInit();
    console.log(initializedOptions);
    
    // document.addEventListener('DOMContentLoaded', () => {
    //   console.log(initializedOptions);

    //   window.DAMAGE_SELECTOR_API &&
    //     window.DAMAGE_SELECTOR_API.init({
    //       selector,
    //       options: { initializedOptions, onPositionChange, onComplete, onInit },
    //     });
    // });
    initializedOptions && changeActiveButtons(initializedOptions);

  }, [onInit, initializedOptions]);

  return (
    <>
      <Indicators onComplete={onComplete} onPositionChange={onPositionChange} />
    </>
  );
};

export default App;
