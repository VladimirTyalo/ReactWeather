var React = require("react");

var GreeterForm = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name"/>
                </div>
                <div>
                    <textarea rows="10" ref="message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>

        );
    },
    onFormSubmit: function (e) {
        e.preventDefault();

        var name    = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {};

        if (name && name.length > 0) {
            this.refs.name.value = "";
            updates.name         = name;
        }

        if (message && message.length > 0) {
            this.refs.message.value = "";
            updates.message         = message;
        }

        this.props.onSubmit(updates);

    }
});

module.exports = GreeterForm;