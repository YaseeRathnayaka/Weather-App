import React from 'react';
import WeatherApp from './components/WeatherApp';
import './index.css';

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
            <WeatherApp />
        </div>
    );
}

export default App;
