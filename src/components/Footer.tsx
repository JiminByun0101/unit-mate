import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Unit Mate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
