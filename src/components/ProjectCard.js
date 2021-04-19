import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Col4, Col8 } from '../components/shared/grid';

const Div = styled.div`
	padding: 3rem 0;
	border-bottom: 2px #202020 solid;
`;

const StyledImg = styled.img`
	width: 100%;
	max-height: 600px;
	object-fit: cover;
	margin: 2rem 0;
	transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&:hover {
		transform-style: preserve-3d;
		transform: rotateY(-0.5deg) scale(0.95);
	}
`;

const Title = styled.h1`
	font-size: 4rem;
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

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	align-items: flex-start;
`;

const ProjectCard = ({ img, title, description, category, link }) => {
	return (
		<Div>
			<Grid>
				<Col4>
					<TextContainer>
						<span style={{ display: 'block', width: '100%' }}>
							<Title>{title}</Title>
							<Description>{description}</Description>
						</span>

						<Category>{category}</Category>
					</TextContainer>
				</Col4>
				<Col8 style={{ perspective: '100px' }}>
					<StyledImg src={img}></StyledImg>
				</Col8>
			</Grid>
		</Div>
	);
};

export default ProjectCard;
