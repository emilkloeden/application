var React = require('react');

var StudiesSearchBar = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value
        );
    },
    render: function() {
        return(
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Where have you studied?" 
                    value={this.props.filterText} 
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
});

module.exports = StudiesSearchBar;