import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H1 } from '../styles/typography';
import logo from './../assets/logo.png';

const Nav = styled.nav`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const List = styled.ul`
	list-style-type: none;
`;

const ListItem = styled.li`
	list-style-type: none;
	display: inline-block;
	margin: 0 1rem;
	padding: 0.5rem;
	text-transform: uppercase;
`;

const StyledLink = styled(Link)`
	color: white;
	letter-spacing: 0.5px;
	text-decoration: none;
	font-family: halyard-display, sans-serif;

	&:hover {
		border-bottom: 2px solid white;
	}

	&:active {
		color: #7583bb;
		border-bottom: 2px solid #7583bb;
	}
`;

const Logo = styled.img`
	height: 3rem;
	width: auto;
	object-fit: contain;
`;

const NavItem = ({ link, name }) => {
	return (
		<ListItem>
			<StyledLink to={link}>{name}</StyledLink>
		</ListItem>
	);
};

const Navbar = () => {
	return (
		<Nav>
			<Link to="/">
				<Logo src={logo} />
			</Link>
			<List>
				<NavItem name="Work" link="/work" />
				<NavItem name="After Hours" link="/after-hours" />
				<NavItem name="About" link="/about" />
				<NavItem name="Say Hello!" link="/contact" />
			</List>
		</Nav>
	);
};

export default Navbar;
