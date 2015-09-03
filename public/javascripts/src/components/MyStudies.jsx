import React from 'react';
import { ListGroup } from 'react-bootstrap'
import AppStore from '../stores/AppStore.js';
import MyStudy from './MyStudy.jsx';


export default React.createClass({
    
    render() {

        let studies = this.props.applicationState.studies
                        .filter(study => study.claimedByApplicant == true);

        console.log('mystudies applicationstate studies')
        console.log(studies)
        return(
            <div>
                <h3>My Studies</h3>
                <ListGroup>
                    {
                        studies
                        .map(institution => 
                                <MyStudy institution={institution} key={institution.id}/>
                            )
                    }
                </ListGroup>
            </div>
            )   
    }
});


