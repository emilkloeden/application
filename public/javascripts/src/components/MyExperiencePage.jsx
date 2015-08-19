var React = require('react');
var AppNavBar = require('./AppNavBar.jsx');


var MyExperiencePage = React.createClass({
    render: function() {
        return (
            <div>
                <AppNavBar />
                <h3>My Experience</h3>
            </div>
        )
    }
})

module.exports = MyExperiencePage;