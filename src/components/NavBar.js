import React from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import { ReactComponent as Logo } from '../images/roneilla-dark.svg';
import { ReactComponent as LogoLight } from '../images/roneilla-light.svg';

import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
	height: 75px;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ primary }) => (primary ? '#111' : '#fff')};
	color: ${({ primary }) => (primary ? '#fafafa' : '#111')};
`;

const NavMenu = styled.ul`
	display: inline-flex;
	width: 425px;
	list-style-type: none;
	justify-content: space-between;
	align-items: center;
`;

const NavItem = styled.li`
	list-style-type: none;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ primary }) => (primary ? '#fafafa' : '#111')};
`;

const StyledLogo = styled(LogoLight)`
	width: 5rem;
`;

const StyledLogoD = styled(Logo)`
	width: 5rem;
`;

const NavBar = ({ primary }) => {
	const location = useLocation();

	if (location.pathname == '/') {
		return (
			<Nav primary>
				<Link to="/">
					<StyledLogo></StyledLogo>
				</Link>
				<NavMenu>
					<NavItem>
						<StyledLink primary="true" to="/casestudies">
							Case Studies
						</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink primary="true" to="/projects">
							Projects
						</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink primary="true" to="/about">
							About
						</StyledLink>
					</NavItem>
					<NavItem>
						<Button>Say Hello</Button>
					</NavItem>
				</NavMenu>
			</Nav>
		);
	} else {
		return (
			<Nav>
				<Link to="/">
					<StyledLogoD></StyledLogoD>
				</Link>
				<NavMenu>
					<NavItem>
						<StyledLink to="/casestudies">Case Studies</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/projects">Projects</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/about">About</StyledLink>
					</NavItem>
					<NavItem>
						<Button primary>Say Hello</Button>
					</NavItem>
				</NavMenu>
			</Nav>
		);
	}
};

export default NavBar;
