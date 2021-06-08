import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Col4, Col8 } from '../components/shared/grid';
import { H1 } from './shared/global';
import hoverEffect from 'hover-effect';

const Div = styled.div`
	width: 100%;
	height: 90vh;
	position: relative;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	margin: 2rem 0;
	transition: all 1s ease;
`;

const moveText = keyframes`
	0% {
		transform: translateX(10px);
	}
	
	100% {
		transform: translateX(0px);
	}
`;

const TextContainer = styled.div`
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;
	z-index: 1001;
	transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	width: 100%;
	margin: 1rem;

	${Div}:hover & {
		opacity: 1;
		//animation: ${moveText} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
`;
const Title = styled(H1)`
	/* font-size: 4rem; */
	font-weight: 500;
	font-family: moret, serif;
	width: 100%;
`;

const Description = styled.p`
	font-size: 1.5rem;
	font-family: halyard-display, sans-serif;
	width: 100%;
	margin: 2rem 0;
`;

const Category = styled.div`
	font-weight: 500;
	text-transform: uppercase;
	border: 2px solid #202020;
	padding: 5px 15px;
	border-radius: 30px;
	display: inline;
	font-family: halyard-display, sans-serif;
	font-size: 1.25rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const ProjectCard = ({ img, title, description, category, imgHover }) => {
	const container = useRef();

	useEffect(() => {
		new hoverEffect({
			parent: container.current,
			intensity: 0.1,
			image1: img,
			image2: imgHover,
			imagesRatio: 1080 / 1920,
			angle: 90,
			displacementImage:
				'https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg',
		});
	}, []);

	return (
		<Div ref={container}>
			<TextContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Category>{category}</Category>
			</TextContainer>
		</Div>
	);
};

export default ProjectCard;
