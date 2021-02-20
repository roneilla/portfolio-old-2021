import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
	width: 100%;
	height: 400px;
	object-fit: contain;
	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	transform-origin: ${({ customX }) => customX} ${({ customY }) => customY};
`;

const CardContainer = styled.div`
	/* width: ${({ customWidth }) => customWidth};
    height: ${({ customHeight }) => customHeight}; */
	width: 100%;
	height: 500px;
	background-color: ${({ bgColor }) => bgColor};
	padding: 1rem;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	align-items: center;
	color: ${({ color }) => color};
	float: left;
	margin-top: 2rem;
	margin-bottom: 2rem;
	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) background-color;

	&:hover {
		background-color: ${({ tintColor }) => tintColor};
	}

	${StyledImg}:hover {
		transform: scale(1.1);
	}
`;

const Title = styled.h4`
	font-size: 2rem;
	font-weight: 500;
	margin: 0;
	letter-spacing: -1px;
`;

const Description = styled.p`
	font-size: 1rem;
	margin: 0;
`;

const ProjectCard = ({
	bgColor,
	tintColor,
	color,
	img,
	title,
	description,
	link,
	customX,
	customY,
}) => {
	return (
		<Link to={link}>
			<CardContainer bgColor={bgColor} tintColor={tintColor} color={color}>
				<span style={{ width: '100%' }}>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</span>
				<StyledImg src={img} customX={customX} customY={customY}></StyledImg>
			</CardContainer>
		</Link>
	);
};

export default ProjectCard;
