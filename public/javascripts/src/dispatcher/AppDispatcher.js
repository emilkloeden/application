var assign = require('react/lib/Object.assign');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher(), {
    /**
    * @param {object} action 
    * 
    * action from view including type and source/id
    */
    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});

module.exports = AppDispatcher;