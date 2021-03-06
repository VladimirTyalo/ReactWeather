var React = require("react");

var ErrorModal = React.createClass({

    componentDidMount: function () {
        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    getDefaultProps: function() {
      return {
          title: "Error"
      }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    render: function () {

        var {title, message} = this.props;
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p class="lead">{message} </p>
                <p>
                    <button className="button hollow" data-close="" aria-label="Close modal" type="button">
                        OK!
                    </button>
                </p>
            </div>
        )
    }
});

module.exports = ErrorModal;