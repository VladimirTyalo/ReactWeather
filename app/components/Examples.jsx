var React = require("react");

// var Examples = React.createClass({
//     render: function () {
//
//         return (
//             <h3>Examples</h3>
//         );
//     }
// });
var {Link} = require("react-router");

var Examples   = (props) => (
    <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are  a few example locations to try out</p>
        <ol>
            <li>
                <Link to="/?location=Samara">Samara, RU</Link>
            </li>
            <li>
                <Link to="/?location=Rio">Rio, Brasil</Link>
            </li>
        </ol>
    </div>
);
module.exports = Examples;