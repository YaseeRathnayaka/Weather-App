import React from 'react';

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{weatherData.name}</h2>
            <p className="text-xl">{weatherData.weather[0].description}</p>
            <p className="text-4xl">{Math.round(weatherData.main.temp)}°C</p>
        </div>
    );
};

export default WeatherCard;
