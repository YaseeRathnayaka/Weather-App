import React from 'react';

const WeatherCard = ({ weatherData }) => {
    const { name, weather, main } = weatherData;
    const [{ description, icon }] = weather;

    return (
        <div className="w-full p-6 mt-6 text-center bg-white rounded-lg shadow-lg bg-opacity-90">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">{name}</h2>
            <img 
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt={description} 
                className="mx-auto"
            />
            <p className="text-xl text-gray-600 capitalize">{description}</p>
            <p className="my-3 text-5xl font-bold text-gray-800">{Math.round(main.temp)}°C</p>
            <div className="flex justify-around mt-4 text-gray-600">
                <div>
                    <p className="text-sm">Humidity</p>
                    <p className="font-bold">{main.humidity}%</p>
                </div>
                <div>
                    <p className="text-sm">Pressure</p>
                    <p className="font-bold">{main.pressure} hPa</p>
                </div>
                <div>
                    <p className="text-sm">Feels Like</p>
                    <p className="font-bold">{Math.round(main.feels_like)}°C</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
