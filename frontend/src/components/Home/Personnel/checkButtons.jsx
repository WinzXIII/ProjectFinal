import React from "react";

const CheckButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="check-button">
      ตรวจสอบ
    </button>
  );
};

export default CheckButton;
