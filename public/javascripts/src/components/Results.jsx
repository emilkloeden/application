var React = require('react');
var Result = require('./Result.jsx');

var Results = React.createClass({
    
    render: function() {
        console.log('results props')
        console.log(this.props);
        var matches = [];

        if(this.props.filterText.length > 0) {

            this.props.institutions.forEach(function(institution) {
                if (institution.name.toLowerCase().indexOf(this.props.filterText) !== -1) {
                    matches.push(
                        <Result institution={institution} />
                    );
                }
            }.bind(this));

        }
        return(
            <div className="list-group">
                {matches}
            </div>
        )      
    }
});

module.exports = Results;