var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ViewConstants = require('../constants/ViewConstants');
var assign = require('react/lib/Object.assign');
var API = require('./API.js');

var CHANGE_EVENT = 'change';



var _courses = API.getStorage('courses') || [];




function editCourse(id) {
    console.log(_courses);
    console.log('Edit functionality to come...');
}

function addCourse(institution) {
    var index = API.arrayObjectIndexOf(_courses, institution.id, 'id');
    if (index == -1) {
        _courses.push(institution);
        API.updateStorage('studies', _courses);
   }
}

function removeCourse(id) {
    var index = API.arrayObjectIndexOf(_courses, id.id, 'id');
    console.log('index: ' + index.toString())
    if (index != -1) {
       console.log(_courses[index].toString() + 'to be deleted')
       _courses.splice([index],1);
       API.updateStorage('studies', _courses);
   }
}





var CoursesStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _courses;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        //console.log(action);
        var text;

        switch(action.actionType) {
            case ViewConstants.ADD_STUDY:
                addCourse(action.institution);
                CoursesStore.emitChange();
                break;
            
            case ViewConstants.EDIT_STUDY:
                editCourse(action.id);
                CoursesStore.emitChange();
                break;
            
            case ViewConstants.REMOVE_STUDY:
                removeCourse(action.id);
                CoursesStore.emitChange();
                break;
        }
        return true;
    })
});

module.exports = CoursesStore;