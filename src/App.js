// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Blueprint from "./pages/Blueprint";

import NotFound from "./pages/NotFound";
import LayoutFrontend from "./components/LayoutFrontend";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <LayoutFrontend>
              <Dashboard />
              <Blueprint/>
            </LayoutFrontend>
          }
        />
         <Route
          path="/blueprint"
          element={
              <Blueprint/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
