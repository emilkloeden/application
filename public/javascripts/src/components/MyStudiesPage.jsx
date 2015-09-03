import React from 'react';
import BootStrap from 'react-bootstrap';

import StudiesSearch from './StudiesSearch.jsx';
import MyStudies from './MyStudies.jsx';
import SaveButton from './SaveButton.jsx';
import AppStore from '../stores/AppStore.js';
import AppNavBar from './AppNavBar.jsx';

import API from '../stores/API.js'
import institutions from '../../../data/sources.js';


// console.log('institutions');
// console.log(institutions)

// function getMyStudiesState() {
//     return {studies: MyStudiesStore.getAll()};
// }

var MyStudiesPage = React.createClass({
    getInitialState() {
        let applicationState = API.getApplicationState();
        applicationState.studies = institutions;
        return applicationState;
    },
    
    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    },
    
    render() {
        console.log('MyStudiesPage state');
        console.log(this.state);
        return (
            <div>
            <AppNavBar />
                <div className="container-fluid">
                    
                    <div className="col-md-8 col-xs-12">
                        <StudiesSearch institutions={institutions} applicationState={this.state.applicationState} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <MyStudies applicationState={this.state.applicationState} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <SaveButton />
                    </div>
                </div>
            </div>
        )
    },

    _onChange: function() {
        this.setState(API.getApplicationState());
    }
});


export default MyStudiesPage;