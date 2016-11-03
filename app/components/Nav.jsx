var React             = require("react");
var {Link, IndexLink} = require("react-router"); // var Link = require().Link;


// var Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <nav>Main Navigation</nav>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Get Weather</IndexLink>
//                 <Link to="/about"  activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Examples</Link>
//             </div>
//         );
//     }
// });

var Nav = (props) => (
    <div>
        <nav>Main Navigation</nav>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
    </div>
);

module.exports = Nav;