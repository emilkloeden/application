import assign from 'react/lib/Object.assign';
import { Dispatcher } from 'flux';

let AppDispatcher = assign(new Dispatcher(), {
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

export default AppDispatcher;