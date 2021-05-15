import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./App.css";
import "./Search.css";

export default function Search() {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [city, setCity] = useState("");
  const [loader, setLoader] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = `99418b33eeeda47ea16a3e1653492f12`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setLoader(true);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="search-box"
          type="search"
          placeholder="Enter City"
          required
          minLength="2"
          maxLength="20"
          autoFocus={false}
          autoComplete={false}
          autoCapitalize={true}
          onChange={updateCity}
        ></input>

        <input className="submit-box" type="submit" value="Search"></input>
      </form>
    </div>
  );

  if (loader) {
    return (
      <div>
        {form}
        <div>
          <ul>
            <li className="city">
              Currently in <strong> {city}</strong>
            </li>
            <li>
              <span>Temperature: </span>
              {temperature}˚C
            </li>
            <li>
              <span>Description: </span>
              {description}
            </li>
            <li>
              <span>Humidity: </span>
              {humidity}%
            </li>
            <li>
              <span>Wind Speed: </span>
              {wind} m/h
            </li>
            <li>
              <span>Icon:</span>
              <br />
              <img className="icon" src={icon} alt="weather icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <Loader type="ThreeDots" color="black" width="50" height="50" />
      </div>
    );
  }
}
