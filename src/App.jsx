// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import ServicesDetails from "./pages/ServicesDetails";
import useCanvasReinit from "./hooks/useCanvasReinit";
import ScrollToHash from "./components/ScrollToHash";
import { Navigate } from "react-router-dom";
import "./styles/site.css";

// Call the hook inside the Router context:
function RoutedApp() {
  useCanvasReinit();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-details" element={<AppDetails />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        {/* Catch-all to avoid blank screens on typos */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash offset={70} />
      <RoutedApp />
    </BrowserRouter>
  );
}
