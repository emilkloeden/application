import React from 'react';
import { Input } from 'react-bootstrap';
import ViewActions from '../actions/ViewActions.js';
import CountryLevels from '../../../data/CountryLevels.js';

export default React.createClass({
    
    getInitialState() {
        return {
            value: "select..."
        };
    },

    render() {

        var levels;
        
        if (this.props.institution.country) {
            levels = CountryLevels.filter((a) => a.country === this.props.institution.country);
        }
        else {
            levels = CountryLevels.filter((a) => (!a.country));
        }
        var options = levels.map((a)=> <option key={a.id} value={a.level}>{a.level}</option>);
        console.log('levels');
        console.log(levels);
        return (
            <Input 
                type="select"
                ref="levelSelect" 
                placeholder="select"
                onChange={this.handleLevel}
                label={this.props.label}
            >
                {options}
            </Input>
        );
    },

    handleLevel() {
        console.log('handle level');
        this.setState({value: this.refs.levelSelect.getValue()})
        console.log(this.state)
        console.log(this.refs)
    }
});

