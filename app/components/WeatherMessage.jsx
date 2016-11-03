var React = require("react");

//
// var WeatherMessage = React.createClass({
//     render: function() {
//         var {temp, location} = this.props;
//         return (
//             <h3>
//                 The temperature is {temp}  in {location}
//             </h3>
//         );
//     }
// });


var WeatherMessage = ({temp, location}) => (
    <h3>The temperature is {temp} in {location}</h3>
);

module.exports = WeatherMessage;