import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
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

    remove() {
        console.log(this.props);
        ViewActions.removeStudy(this.props.institution);
    },

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsSize='xsmall' onClick={this.open}>Edit</Button>
                    <Button bsSize='xsmall' bsStyle='danger' onClick={this.remove}>Remove</Button>
                </ButtonToolbar>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add qualifications</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Level did you study?</h2>
                        <p>Dummy text for now...</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});
