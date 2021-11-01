import { Navbar, Container } from "react-bootstrap"

function NavigationBar() {
	return (
		<div>
			<Navbar bg="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home" style={{color: "white"}}>Phurti</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</Container>
			</Navbar>
		</div>
	)
}

export default NavigationBar
