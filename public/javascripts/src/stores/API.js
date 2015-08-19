module.exports = {
    arrayObjectIndexOf: function(myArray, searchTerm, property) {
        for(var i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i][property].toString() == searchTerm.toString()) {
                return i
            };
        }
        return -1;
    },

    getStorage: function(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },

    updateStorage: function(key, value) {
        if(typeof value != "string") {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    }
}