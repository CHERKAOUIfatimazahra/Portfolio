import React, { useState } from "react";

export const Select = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full"
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
};

export const SelectTrigger = ({ children, isOpen }) => (
  <button
    className={`w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none ${
      isOpen ? "ring-2 ring-primary" : ""
    }`}
  >
    {children}
  </button>
);

export const SelectValue = ({ value, placeholder }) => (
  <span className={`truncate ${value ? "text-black" : "text-gray-400"}`}>
    {value || placeholder}
  </span>
);

export const SelectContent = ({ isOpen, children }) => (
  <div
    className={`absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10 transition-transform ${
      isOpen
        ? "scale-100 opacity-100"
        : "scale-95 opacity-0 pointer-events-none"
    }`}
  >
    {children}
  </div>
);

export const SelectItem = ({ value, children, onClick }) => (
  <div
    onClick={() => onClick(value)}
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  >
    {children}
  </div>
);
