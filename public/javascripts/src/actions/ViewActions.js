import AppDispatcher from '../dispatcher/AppDispatcher';
import ViewConstants from '../constants/ViewConstants.js';

let ViewActions = {
    /**
    *@param {object} institution - from one list to another
    */
    addStudy: function(institution) {
        AppDispatcher.handleViewAction({
            actionType: ViewConstants.ADD_STUDY,
            institution: institution
        });
    },

    /**
    *@param string id - id of institution in MyStudies to remove
    */
    editStudy: function(institution) {
        AppDispatcher.handleViewAction({
            actionType: ViewConstants.EDIT_STUDY,
            institution: institution
        })
    },

    /**
    *@param string institution - institution of institution in MyStudies to remove
    */
    removeStudy: function(institution) {
        AppDispatcher.handleViewAction({
            actionType: ViewConstants.REMOVE_STUDY,
            institution: institution
        })
    }
}

export default ViewActions;