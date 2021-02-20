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
	P2,
	Caption,
} from '../components/shared/global';
import { Grid, Col6 } from '../components/shared/grid';
import Label from '../components/shared/Label';
import ProjectCard from '../components/ProjectCard';
import Tippt from '../images/tippt-thumbnail.png';
import Doodle from '../images/doodle-thumbnail.png';

const Header = styled.div`
	color: ${(props) => props.theme.light};
	height: calc(100vh - 15rem);
	background-color: ${(props) => props.theme.dark};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 5rem;
	width: 100%;
	letter-spacing: -2px;
	@media (max-width: 375px) {
		font-size: 3rem;
	}
`;

const Subtitle = styled.div`
	font-size: 1.25rem;
	color: ${(props) => props.theme.grey};
	font-family: ${(props) => props.theme.secondaryFont};
	width: 100%;
`;

const SelectedProjects = styled.div`
	color: ${(props) => props.theme.dark};
	padding: 2rem 0;
`;

const StyledH3 = styled(H3)`
	text-align: center;
	font-family: ${(props) => props.theme.secondaryFont};
	margin: 2rem 0;
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
`;

const Home = () => {
	return (
		<div>
			<Header>
				<Container>
					<Title>Hello! I'm an Interaction Designer based in Toronto.</Title>
					<Subtitle>Currently UX @ Tippt and VeganHive</Subtitle>
				</Container>
			</Header>
			<SelectedProjects>
				<Container>
					<StyledH3>Selected Work</StyledH3>
					<Grid>
						<Col6>
							<ProjectCard
								bgColor="#D1F0CE"
								tintColor="#C1E7BD"
								title="Tippt"
								description="UX Design"
								color="black"
								img={Tippt}
								link="/tippt"
								customX="center"
								customY="center"></ProjectCard>
						</Col6>
						<Col6>
							<ProjectCard
								bgColor="#D8E9FF"
								tintColor="#BFD3ED"
								title="Google Doodle VR"
								description="AR/VR"
								color="black"
								img={Doodle}
								link="/doodlevr"
								customX="center"
								customY="center"></ProjectCard>
						</Col6>
					</Grid>
				</Container>
			</SelectedProjects>
		</div>
	);
};

export default Home;
