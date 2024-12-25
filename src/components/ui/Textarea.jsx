// src/components/ui/Textarea.jsx

import React from "react";

const Textarea = ({ value, onChange, placeholder, rows = 4 }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full p-2 border rounded-md"
    />
  );
};

export default Textarea;
