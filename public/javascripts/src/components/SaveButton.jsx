import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap'


export default React.createClass({
    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle='primary' >Save</Button>
            </ButtonToolbar>
        )
    }
})