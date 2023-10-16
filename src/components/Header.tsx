import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4x1 font-bold">Unit Mate</h1>
        <p className="text-xl">
          Your all-in-one unit and timezone conversion tool
        </p>
      </div>
    </header>
  );
};

export default Header;
