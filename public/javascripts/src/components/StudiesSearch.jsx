var React = require('react');
var StudiesSearchBar = require('./StudiesSearchBar.jsx')
var Results = require('./Results.jsx')

var StudiesSearch = React.createClass({
    
    getInitialState: function() {
        return {
            filterText: ''
        };
    },
    handleUserInput: function(filterText) {
        this.setState({filterText: filterText});
    },
    render: function() {
        return (
            <div>
                <h3>Places of Study</h3>
                <StudiesSearchBar 
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
        
                <Results
                    applicationState={this.props.applicationState}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
});

module.exports = StudiesSearch;


