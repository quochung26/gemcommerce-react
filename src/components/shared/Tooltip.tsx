const Tooltip = ({ message }: { message: string }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:flex">
      <div className="relative bg-neutral-800 text-white text-xs px-1 py-2 rounded-md whitespace-nowrap">
        {message}
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0
        border-l-6 border-l-transparent 
        border-r-6 border-r-transparent 
        border-t-6 border-t-neutral-800"
      />
    </div>
  );
};

export default Tooltip;
