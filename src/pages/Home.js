import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/HomeHeader';
import Scrolling from '../components/Scrolling';
import { H1 } from '../styles/typography';

import { Container } from './../styles/layouts';

const H1_Blue = styled(H1)`
	color: #7583bb;
	font-size: 4rem;
	font-weight: 500;
	text-align: center;
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 100%;
`;

const Bloc = styled.div`
	height: 500px;
	width: 100%;
	background-color: black;
	margin: 2rem 0;
`;

const Home = () => {
	return (
		<div>
			<Header>
				<HomeHeader />
				<Scrolling />
			</Header>
			<Container style={{ marginTop: '5rem' }}>
				<H1_Blue>Selected Work</H1_Blue>
				<Bloc />
				<Bloc />
				<Bloc />
				<Bloc />
			</Container>
		</div>
	);
};

export default Home;
