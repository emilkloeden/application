var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


var Home = require('./components/Home.jsx');
var MyStudiesPage = require('./components/MyStudiesPage.jsx');
var MyCoursesPage = require('./components/MyCoursesPage.jsx');
var MyExperiencePage = require('./components/MyExperiencePage.jsx');
var MyApplicationsPage = require('./components/MyApplicationsPage.jsx');
var AppNavBar = require('./components/AppNavBar.jsx');
//var MyStudiesPage = require('./components/MyStudiesPage.jsx');



var routes = (
    <Route handler={App}>
    <DefaultRoute handler={Home} />
        <Route path="/" name="home" handler={Home} />
        <Route path="/studies" name="studies" handler={MyStudiesPage} />
        <Route name="courses" handler={MyCoursesPage} />
        <Route name="experience" handler={MyExperiencePage} />
        <Route path="application/:cycle" name="application" handler={MyApplicationsPage} />
    </Route>
);



var App = React.createClass({
    render: function() {
        return (<RouteHandler />)
    }
});

Router.run(routes, Router.HashLocation, function (Root) {
    return(React.render(<Root />, document.getElementById('content')))
});