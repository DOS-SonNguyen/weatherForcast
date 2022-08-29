import './card.scss';

const Card = ({ weather, index }) => {
    return (
        <div className="card">
            <div className="card_header">
                <span id="card_weekday">{(weather && weather.cod === "200" && new Date(weather.list[index].dt * 1000).toLocaleDateString("en-JP", { weekday: "long" })) || "None"}</span>
            </div>
            <div className="card_body">
                <img id="card_icon" src={(weather && weather.cod === "200" && `http://openweathermap.org/img/w/${weather.list[index].weather[0].icon}.png`) || "http://openweathermap.org/img/w/04n.png"} alt='icon b' />
                <div>
                    <span id="card_weather_info">{(weather && weather.cod === "200" && weather.list[index].weather[0].main) || "None"}</span>
                </div>
                <div className="card_temp">
                    <span id="card_temp">{(weather && weather.cod === "200" && Math.round(weather.list[index].main.temp)) || "0"}</span>&#8451;
                </div>
            </div>
        </div>
    );
}

export default Card;
