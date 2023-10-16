import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main>{/* conversion tools */}</main>
      <Footer />
    </div>
  );
};

export default App;
