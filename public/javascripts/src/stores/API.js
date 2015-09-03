import institutions from '../../../data/sources.js';

export default {
    arrayObjectIndexOf(myArray, searchTerm, property) {
        for(var i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i][property]/*.toString()*/ == searchTerm.toString()) {
                return i
            };
        }
        return -1;
    },

    getStorage(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },

    getApplicationState() {
        return this.getStorage('applicationState') || {'applicationState': {'studies': institutions}};
    },

    getStudies() {
        let appState = this.getApplicationState();
        console.log('appState');
        console.log(appState);
        let studies = appState.applicationState.studies;
        studies.filter(function(a) {
            return a.claimedByApplicant == true;
        });
    },

    setStudies(value) {
        let appState = this.getApplicationState();
        appState.applicationState.studies = value;
        window.localStorage.setItem('applicationState', JSON.stringify(appState));
    },

    setStorage(key, value) {
        if(typeof value != "string") {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    }
}