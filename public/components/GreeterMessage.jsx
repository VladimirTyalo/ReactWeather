var React = require("react");

var GreeterMessage = React.createClass({
    render: function () {
        var name    = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    },
    getDefaultProps: function () {
        return {
            message: "a default message from greeterMessage"
        }
    }
});

module.exports  = GreeterMessage;