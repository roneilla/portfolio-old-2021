import React from 'react';
import { BetweenWrapper, H4, P } from './shared/global';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
`;

const WorkContainer = styled(Link)`
	color: #111;
	text-decoration: none;
`;

const StyledH4 = styled(H4)`
	font-family: moret;
	margin: 1rem 0;
`;

const Wrapper = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

const Category = styled.div`
	font-weight: 500;
	text-transform: uppercase;
	border: 2px solid #202020;
	padding: 5px 15px;
	border-radius: 30px;
	display: inline;
	font-family: halyard-display, sans-serif;
	font-size: 1rem;
`;

const WorkCard = (props) => {
	return (
		<WorkContainer to={props.link}>
			<StyledImg src={props.img}></StyledImg>
			<Wrapper>
				<StyledH4>{props.title}</StyledH4>
				<Category>{props.category}</Category>
			</Wrapper>
			<P>{props.description}</P>
		</WorkContainer>
	);
};

export default WorkCard;
