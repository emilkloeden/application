import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, DropdownButton} from 'react-bootstrap';
import { NavItemLink, MenuItemLink } from 'react-router-bootstrap';



export default React.createClass({
    render() {
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
                    <NavItemLink eventKey={1} to="home">Dashboard</NavItemLink>
                    <NavItemLink eventKey={2} to="studies">My Studies</NavItemLink>
                    <NavItemLink eventKey={3} to="experience">My Experience</NavItemLink>
                    <DropdownButton eventKey={5} title='My Applications'>
                        <MenuItemLink 
                            eventKey='1' 
                            to="application" 
                            params={{cycle: "Undergraduate 2016"}}
                        >
                                Undergraduate 2016
                        </MenuItemLink>
                        <MenuItemLink 
                            eventKey='2'
                            to="application" 
                            params={{cycle: "Postgraduate 2016"}}
                        >
                                Postgraduate 2016
                        </MenuItemLink>
                        <MenuItemLink 
                            eventKey='3' 
                            to="application" 
                            params={{cycle: "TAFE 2016"}}
                        >
                                TAFE 2016
                        </MenuItemLink>
                    </DropdownButton>
                </Nav>
            </Navbar>
        )
    }
});


/*


                    <NavItem eventKey={4}>
                        <Link to="courses">My Course Choices</Link>
                    </NavItem> */