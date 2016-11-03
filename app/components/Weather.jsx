var React = require("react");

var WeatherForm    = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal     = require("ErrorModal");


var Weather        = React.createClass({
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            }
            else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="page-title text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    },
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location)
            .then(function (temp) {
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            })
            .catch(function (err) {
                that.setState({
                    isLoading: false,
                    errorMessage: err.message
                });
            });
    }
});


module.exports = Weather;