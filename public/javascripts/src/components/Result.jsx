import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';
import AddButton from './AddButton.jsx';
import AddStudiesModal from './AddStudiesModal.jsx';

export default React.createClass({
    
    render() {
        var noDocs,
            docsText,
            addResult;

        var institution = this.props.institution;

        if (institution.onARTS==="Y" || institution.onArchives==="Y") {
            noDocs = true;
        }
        if (noDocs) {
            docsText = <span><small><em>Documents not required</em></small></span>
            addResult = <AddButton institution={institution} />
        } 
        else {
            addResult = <AddStudiesModal institution={institution} />
        }

        return (
            <div className="list-group-item">
                <h4 className="list-group-item-heading">
                    <span><p>{institution.name}</p></span>
                    {docsText}
                    <small>{institution.parentOrganisation}</small>
                    <small>{institution.country}</small>
                    <span className="pull-right">
                     {addResult}
                    </span>
                </h4>
            </div>
            );
    },

    _onAddClick: function() {
        ViewActions.addStudy(this.props.institution);
    }
});