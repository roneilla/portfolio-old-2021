import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import { ReactComponent as Logo } from '../images/roneilla-icon.svg';
import { ReactComponent as SayHello } from '../images/say-hello.svg';
import { Grid, Col1 } from '../components/shared/grid';
import { A } from '../components/shared/global';

import { Link } from 'react-router-dom';

const Nav = styled.nav`
	padding: 2rem 2rem;
	background-color: transparent;
`;

const NavMenu = styled.ul`
	list-style-type: none;
	display: inline-flex;
	grid-column: 5 / 10;
	justify-content: space-between;

	@media (max-width: 600px) {
		display: none;
	}

	@media (max-width: 1100px) {
		grid-column: 5/10;
	}
`;

const NavItem = styled.li`
	list-style-type: none;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #202020;
	font-family: halyard-display, sans-serif;
	font-size: 1.25rem;
	text-transform: uppercase;
`;

const StyledLogo = styled(Logo)`
	width: 100%;
	justify-self: start;
	align-self: start;
`;

const StyledContact = styled(SayHello)`
	width: 100px;
	position: fixed;
	right: 2rem;
	top: 2rem;
	z-index: 1001;
`;

const LogoContainer = styled.div`
	width: 100px;
	@media (min-width: 401px) {
		position: fixed;
		top: 2rem;
		left: 2rem;
	}
`;

const NavBar = () => {
	const imageRef = useRef();

	useEffect(() => {
		window.addEventListener('scroll', (event) => {
			requestAnimationFrame(() => {
				const rotation = window.scrollY / 5;
				imageRef.current.style.transform = `rotate(${rotation}deg)`;
			});
		});
	}, []);

	return (
		<Nav>
			<LogoContainer>
				<Link to="/">
					<StyledLogo height="100%"></StyledLogo>
				</Link>
			</LogoContainer>

			<Grid>
				<NavMenu>
					{/* <NavItem>
						<StyledLink primary="true" to="/casestudies">
							Case Studies
						</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink primary="true" to="/projects">
							Work
						</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink primary="true" to="/about">
							About
						</StyledLink>
					</NavItem> */}
				</NavMenu>

				<A
					href="mailto:roneillabumanlag@gmail.com"
					style={{
						textTransform: 'uppercase',
						fontSize: '1.25rem',
						padding: '1rem 0',
					}}>
					<StyledContact ref={imageRef}></StyledContact>
				</A>
			</Grid>
		</Nav>
	);
};

export default NavBar;
