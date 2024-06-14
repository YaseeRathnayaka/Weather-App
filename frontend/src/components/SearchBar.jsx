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
                className="w-64 p-3 border border-gray-400 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <button 
                type="submit" 
                className="p-3 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
