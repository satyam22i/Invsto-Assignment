interface ToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export default function Toggle({ isYearly, setIsYearly }: ToggleProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <span className={!isYearly ? "text-gray-800 font-medium" : "text-gray-500"}>
        Monthly Billing
      </span>

      <label className="relative inline-flex items-center cursor-pointer w-11 h-6">
        <input
          type="checkbox"
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
          className="sr-only peer"
        />
        <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5" />
      </label>

      <span className={isYearly ? "text-gray-800 font-medium" : "text-gray-500"}>
        Yearly Billing
      </span>

      {isYearly && <span className="text-red-500 text-sm">25% discount</span>}
    </div>
  );
}
