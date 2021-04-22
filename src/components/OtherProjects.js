import React from 'react';
import styled from 'styled-components';
import {
	H2,
	H3,
	P,
	StickyDiv,
	Section,
	StyledImg,
} from '../components/shared/global';
import { Grid, Col6, Col12 } from '../components/shared/grid';
import Label from '../components/shared/Label';
import Star from '../images/star.svg';
import { Link, useLocation } from 'react-router-dom';

import projectData from './../projectData';

import doodlevr from './../images/thumbnails/doodlevr.jpg';
import tippt from './../images/thumbnails/tippt.png';

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
			<StyledLink to={project.link} key={project.title}>
				<CardDiv>
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
	);
};

export default OtherProjects;
