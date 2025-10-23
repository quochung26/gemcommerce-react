const UnitValue = () => {
  return (
    <div className="w-70 bg-neutral-925 p-4 flex flex-col gap-4 text-xs">
      <div className="flex gap-2 justify-between">
        <label className="flex text-sm text-neutral-450 items-center font-normal">
          Unit
        </label>
        <div className="w-[56.45%] bg-neutral-875 rounded-lg p-0.5 flex gap-0.5 h-9 font-medium">
          <div className="w-1/2 flex justify-center items-center">%</div>
          <div className="w-1/2 flex justify-center items-center">Px</div>
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        <label className="flex text-sm text-neutral-450 items-center font-normal">
          Value
        </label>
        <div className="w-[56.45%] bg-neutral-875 rounded-lg p-0.5 flex gap-0.5 h-9 font-medium">
          <div className="w-1/2 flex justify-center items-center">%</div>
          <div className="w-1/2 flex justify-center items-center">Px</div>
        </div>
      </div>
    </div>
  );
};

export default UnitValue;
