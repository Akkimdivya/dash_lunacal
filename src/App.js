import React from 'react';
import TabWidget from './components/TabWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="flex">
      {/* Left Side - Empty */}
      <div className="w-1/2 hidden md:block"></div>

      {/* Right Side - Widgets */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4 p-4">
        <TabWidget />
        <hr className=" border-gray-500 border-2 rounded-full m-3"  />
        <GalleryWidget />
        <hr className=" border-gray-500 border-2 rounded-full m-3"  />
      </div>
    </div>
  );
}

export default App;
