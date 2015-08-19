var React = require('react');
var MyStudiesStore = require('../stores/MyStudiesStore.js');
var MyStudy = require('./MyStudy.jsx');


var MyStudies = React.createClass({

    getInitialState: function() {
        return this._getAll();
    },

    componentDidMount: function() {
        this.setState(this._getAll());
        MyStudiesStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        MyStudiesStore.removeChangeListener(this._onChange);
    },
    
    render: function() {
        var studies = [];

        for (var key in this.state.studies) {
            studies.push(this.state.studies[key]);
        }
        console.log(studies);
        return(
            <div>
                <h3>My Studies</h3>
                <div className="list-group">
                    {
                        studies.map(function(institution) {
                            console.log('institution: ' + institution.toString())
                            return(<MyStudy institution={institution} key={institution.id}/>)
                        }
                    )}
                    
                </div>
            </div>
            )
        
    },
    
    _onChange: function() {
        this.setState(this._getAll());
    },

    _getAll: function() {
        return {studies: MyStudiesStore.getAll()}
    }
});

module.exports = MyStudies;

