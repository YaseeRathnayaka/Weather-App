import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center mb-4">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button 
                type="submit" 
                className="p-3 text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
