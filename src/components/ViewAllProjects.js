import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export function ViewAllProjects() {
  let navigate = useNavigate();
  let routeChange = () => {
    navigate("/Store");
  };

  return (
    <div className="ViewAllContainer">
      <button className="viewAllProject" onClick={routeChange}>
        Please keep shopping
      </button>
    </div>
  );
}
