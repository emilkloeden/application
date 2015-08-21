import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';



export default React.createClass({
    _onAddClick() {
        ViewActions.addStudy(this.props.institution);
    },

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle='primary' bsSize='xsmall' onClick={this._onAddClick}>Add</Button>
                </ButtonToolbar>
            </div>
        );
    }
});

