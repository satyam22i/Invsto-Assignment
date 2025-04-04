import Button from "./Button";

export default function Features() {
  return (
    <div className="flex justify-between items-center mt-6">
      {/* Features List */}
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-center gap-2">
          <img src="./icon-check.svg" alt="tick" className="w-5 h-5" />
          <span>Unlimited websites</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="./icon-check.svg" alt="tick" className="w-5 h-5" />
          <span>100% data ownership</span>
        </li>
        <li className="flex items-center gap-2">
          <img src="./icon-check.svg" alt="tick" className="w-5 h-5" />
          <span>Email reports</span>
        </li>
      </ul>

      {/* Button Component */}
      <Button />
    </div>
  );
}
