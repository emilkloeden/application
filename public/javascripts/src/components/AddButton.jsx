import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';



export default React.createClass({
    _onAddClick() {
        console.log('Add button clicked');
        ViewActions.addStudy(this.props.institution);
    },

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button 
                        bsStyle='primary' 
                        bsSize='xsmall' 
                        onClick={this._onAddClick} 
                        institution={this.props.institution}
                    >
                        Add
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
});

//institution or this.props.institution