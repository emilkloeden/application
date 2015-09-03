import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import ViewConstants from '../constants/ViewConstants';
import assign from 'react/lib/Object.assign';
import API from './API.js';

var CHANGE_EVENT = 'change';

let _ApplicationState = API.getApplicationState();
var _myStudies = API.getStudies();



var AppStore =  assign({}, EventEmitter.prototype, {
    getApplicationState() {
        return _ApplicationState;
    },

    logIn(user) {
        console.log('User logs in, implement handling');
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    addStudy(institution) {
        let applicationState = API.getApplicationState();
        let studies = applicationState['applicationState']['studies'];
        var index = API.arrayObjectIndexOf(studies, institution.id, 'id');
        studies[index]['claimedByApplicant'] = true;
        if (institution.hasOwnProperty('quals')) {
            console.log('HAS QUALS')
            studies[index]['quals'] = institution.quals
        }
        API.setStudies(studies);
    },
    
    editStudy(institution) {
        this.setState({showModal: true});
    },

    removeStudy(institution) {
        let applicationState = API.getApplicationState();
        let studies = applicationState['applicationState']['studies'];
        var index = API.arrayObjectIndexOf(studies, institution.id, 'id');
        if (index != -1) {
           studies[index]['claimedByApplicant'] = false;
           API.setStudies(studies);
        }
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        //console.log(action);
        var text;

        switch(action.actionType) {
            case ViewConstants.LOG_IN:
                AppStore.logIn(action.user); // function required
                AppStore.emitChange();

            case ViewConstants.ADD_STUDY:
                AppStore.addStudy(action.institution);
                AppStore.emitChange();
                break;
            
            case ViewConstants.EDIT_STUDY:
                AppStore.edit(action.institution);
                AppStore.emitChange();
                break;
            
            case ViewConstants.REMOVE_STUDY:
                AppStore.removeStudy(action.institution);
                AppStore.emitChange();
                break;
        }
        return true;
    })
});

export default AppStore;