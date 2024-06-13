import React from 'react';

const WeatherCard = ({ weatherData }) => {
    const { name, weather, main } = weatherData;
    const [{ description, icon }] = weather;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm mx-auto">
            <h2 className="text-3xl font-bold mb-2">{name}</h2>
            <img 
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt={description} 
                className="mx-auto"
            />
            <p className="text-xl capitalize">{description}</p>
            <p className="text-5xl font-bold my-3">{Math.round(main.temp)}°C</p>
            <div className="flex justify-around mt-4">
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
