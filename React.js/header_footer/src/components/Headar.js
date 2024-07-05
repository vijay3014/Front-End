import React from 'react';

const Header = () => {
  return (
    <header className="bg-teal-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          This is Me..
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:bg-teal-600 rounded">Home</a></li>
            <li><a href="#" className="hover:bg-teal-600 rounded">About</a></li>
            <li><a href="#" className="hover:bg-teal-600 rounded">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;