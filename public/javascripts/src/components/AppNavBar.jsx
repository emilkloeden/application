var React = require('react');
var Link = require('react-router').Link;

var Nav             = require('react-bootstrap').Nav;
var Navbar          = require('react-bootstrap').Navbar;
var NavItem         = require('react-bootstrap').NavItem;
var DropdownButton  = require('react-bootstrap').DropdownButton;
var MenuItem        = require('react-bootstrap').MenuItem;
var CollapsibleNav  = require('react-bootstrap').CollapsibleNav;


var AppNavBar = React.createClass({
    render: function() {
    var user = "Emil"; //getting this from state or props would be cool!
        return (
            
            <Navbar 
                brand={user + "'s Application"} 
                fixedTop 
                bsStyle="success" 
                inverse 
                toggleNavKey={0}
                
            >
                <Nav navbar eventKey={0}>
                    <NavItem eventKey={1}>
                        <Link to="home">Dashboard</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="studies">My Studies</Link>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to="experience">My Experience</Link>
                    </NavItem>
                    <NavItem eventKey={4}>
                        <Link to="courses">My Course Choices</Link>
                    </NavItem>
                    <DropdownButton eventKey={5} title='My Applications'>
                        <MenuItem eventKey='1'>
                            <Link to="application" params={{cycle: "Undergraduate 2016"}}>
                                Undergraduate 2016
                            </Link>
                        </MenuItem>
                        <MenuItem eventKey='2'>
                            <Link to="application" params={{cycle: "Postgraduate 2016"}}>
                                Postgraduate 2016
                            </Link>
                        </MenuItem>
                        <MenuItem eventKey='3'>
                            <Link to="application" params={{cycle: "TAFE 2016"}}>
                                TAFE 2016
                            </Link>
                        </MenuItem>
                    </DropdownButton>
                </Nav>
            </Navbar>
        )
    }
});

module.exports = AppNavBar;