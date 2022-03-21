import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import App from "../App";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
