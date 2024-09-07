import React, { useState } from 'react';

const GalleryWidget = () => {
  // Initialize state with random image URLs
  const [images, setImages] = useState([
    'https://picsum.photos/200?random=1',
    'https://picsum.photos/200?random=2',
    'https://picsum.photos/200?random=3',
    'https://picsum.photos/200?random=4',
    'https://picsum.photos/200?random=5',
  ]);

  // State for managing the index of the first visible image
  const [visibleIndex, setVisibleIndex] = useState(0);
  const imagesPerPage = 3; // Number of images visible at a time

  // Function to add a new random image
  const addImage = () => {
    const newImageUrl = `https://picsum.photos/200?random=${images.length + 1}`;
    setImages([...images, newImageUrl]); // Add new image to state
  };

  // Function to handle left arrow click
  const slideLeft = () => {
    if (visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1);
    }
  };

  // Function to handle right arrow click
  const slideRight = () => {
    if (visibleIndex < images.length - imagesPerPage) {
      setVisibleIndex(visibleIndex + 1);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-800 text-white">
     

      {/* Controls Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Add Image Button */}
        <button
        
          className="px-4 py-2 bg-black rounded"
        >Gallery</button>


      <div >
      <button
          onClick={addImage}
          className="px-4 py-2 bg-grey rounded-lg bg-gray-700"
        >
          + Add Image
        </button>
          {/* Left Arrow */}
          <button
          onClick={slideLeft}
          className={`bg-gray-900 px-3 py-1 mr-2 ml-4 rounded-full hover:bg-gray-600 ${
            visibleIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={visibleIndex === 0}
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className={`bg-gray-900 px-3 py-1 rounded-full hover:bg-gray-600 ${
            visibleIndex >= images.length - imagesPerPage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={visibleIndex >= images.length - imagesPerPage}
        >
          &#8594;
        </button>
      </div>
      </div>

      {/* Image Container */}
      <div className="flex overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${visibleIndex * (100 / imagesPerPage)}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-24 h-24 object-cover rounded mr-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
