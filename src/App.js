import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Dashboard from "./components/User/Dashboard";
import CalendarView from "./components/User/CalendarView";
import CompanyManagement from "./components/Admin/CompanyManagement";
import CommunicationMethods from "./components/Admin/CommunicationMethods";
import ExampleComponent from "./components/Shared/ExampleComponent";
import Admin from "./components/Admin/Admin";
import Home from "./components/Shared/Home";
import "./App.css";

const App = () => {
  const [isAdmin] = useState(true); // Admin authorization toggle

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header isAdmin={isAdmin} />
        <div style={{ flex: "1", padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/admin" element={<Admin isAdmin={isAdmin} />} />
            {isAdmin && (
              <>
                <Route path="/admin/companies" element={<CompanyManagement />} />
                <Route path="/admin/methods" element={<CommunicationMethods />} />
              </>
            )}
            <Route path="/example" element={<ExampleComponent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
