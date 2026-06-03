import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{title}</span>
        {open ? (
          <FaMinus className="text-gray-600" />
        ) : (
          <FaPlus className="text-gray-600" />
        )}
      </button>

      
      {open && (
        <p className="mt-3 text-gray-600 leading-relaxed">
          {children}
        </p>
      )}
    </div>
  );
}