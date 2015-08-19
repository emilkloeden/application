var AppDispatcher = require('../dispatcher/AppDispatcher');
var ViewConstants = require('../constants/ViewConstants.js');

var ViewActions = {
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
    editStudy: function(id) {
        AppDispatcher.handleViewAction({
            actionType: ViewConstants.EDIT_STUDY,
            id: id
        })
    },

    /**
    *@param string id - id of institution in MyStudies to remove
    */
    removeStudy: function(id) {
        AppDispatcher.handleViewAction({
            actionType: ViewConstants.REMOVE_STUDY,
            id: id
        })
    }
}

module.exports = ViewActions