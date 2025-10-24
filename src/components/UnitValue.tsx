import { useState } from "react";
import Tab from "./shared/Tab";
import StepInput from "./shared/StepInput";

const UnitValue = () => {
  const [unit, setUnit] = useState("percent");

  const tabOptions = [
    { label: "%", value: "percent" },
    { label: "px", value: "pixels" },
  ]

  return (
    <div className="w-70 bg-neutral-925 p-4 flex flex-col gap-4 text-xs">
      <Tab label="Unit" options={tabOptions} value={unit} setValue={setUnit} />
      <StepInput unit={unit} label="Value" />
    </div>
  );
};

export default UnitValue;
