var React = require('react');
var AppNavBar = require('./AppNavBar.jsx');


var Home = React.createClass({
    render: function() {
        return (
            <div>
                <AppNavBar />
                <h3>Home</h3>
            </div>
        )
    }
})

module.exports = Home;