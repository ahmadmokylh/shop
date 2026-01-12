export default function InputC({ label }: { label: string }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder=" "
        className="
      peer w-full p-4 border border-[#dee2e6] rounded-md 
      focus:outline-none placeholder:text-black
    "
      />

      <label
        className="
      absolute right-4 top-1/2 -translate-y-1/2 
      text-gray-600 pointer-events-none transition-all 
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 
      peer-placeholder-shown:text-base
      peer-focus:top-2 peer-focus:text-xs peer-focus:text-black
      peer-focus:translate-y-0
    "
      >
        {label} <span className="text-red-500">*</span>
      </label>
    </div>
  );
}
