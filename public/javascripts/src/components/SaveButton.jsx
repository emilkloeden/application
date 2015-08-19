var React = require('react');
var Bootstrap = require('react-bootstrap');

var ButtonToolbar = Bootstrap.ButtonToolbar;
var Button = Bootstrap.Button;

var buttonsInstance = React.createClass({
    render: function() {
        return (
            <ButtonToolbar>
                <Button bsStyle='primary' >Save</Button>
            </ButtonToolbar>
        )
    }
})

module.exports = buttonsInstance;