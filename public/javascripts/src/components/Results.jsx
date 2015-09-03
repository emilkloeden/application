import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Result from './Result.jsx';
import API from '../stores/API.js';

export default React.createClass({

    
    render() {

        if(this.props.filterText.length > 0) {
            let applicationState = this.props.applicationState;
            let studies = applicationState.studies;
            let institutions = studies
                .filter((institution) => institution.name.toLowerCase().indexOf(this.props.filterText) !== -1 )
                .filter(institution => !institution.claimedByApplicant)
                .map(institution => <Result institution={institution} key={institution.id} />)

            /* Handle short lists */
            if (institutions.length < 3) {
                institutions.push(
                    <ListGroupItem key={999}>
                        My institution ain't here... add button to come
                    </ListGroupItem>
                );
            }
            return(
                <ListGroup>
                    {institutions}
                </ListGroup>
            )
  
        } else {
            return (<ListGroup></ListGroup>)
        }
    }
});
