import { TabOption, TabProps } from "../../types";
import { cn } from "../../utils";

const Tab = ({ options, label, value, setValue }: TabProps) => {
  const handleSetValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex gap-2 justify-between">
      <p className="flex text-sm text-neutral-450 items-center font-normal">
        {label}
      </p>
      <div className="w-35 bg-neutral-875 rounded-lg p-0.5 flex gap-0.5 h-9 font-medium">
        {options.map((option: TabOption) => (
          <button
            key={option.value}
            className={cn(
              "w-1/2 flex justify-center items-center rounded-md cursor-pointer focus-visible:outline-none hover:bg-neutral-750",
              {
                "bg-neutral-750": value === option.value,
              }
            )}
            aria-pressed={value === option.value}
            onClick={() => handleSetValue(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
