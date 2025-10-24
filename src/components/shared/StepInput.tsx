import { StepInputProps } from "../../types";
import {
  MinusDisableIcon,
  MinusIcon,
  PlusDisableIcon,
  PlusIcon,
} from "../icons";
import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

const StepInput = ({ unit, label }: StepInputProps) => {
  const [value, setValue] = useState("0");
  const [validValue, setValidValue] = useState(0);

  const handleSetOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    input = input.replace(",", ".");

    setValue(input);
  };

  const handleBlur = () => {
    let cleaned = value.replace(",", ".");
    let match = cleaned.match(/-?\d+(\.\d+)?/);

    let parsed = match ? parseFloat(match[0]) : 0;

    if (isNaN(parsed) || parsed < 0) parsed = 0;

    if (unit === "percent") {
      if (parsed > 100) {
        setValue(String(validValue));
        return;
      }
    }

    setValidValue(parsed);
    setValue(String(parsed));
  };

  const handleIncrease = () => {
    const num = parseFloat(value) || 0;
    let newVal = num + 1;
    if (unit === "percent" && newVal > 100) newVal = 100;
    setValue(newVal.toString());
    setValidValue(newVal);
  };

  const handleDecrease = () => {
    const num = parseFloat(value) || 0;
    let newVal = num - 1;
    if (newVal < 0) newVal = 0;
    setValue(newVal.toString());
    setValidValue(newVal);
  };

  useEffect(() => {
    if (unit === "percent" && validValue > 100) {
      setValue("100");
      setValidValue(100);
    }
  }, [unit]);

  const isMinusDisabled = unit === "percent" && validValue <= 0;
  const isPlusDisabled = unit === "percent" && validValue >= 100;

  return (
    <div className="flex gap-2 justify-between">
      <label
        htmlFor="step-input"
        className="flex text-sm text-neutral-450 items-center font-normal"
      >
        {label}
      </label>
      <div className=" w-35 bg-neutral-875 rounded-lg flex h-9 font-medium border border-neutral-875 focus-within:border-[#3C67FF]">
        <input
          id="step-input"
          type="text"
          name="value"
          className="peer order-2 w-full appearance-none text-center hover:bg-neutral-725 focus:outline-none"
          value={value}
          onChange={handleSetOnChange}
          onBlur={handleBlur}
        />
        <div className="order-1 relative group peer-hover:bg-neutral-725 hover:bg-neutral-725 rounded-l-lg">
          <button
            id="step-decrease-button"
            className="relative w-9 p-2 flex items-center justify-center cursor-pointer rounded-l-lg"
            onClick={() => handleDecrease()}
            aria-label="Decrease value"
          >
            {isMinusDisabled ? <MinusDisableIcon /> : <MinusIcon />}
          </button>
          {isMinusDisabled ? <Tooltip message="Value must greater than 0" /> : null}
        </div>
        <div className="order-3 relative group peer-hover:bg-neutral-725 hover:bg-neutral-725 rounded-r-lg">
          <button
            id="step-increase-button"
            className=" w-9 p-2 flex items-center justify-center peer-hover:bg-neutral-725 cursor-pointer rounded-r-lg"
            onClick={() => handleIncrease()}
            aria-label="Increase value"
          >
            {isPlusDisabled ? <PlusDisableIcon /> : <PlusIcon />}
          </button>
          {isPlusDisabled ? <Tooltip message="Value must smaller than 100" /> : null}
        </div>
      </div>
    </div>
  );
};

export default StepInput;
