// var AppDispatcher = require('../dispatcher/AppDispatcher');
// var EventEmitter = require('events').EventEmitter;
// var ViewConstants = require('../constants/ViewConstants');
// var assign = require('react/lib/Object.assign');
// var API = require('./API.js');

// var CHANGE_EVENT = 'change';



// var _myStudies = API.getStorage('studies') || [];




// function editStudy(institution) {
//     this.setState({showModal: true});
// }

// function addStudy(institution) {
//     var index = API.arrayObjectIndexOf(_myStudies, institution.id, 'id');
//     if (index == -1) {
//         _myStudies.push(institution);
//         API.updateStorage('studies', _myStudies);
//    }
// }

// function removeStudy(institution) {
//     var index = API.arrayObjectIndexOf(_myStudies, institution.id, 'id');
//     if (index != -1) {
//        _myStudies.splice([index],1);
//        API.updateStorage('studies', _myStudies);
//    }
// }





// var MyStudiesStore = assign({}, EventEmitter.prototype, {
//     getAll: function() {
//         return _myStudies;
//     },
//     emitChange: function() {
//         this.emit(CHANGE_EVENT);
//     },
//     addChangeListener: function(callback) {
//         this.on(CHANGE_EVENT, callback);
//     },
//     removeChangeListener: function(callback) {
//         this.removeListener(CHANGE_EVENT, callback);
//     },
//     dispatcherIndex: AppDispatcher.register(function(payload) {
//         var action = payload.action;
//         //console.log(action);
//         var text;

//         switch(action.actionType) {
//             case ViewConstants.ADD_STUDY:
//                 addStudy(action.institution);
//                 MyStudiesStore.emitChange();
//                 break;
            
//             case ViewConstants.EDIT_STUDY:
//                 edit(action.institution);
//                 MyStudiesStore.emitChange();
//                 break;
            
//             case ViewConstants.REMOVE_STUDY:
//                 removeStudy(action.institution);
//                 MyStudiesStore.emitChange();
//                 break;
//         }
//         return true;
//     })
// });

// module.exports = MyStudiesStore;