import React from 'react';
import { Input } from 'react-bootstrap';




export default  React.createClass({
    getInitialState() {
        return {
            value: null
        };
    },

    validateYear(year) {
        if (year) {
            if (year > 1900 && year < 2015) {
                return "success";
            }
            else {
                return "error";
            }
        }
    },


    handleChange() {
        this.setState({
            value: this.refs[this.props.refName].getValue()
        });
    },
    
    // componentDidUpdate() {
    //     this._myValue = React.findDOMNode(this.refs[this.props.ref]).value
    // },
    
    render() {
        return (
            <Input
                hasFeedback
                ref={this.props.refName}
                type="text"
                label={this.props.label}
                onChange={this.handleChange}
                value={this.state.value}
                bsStyle={this.validateYear(this.state.value)}
                
            />
        )
    }
});

/*

onChange={this.handleChange()}

React.findDOMNode(this.refs[this.props.ref]).value
onChange={this.handleChange()}
value={this.state.value}
                placeholder={this.props.placeholder}
bsStyle = {this.validateYear(this.state.value)}
type="password"
                label = {this.props.label}
                bsStyle = {this.validateYear(this.state.value)}
                ref = 'input'
                value= {this.state.value}
value= {this.state.value}

*/