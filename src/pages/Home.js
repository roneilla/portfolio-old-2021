import React, { useState, useEffect } from 'react';
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
	Button,
} from '../components/shared/global';
import { Grid, Col6, Col12 } from '../components/shared/grid';
import Label from '../components/shared/Label';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import InteractiveHeader from './../components/InteractiveHeader';
import projectData from './../projectData';
import ScrollingBar from '../components/shared/ScrollingBar';

const Header = styled(Grid)`
	color: #202020;
	height: calc(80vh - 200px);
	margin-bottom: 2rem;
	/* padding: 2rem; */
	@media (max-width: 400px) {
		height: calc(65vh - 200px);
	}
	@media (min-width: 401px) and (max-width: 800px) {
	}
`;

const Title = styled(Col6)`
	font-size: 12rem;
	width: 100%;
	line-height: 12rem;
	font-family: moret, serif;
	color: #202020;
	transition: 0.2s ease;
	@media (max-width: 400px) {
		font-size: 4rem;
		line-height: 4rem;
		margin-bottom: 1rem;
	}
`;

const Subtitle = styled(Col6)`
	font-size: 2.75rem;
	color: #202020;
	font-family: halyard-display, sans-serif;
	text-align: right;
	text-transform: uppercase;
	align-self: end;
	justify-self: end;
	font-weight: 500;

	@media (max-width: 400px) {
		font-size: 1.5rem;
	}
	@media (max-width: 768px) {
		text-align: left;
		align-self: start;
		justify-self: start;
	}
`;

const SelectedProjects = styled.div`
	color: #202020;
	padding: 2rem 0 2rem 0;
`;

const ProjectsTitle = styled(Col12)`
	border-bottom: 2px #202020 solid;
`;

const StyledH3 = styled(H3)`
	font-size: 2.5rem;
	@media (max-width: 400px) {
		font-size: 2rem;
		line-height: 3rem;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #202020;
`;

const Home = () => {
	const [showInteractive, setShowInteractive] = useState(true);
	return (
		<div>
			<Container>
				{showInteractive === true ? (
					<Header>
						<InteractiveHeader></InteractiveHeader>
					</Header>
				) : (
					<Header>
						<Title>Hi, I'm Roneilla!</Title>
						<Subtitle>Interaction Designer based in Toronto.</Subtitle>
					</Header>
				)}
			</Container>
			<ScrollingBar text="Featured Work" icon="ArrowS"></ScrollingBar>
			<SelectedProjects>
				<Container>
					<Grid>
						{projectData.map((project) => (
							<Col12 key={project.projectName}>
								<StyledLink to={project.link}>
									<ProjectCard
										title={project.title}
										description={project.description}
										category={project.category}
										img={project.img}
										imgHover={project.imgHover}></ProjectCard>
								</StyledLink>
							</Col12>
						))}
					</Grid>
				</Container>
			</SelectedProjects>
		</div>
	);
};

export default Home;
