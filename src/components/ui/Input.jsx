import React from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ value, onChange, className }) => {
  return (
    <div className="relative flex-1">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type to search..."
        className={`pl-10 h-10 bg-background border-border focus:ring-2 focus:ring-primary focus:border-primary ${className}`}
      />
    </div>
  );
};

export default Input;
