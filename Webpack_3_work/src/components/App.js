import React, { lazy } from "react";
import "./App.css";
import meImage from "../../public/me.jpg";
import ButtonComponent from "./shared/Button";
import DashBoardComponent from "./DashBoardComponent";
const TestComponent = lazy(() =>
  import(/* webpackChunkName: "TestComponentChunk" */ "./TestComponent.jsx")
);

const AppComponent = () => {
  //fetchLog is deadcode in "production"
  const fetchLog = () => {
    console.log("I am Anandh");
  };

  console.log("graphql api", API_URL);

  return (
    <div className="container">
      <div>
        App Component
        <img src={meImage} alt="me jpg" height={100} />
        <ButtonComponent />
        <DashBoardComponent />
        <TestComponent />
      </div>
    </div>
  );
};

export default AppComponent;
