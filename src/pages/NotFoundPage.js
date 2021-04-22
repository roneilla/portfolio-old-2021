import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Button,
	CenteredWrapper,
	H2,
	P,
} from '../components/shared/global';
import styled, { keyframes } from 'styled-components';

import Star from './../images/YellowStar.svg';

const rotate = keyframes`
    0% {
        transform: rotate(0deg) scale(1)
        }
    50% {
        transform: rotate(180deg) scale(2)
        }
    100% {
        transform: rotate(360deg) scale(1)
        }
`;

const StyledImg = styled.img`
	width: 300px;
	margin: 0 auto;
	object-fit: contain;
	transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&:hover {
		animation-name: ${rotate};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
`;

const NotFoundPage = () => {
	return (
		<Container>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<CenteredWrapper>
					<StyledImg src={Star}></StyledImg>
					<H2 style={{ color: '#111', fontSize: '2rem', marginBottom: '1rem' }}>
						Uh oh! looks like that page doesn't exist.
					</H2>
					<P style={{ color: '#111' }}>Click to go home!</P>
				</CenteredWrapper>
			</Link>
		</Container>
	);
};

export default NotFoundPage;
