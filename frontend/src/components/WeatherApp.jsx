import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import Clear from '../assets/images/Clear.jpg';
import Cloudy from '../assets/images/Cloudy.jpg';
import Fog from '../assets/images/fog.png';
import Rainy from '../assets/images/Rainy.jpg';
import Snowy from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';
import Sunny from '../assets/images/Sunny.jpg';

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

    const getBackgroundImage = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Clear':
                return Clear;
            case 'Clouds':
                return Cloudy;
            case 'Fog':
            case 'Mist':
            case 'Haze':
                return Fog;
            case 'Rain':
                return Rainy;
            case 'Snow':
                return Snowy;
            case 'Thunderstorm':
                return Stormy;
            default:
                return Sunny;
        }
    };

    const backgroundImage = weatherData ? getBackgroundImage(weatherData.weather[0].main) : null;

    return (
        <div
            className="container flex flex-col items-center justify-center min-h-screen p-4 mx-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg bg-opacity-70">
                <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">Weather App</h1>
                <SearchBar onSearch={fetchWeather} />
                {loading && <p className="mt-4 text-center text-blue-500">Loading...</p>}
                {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                {weatherData && <WeatherCard weatherData={weatherData} />}
            </div>
        </div>
    );
};

export default WeatherApp;
