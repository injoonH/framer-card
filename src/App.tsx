import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { MainLayout } from "@/layouts";
import { Home } from "@/pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
