import { Navbar, Container, Nav} from "react-bootstrap"
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () =>{
    
    return(
        <div>
            <div className="logo">
                        <Link className="linkColor siteName" to="/"><img src='/images/home_logo.png' alt="logo"/></Link>
                    </div>
                    <Container>
            <Navbar fixed="top" className="right-align">
                    <Nav className="mr-auto" id="lidha-menu">
                        <NavDropdown title="Practice">
                            <NavDropdown.Item href="#">About</NavDropdown.Item>
                            <NavDropdown.Item href="#">Services</NavDropdown.Item>
                            <NavDropdown.Item href="#">Team</NavDropdown.Item>
                            <NavDropdown.Item href="#">News</NavDropdown.Item>
                            <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources">
                            <NavDropdown.Item href="#">Techniques</NavDropdown.Item>
                            <NavDropdown.Item href="#">Materials</NavDropdown.Item>
                            <NavDropdown.Item href="#">Sourcing</NavDropdown.Item>
                        </NavDropdown>
                            <NavDropdown title="Workshops">
                            <NavDropdown.Item href="#">Previous</NavDropdown.Item>
                            <NavDropdown.Item href="#">Upcoming</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Projects">
                            <NavDropdown.Item href="#">Architecture</NavDropdown.Item>
                            <NavDropdown.Item href="#">Landscapes</NavDropdown.Item>
                            <NavDropdown.Item href="#">Interior</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Workshops">
                            <NavDropdown.Item href="#">Inquire</NavDropdown.Item>
                            <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="menu-background" id="menu-background"></div>
                
            </Navbar>
            </Container>
        </div>
    )
}
export default Header;