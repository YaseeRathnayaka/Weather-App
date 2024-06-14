import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        setWeatherData(null); // Clear previous data
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found');
                } else {
                    throw new Error('Failed to fetch weather data');
                }
            }

            const data = await response.json();
            console.log('Weather Data:', data); // Log the data for debugging
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error); // Log the error for debugging
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container flex flex-col items-center p-4 mx-auto">
            <h1 className="mb-6 text-4xl font-bold">Weather App</h1>
            <SearchBar onSearch={fetchWeather} />
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
};

export default WeatherApp;
