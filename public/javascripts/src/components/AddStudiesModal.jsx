import React from 'react';
import { Modal, Button, ButtonToolbar, Input, ButtonInput } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';
import AddStudiesModalBody from './AddStudiesModalBody.jsx'


export default React.createClass({
    getInitialState(){
        return { showModal: false };
    },
    
    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    addSingleQual() {
        var institutionQuals = this.getInstitutionQuals();
        var qual = {'level': this.refs.level.getValue()};
        console.log(qual);
        institutionQuals.push(qual);
        this.setState({ 'institutionQuals': institutionQuals })
    },

    

    getInstitutionQuals() {
        return this.state.institutionQuals || [];
    },

    addQualifications() {
        let institution = this.props.institution;
        let quals = JSON.parse(window.localStorage.getItem('tempStorage'));
        console.log('quals gotten')
        console.log(quals)
        console.log('removing temporary storage...')
        window.localStorage.removeItem('tempStorage');
        institution['quals'] = quals;
        console.log('add quals institution')
        console.log(institution)
        ViewActions.addStudy(institution);
        this.close();
    },

    render() {
        console.log('modal initial props')
        console.log(this.props)
        return (
            <div>
                <ButtonToolbar>
                    <Button bsSize='xsmall' onClick={this.open}>Add</Button>
                </ButtonToolbar>
                <Modal show={this.state.showModal} onHide={this.close} institution={this.props.institution}>
                    <form className="form-group">
                        <Modal.Header closeButton>
                            <Modal.Title>Add qualifications... click Add qualification(s) when done</Modal.Title>
                        </Modal.Header>
                        <Modal.Body institution={this.props.institution}>
                            <AddStudiesModalBody institution={this.props.institution} />
                        </Modal.Body>
                       
                        <Modal.Footer>
                            <Button bsStyle="primary" onClick={this.addQualifications}>DONE</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
});

 //
//<Modal.Body />

