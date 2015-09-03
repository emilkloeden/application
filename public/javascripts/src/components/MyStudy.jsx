import React from 'react';
import { Button, ButtonToolbar, ListGroupItem, ListGroup } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';
import EditStudiesModal from './EditStudiesModal.jsx'


export default React.createClass({
    render() {
        var noDocs;
        var Edit;
        var buttons;
        var study = this.props.institution;
        console.log('my study study')
        console.log(study)

        if (study.onARTS==="Y" || study.onArchives==="Y") {
            noDocs = <span><small><em>Documents not required</em></small></span>
            buttons = <ButtonToolbar><Button onClick={this._onRemoveClick} bsSize='xsmall' bsStyle='primary'>Remove</Button></ButtonToolbar>
        }
        else {
            //Edit = <p className="pull-right"><small><a href="#/studies" onClick={this._onEditClick}>Edit</a></small></p>
            buttons = <EditStudiesModal institution={study} />
        }

        if (study.hasOwnProperty('quals')) {
            var quals = study.quals.map(
                            (a) => <ListGroupItem
                                        bsSize="xsmall"
                                    >
                                        <small>{a.name + ' ' + a.start + '-' + a.end}</small>
                                    </ListGroupItem>
                        );
            var qualList = <ListGroup>{quals}</ListGroup>
        }
        else {
            var qualList = <span />
        }

        return (
            <ListGroupItem header={study.name} key={study.id}>
                <div>
                    {noDocs}
                    <small>{study.parentOrganisation}</small>
                    <small>{study.country}</small>
                    {qualList}
                    {buttons}
                </div>
            </ListGroupItem>
            );
    },

    _onEditClick() {
        ViewActions.editStudy(this.props.institution);
    },

    _onRemoveClick() {
        console.log(this.props);
        ViewActions.removeStudy(this.props.institution);
    }
});
