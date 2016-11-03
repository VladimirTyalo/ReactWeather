var React  = require("react");
var {Link} = require("react-router");

// Simple stateless functional component
// var About = React.createClass({
//     render: function () {
//
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

var About = (props) => (
    <div>
        <h1 className="text-center">About </h1>
        <p>Thsi is a weather application build on React.</p>
        <p>Here are some oth tools I used: </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
            </li>
            <li>
                <a href="httpp://openweathermap.org">Open Weather Map</a> - I use Open Weather Map to search for weather
                data by city name.
            </li>
        </ul>
    </div>
);

module.exports = About;