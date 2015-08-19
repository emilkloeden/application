var React = require('react');
var BootStrap = require('react-bootstrap');

var StudiesSearch = require('./StudiesSearch.jsx');
var MyStudies = require('./MyStudies.jsx');
var SaveButton = require('./SaveButton.jsx');
var MyStudiesStore = require('../stores/MyStudiesStore.js');
var AppNavBar = require('./AppNavBar.jsx');


var institutions = require('../../../data/sources.js');
console.log('institutions');
console.log(institutions)

function getMyStudiesState() {
    return {studies: MyStudiesStore.getAll()};
}

var MyStudiesPage = React.createClass({
    getInitialState: function() {
        return getMyStudiesState();
    },
    
    componentDidMount: function() {
        MyStudiesStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        MyStudiesStore.removeChangeListener(this._onChange);
    },
    
    render: function() {
        return (
            <div>
            <AppNavBar />
                <div className="container-fluid">
                    
                    <div className="col-md-8 col-xs-12">
                        <StudiesSearch institutions={institutions} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <MyStudies  />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <SaveButton />
                    </div>
                </div>
            </div>
        )
    },

    _onChange: function() {
        this.setState(getMyStudiesState());
    }
});


module.exports = MyStudiesPage;