import React from "react";
import "../tailwind.css";
import { useNavigate } from "react-router-dom";

export function ViewAllProjects() {
  let navigate = useNavigate();
  let routeChange = () => {
    navigate("/Store");
  };

  return (
    <div className="bg-purple-300 h-screen flex justify-center items-center">
      <button
        className="bg-teal-600 py-2 px-3 rounded-full border-0"
        onClick={routeChange}
      >
        Please keep shopping
      </button>
    </div>
  );
}
