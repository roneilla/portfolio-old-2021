import React from 'react';
import styled from 'styled-components';
import {
	Container,
	CenteredWrapper,
	H1,
	H2,
	H3,
	H4,
	P,
	Caption,
	GreyBG,
	StickyDiv,
	Section,
	MediumSection,
	SmallSection,
	StyledImg,
} from '../components/shared/global';
import { Grid, Col6, Col12 } from '../components/shared/grid';
import Label from '../components/shared/Label';
import Star from '../images/star.svg';
import { Link, useLocation } from 'react-router-dom';

import projectData from './../projectData';

import doodlevr from './../images/doodle-thumbnail.jpg';
import tippt from './../images/tippt-thumbnail.png';

const StyledSection = styled(Section)`
	border: 0;
`;

const StyledStar = styled.img`
	width: 100px;
	object-fit: contain;
	margin-bottom: 2rem;
`;

const CardImg = styled.div`
	width: 100%;
	height: 600px;
	background-color: transparent;
	display: block;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

const CardDiv = styled.div`
	border-bottom: 2px #202020 solid;
	padding: 2rem 0;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #202020;
`;

const OtherProjects = () => {
	const { pathname } = useLocation();

	const projectDataCards = projectData
		.filter(({ link }) => link !== pathname)
		.map((project) => (
			<StyledLink to={project.link}>
				<CardDiv key={project.title}>
					<H3>{project.title}</H3>
					<P>{project.description}</P>
					{project.projectName === 'tippt' ? (
						<StyledImg src={tippt}></StyledImg>
					) : (
						<StyledImg src={doodlevr}></StyledImg>
					)}
				</CardDiv>
			</StyledLink>
		));

	return (
		<Container>
			<StyledSection>
				<Grid>
					<Col6>
						<StickyDiv>
							<StyledStar src={Star}></StyledStar>
							<H2>View Other Projects</H2>
						</StickyDiv>
					</Col6>
					<Col6>{projectDataCards}</Col6>
				</Grid>
			</StyledSection>
		</Container>
	);
};

export default OtherProjects;
