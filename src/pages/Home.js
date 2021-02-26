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
} from '../components/shared/global';
import { Grid, Col6, Col12 } from '../components/shared/grid';
import Label from '../components/shared/Label';
import ProjectCard from '../components/ProjectCard';
import Tippt from '../images/tippt-thumbnail.png';
import Doodle from '../images/doodle-thumbnail.jpg';
import { Link } from 'react-router-dom';

const Header = styled(Grid)`
	color: #202020;
	height: calc(100vh - 200px);
	margin-top: 50px;
	padding: 2rem;
	@media (max-width: 400px) {
		height: auto;
		margin-top: 8rem;
		margin-bottom: 6rem;
	}
`;

const Title = styled(Col6)`
	font-size: 10rem;
	width: 100%;
	line-height: 9rem;
	font-family: moret, serif;
	color: #202020;
	transition: 0.2s ease;
	@media (max-width: 400px) {
		font-size: 4rem;
		line-height: 4rem;
		margin-bottom: 1rem;
	}

	@media (min-width: 401px) and (max-width: 1200px) {
		font-size: 8rem;
		line-height: 8.5rem;
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
	@media (min-width: 401px) and (max-width: 1200px) {
		font-size: 2.5rem;
	}
	@media (max-width: 768px) {
		text-align: left;
		align-self: start;
		justify-self: start;
	}
`;

const SelectedProjects = styled.div`
	color: #202020;
	padding: 2rem 0;
`;

const ProjectsTitle = styled(Col12)`
	border-bottom: 2px #202020 solid;
`;

const StyledH3 = styled(H3)`
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
	return (
		<div>
			<Container>
				<Header>
					<Title>Roneilla Bumanlag</Title>
					<Subtitle>
						Interaction Designer based in Toronto. open to full-time and
						freelance opportunities
					</Subtitle>
				</Header>
			</Container>
			<SelectedProjects>
				<Container>
					<Grid>
						<ProjectsTitle>
							<StyledH3>Featured Work</StyledH3>
						</ProjectsTitle>
						<Col12>
							<StyledLink to="/tippt">
								<ProjectCard
									title="Tippt"
									description="Helping users make greener choices through a sustainability platform"
									category="UX Design"
									img={Tippt}></ProjectCard>
							</StyledLink>
						</Col12>
						<Col12>
							<StyledLink to="/doodlevr">
								<ProjectCard
									title="Google Doodle VR"
									description="Rethinking Google Doodles to create an immersive experience celebrating 50 years of VR"
									category="AR/VR"
									img={Doodle}></ProjectCard>
							</StyledLink>
						</Col12>
					</Grid>
				</Container>
			</SelectedProjects>
		</div>
	);
};

export default Home;