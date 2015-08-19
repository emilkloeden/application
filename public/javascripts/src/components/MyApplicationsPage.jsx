var React = require('react');
var AppNavBar = require('./AppNavBar.jsx');


var MyApplicationsPage = React.createClass({

    render: function() {
        let cycle = this.props.params.cycle;
        return (
            <div>
                <AppNavBar />
                <h3>My {cycle} Application</h3>
            </div>
        )
    }
})

module.exports = MyApplicationsPage;