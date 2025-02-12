import React from "react";

interface WeatherIconProps {
  code: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ code }) => {
  const weatherCodeToIcon = (code: string) => {
    switch (code) {
      case "113":
        return "☀️"; // Sunny
      case "116":
        return "⛅"; // Partly Cloudy
      case "119":
        return "☁️"; // Cloudy
      case "122":
        return "☁️"; // Very Cloudy
      case "143":
        return "🌫️"; // Fog
      case "176":
        return "🌦️"; // Light Showers
      case "179":
        return "🌨️"; // Light Sleet Showers
      case "182":
      case "185":
        return "🌨️"; // Light Sleet
      case "200":
        return "⛈️"; // Thundery Showers
      case "227":
        return "❄️"; // Light Snow
      case "230":
        return "❄️"; // Heavy Snow
      case "248":
      case "260":
        return "🌫️"; // Fog
      case "263":
      case "266":
      case "293":
      case "296":
        return "🌧️"; // Light Rain
      case "281":
      case "284":
      case "311":
      case "314":
      case "317":
      case "350":
      case "377":
        return "🌨️"; // Light Sleet
      case "299":
      case "305":
      case "356":
        return "🌧️"; // Heavy Showers
      case "302":
      case "308":
      case "359":
        return "🌧️"; // Heavy Rain
      case "320":
      case "323":
      case "326":
      case "368":
        return "❄️"; // Light Snow
      case "329":
      case "332":
      case "335":
      case "338":
      case "371":
      case "395":
        return "❄️"; // Heavy Snow
      case "362":
      case "365":
      case "374":
        return "🌨️"; // Light Sleet Showers
      case "386":
        return "⛈️"; // Thundery Showers
      case "389":
        return "⛈️"; // Thundery Heavy Rain
      case "392":
        return "❄️"; // Thundery Snow Showers
      default:
        return "❓"; // Unknown
    }
  };

  return <span className="text-5xl">{weatherCodeToIcon(code)}</span>;
};

export default WeatherIcon;
