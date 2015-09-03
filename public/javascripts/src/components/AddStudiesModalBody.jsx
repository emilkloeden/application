import React from 'react';
import { ButtonToolbar, ButtonInput, Input, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';
import YearInput from './YearInput.jsx'
import LevelInput from './LevelInput.jsx'



export default React.createClass({
    getInitialState() {
        return {
            quals: []//new Set()
        };
    },
    
    addSingleQual() {
        console.log('add single qual clicked');
        console.log(this);
        console.log(this.state);
        let quals = this.state.quals;
        let ref = this.refs;
        if (!(ref.level.state.value && ref.name.getValue() && ref.start.state.value && ref.end.state.value)) {
            console.log('Need some values to add a qual')
        }
        else {
            quals.push({
                level: this.refs.level.state.value ,
                name: this.refs.name.getValue(),
                start: this.refs.start.state.value,
                end: this.refs.end.state.value,
                awarded: this.refs.awarded.getChecked()
            });
            this.setState({quals: quals});
            window.localStorage.setItem('tempStorage', JSON.stringify(this.state.quals));
            console.log(this.state);
        }
    },



    render() {
        let quals = this.state.quals
        console.log('render');
        console.log(studies);
        let studies = quals.map(
            (a) => <ListGroupItem 
                        key={a.id}
                        bsSize="xsmall"
                    >
                        <p>{a.name}</p>
                        <p>{a.start} - {a.end}</p>
                        <p>{a.awarded}</p>
                    </ListGroupItem>
            ); 

        return (

            <div>
                <LevelInput 
                    institution={this.props.institution} 
                    label="What level did you study?"
                    ref="level"
                />
                <Input 
                    label="What was the qualification called?"
                    ref="name"
                    type="text" 
                />
                <YearInput 
                    institution={this.props.institution} 
                    label="When did you start?"
                    placeholder={2000}
                    refName="start"
                    ref="start"
                />
                <YearInput 
                    institution={this.props.institution} 
                    label="When did you finish?"
                    placeholder={2000}
                    refName="end"
                    ref="end"
                />
                <Input
                    label="Awarded?"
                    type='checkbox'
                    ref='awarded'
                />
                
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.addSingleQual}>Add Qualification</Button>
                </ButtonToolbar>
                <h4>{'Qualifications studied at ' + this.props.institution.name}</h4>
                <div className="col-xs-12 col-md-12">
                    {studies}
                </div>
            </div>
        );
    }
});

/*

<ListGroup>
                        {studies}
                    </ListGroup>
<div className="form-control">
                </div>


<YearInput 
                    institution={this.props.institution} 
                    label="When did you stop?"
                    placeholder={2003}
                    refName="End"
                />

<YearInput label="Year started" />
                    <YearInput label="Year started" />

*/