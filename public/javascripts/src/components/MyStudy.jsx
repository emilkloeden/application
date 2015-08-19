var React = require('react');
var ViewActions = require('../actions/ViewActions.js');

var MyStudy = React.createClass({
    render: function() {
        var noDocs;
        var Edit;
        var study = this.props.institution;

        if (study.onARTS==="Y" || study.onArchives==="Y") {
            noDocs = <span><small><em>Documents not required</em></small></span>
        }
        else {
            Edit = <p className="pull-right"><small><a href="#/studies" onClick={this._onEditClick}>Edit</a></small></p>
        }

        return (
            <div className="list-group-item">
                <h4 className="list-group-item-heading">
                    <span><p>{study.name}</p></span>
                    {noDocs}
                    <small>{study.parentOrganisation}</small>
                    <small>{study.country}</small>
                    <p className="pull-right">
                        <small>
                            <a href="#/studies" onClick={this._onRemoveClick}>Remove</a>
                        </small>
                    </p>
                    {Edit}
                </h4>
            </div>
            );
    },

    _onEditClick: function() {
        //console.log(this.props.institution);
        ViewActions.editStudy(this.props.institution);
    },

    _onRemoveClick: function() {
        //console.log(this.props.institution);
        ViewActions.removeStudy(this.props.institution);
    }
});

module.exports = MyStudy;