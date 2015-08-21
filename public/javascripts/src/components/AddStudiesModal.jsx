import React from 'react';
import { Modal, Button, ButtonToolbar, Input } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';


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

    handleLevel() {
        console.log('handle level');
    },

    getInstitutionQuals() {
        return this.state.institutionQuals || [];
    },

    addQualifications() {
        ViewActions.addStudy(this.props.institution);
        this.close();
    },

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsSize='xsmall' onClick={this.open}>Add</Button>
                </ButtonToolbar>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add qualifications... click Add qualification(s) when done</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>What level did you study?</h2>
                        <Input type='select' ref="level" onChange={this.handleLevel}>
                            <option value="a">a</option>
                            <option value="b">b</option>
                        </Input>
                        <ButtonToolbar>
                            <Button onClick={this.addSingleQual}>Add</Button>
                        </ButtonToolbar>
                        <p>Dummy text for now...</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addQualifications}>Add qualification(s)...</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});