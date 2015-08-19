var React = require('react');
var ViewActions = require('../actions/ViewActions.js');

var Result = React.createClass({
    
    render: function() {
        var noDocs;
        console.log('result props')
        console.log(this.props)
        var institution = this.props.institution;

        console.log('institution')
        console.log(institution)
        if (institution.onARTS==="Y" || institution.onArchives==="Y") {
            noDocs = <span><small><em>Documents not required</em></small></span>
        }

        return (
            <div className="list-group-item">
                <h4 className="list-group-item-heading">
                    <span><p>{institution.name}</p></span>
                    {noDocs}
                    <small>{institution.parentOrganisation}</small>
                    <small>{institution.country}</small>
                    <span className="pull-right">
                        <small>
                            <a href="#/studies" onClick={this._onAddClick}>Add</a>
                        </small>
                    </span>
                </h4>
            </div>
            );
    },

    _onAddClick: function() {
        ViewActions.addStudy(this.props.institution);
    }
});

module.exports = Result;