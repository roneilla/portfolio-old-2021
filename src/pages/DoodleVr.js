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
	StyledH4,
	HorizontalDiv,
} from '../components/shared/global';
import { Grid, Col6, Col12, Col8, Col10 } from '../components/shared/grid';
import Label from '../components/shared/Label';

import ProjectHeader from '../components/ProjectHeader';
import OtherProjects from '../components/OtherProjects';

import ProjectCard from '../components/ProjectCard';

import Thumbnail from './../images/thumbnails/doodlevr.jpg';

import DoodleThen from './../images/doodle-2.jpg';
import Fireworks from './../images/fireworks.gif';
import Balloon from './../images/balloon.gif';
import Sensorama from './../images/sensorama.gif';
import Wireframe from './../images/wireframe.gif';

const DoodleImg = styled(StyledImg)`
	margin: 0 1rem;
`;

const DoodleVr = () => {
	return (
		<div>
			<Container>
				<ProjectCard
					title="Google Doodle VR"
					description="Rethinking Google Doodles to create an immersive experience celebrating 50 years of VR"
					category="AR/VR"
					img={Thumbnail}></ProjectCard>
				<ProjectHeader
					label="Overview"
					description={`We were asked to create a 2D Google Doodle, but we decided to create a 3D virtual reality experience in order to fully convey the meaning of virtual reality. We decided to create a virtual reality experience celebrating the 50 year anniversary of VR. Our main goal was to make an accessible experience that even users without expensive VR headsets could experience.`}
					date="June 2020 - January 2021"
					roles="AR Development"
					tools="HTML/CSS, A-Frame (WebVR), JavaScript"
					collaborators="Izzy Vohsemer, Risi Zani"></ProjectHeader>
				<Section>
					<Grid>
						<Col12>
							<H1>
								A web-based interactive VR Google Doodle that is accessible on
								desktop and utilizes inexpensive headsets for mobile users.
							</H1>
						</Col12>
						<Col6>
							<StickyDiv>
								<H4>
									Two walkable environments transitioning from old to new.
								</H4>
								<P>
									We are celebrating an anniversary, so we wanted to show both
									the past and present of virtual reality in order to show how
									much it has come in the past 50 years of its existence.
								</P>
							</StickyDiv>
						</Col6>
						<Col6>
							<SmallSection>
								<StyledH4>Then – Wireframe</StyledH4>
								<StyledImg src={DoodleThen}></StyledImg>
							</SmallSection>
							<SmallSection>
								<StyledH4>Now – Low Poly Environment</StyledH4>
								<StyledImg src={Thumbnail}></StyledImg>
							</SmallSection>
						</Col6>
					</Grid>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv>
									<H4>Adding interactivity to increase engagement</H4>
								</StickyDiv>
							</Col6>
							<Col6>
								<SmallSection>
									<StyledH4>Sensorama Machine + PORTAL</StyledH4>
									<HorizontalDiv>
										<DoodleImg src={Sensorama}></DoodleImg>
										<DoodleImg src={Wireframe}></DoodleImg>
									</HorizontalDiv>
									<P>
										The first interaction If the user gazes over, a text box
										with a brief description of the sensorama will appear.
										<br></br>
										<br></br>
										If the user approaches the sensorama, they will see that is
										has a dark screen. After a few seconds of gazing into the
										sensorama, the user will be redirected to the wireframe
										environment. It represents what you would see if you looked
										into a real sensorama.
										<br></br>
										<br></br>
										PS: This is a tribute to the first VR machine.
									</P>
								</SmallSection>
								<SmallSection>
									<StyledH4>Party components</StyledH4>
									<HorizontalDiv>
										<DoodleImg src={Balloon}></DoodleImg>
										<DoodleImg src={Fireworks}></DoodleImg>
									</HorizontalDiv>
									<P>
										Gazing on the balloons on top of the text will trigger their
										explosion.
										<br></br>
										<br></br>
										To the left is a small box of fireworks. After the user
										gazes at the firework for a few seconds, this will emit an
										effect which “launches” the fireworks and triggers an
										explosion.
									</P>
								</SmallSection>
							</Col6>
						</Grid>
					</MediumSection>
				</Section>
				<Section>
					<Grid>
						<Col6>
							<H1>Listening to Our Users</H1>
						</Col6>
						<Col6></Col6>
						<Col6>
							<StickyDiv>
								<Label text="User Testing"></Label>
								<P>
									We performed our first user test after hitting our first
									milestone, which was importing the first draft of our 3d model
									with minor interactions. We created changes to our experience
									based on the following feedback:
								</P>
							</StickyDiv>
						</Col6>
						<Col6>
							<SmallSection>
								<StyledH4>“Colours are too dull.”</StyledH4>
								<P>
									We fixed the colours in order to better fit in the
									environment. The bigger challenge was making sure that the
									colours were consistent, due to the lighting of the scene.
								</P>
							</SmallSection>
							<SmallSection>
								<StyledH4>“Oops, I accidentally teleported.”</StyledH4>
								<P>
									Some users also reported accidentally teleporting because of
									the placement of the portals, and not knowing what to do in
									terms of interactivity.
								</P>
							</SmallSection>
							<SmallSection>
								<StyledH4>“Instructions Unclear.”</StyledH4>
								<P>
									We added tooltips to the scene to help users navigate and
									interact with the environment.
								</P>
							</SmallSection>
						</Col6>
					</Grid>
				</Section>
				<Section>
					<Grid>
						<Col6>
							<StickyDiv>
								<H1>What I Learned</H1>
							</StickyDiv>
						</Col6>
						<Col6>
							<SmallSection>
								<H4>REFLECTION</H4>
								<P>
									My team was really proud of our outcome. We created a VR
									experience! The few weeks of coding helped me sharpen my
									coding skills: both development and problem-solving. I learned
									a new language (A-Frame) and improved my knowledge and skills
									in another (JavaScript).
									<br></br>
									<br></br>
									Before this project, I had minimal experience with JavaScript.
									I didn’t fully understand how it all worked. I learned how
									various parts of JavaScript work, as well as how to properly
									organize code in order to make my workflow more efficient.
									<br></br>
									<br></br>
									For future iterations and development, I would improve the
									experience by implement collision detection so users can’t
									drift out of the environment. I would also explore the
									possibility of experience in order to raise user interest and
									interaction.
								</P>
							</SmallSection>
							<SmallSection>
								<H4>Gamify the interactions to retain attention.</H4>
								<P>
									I learned how to design an experience used for fun rather than
									a solution that solves problems. As an interaction designer,
									stepping out of the problem-solving mindset was challenging.
									<br></br>
									<br></br>
									During the conceptual process, we wanted to ensure that what
									we made was interesting enough for users to want to see it. We
									wanted to retain their attention long enough for them to enjoy
									the VR, and find the easter eggs we hid all over the
									environment.
								</P>
							</SmallSection>
							<SmallSection>
								<H4>Always test your product.</H4>
								<P>
									During the first half of development, we were the only ones
									who looked at the project. We couldn’t see any flaws or issues
									with the experience after looking at the project for so long.
									<br></br>
									<br></br>
									After we conducted our first round of user testing, we found
									many issues such as colours, weird positioning of items, and
									incomprehensible interactions. We made the appropriate changes
									according to the feedback we received. For the last half of
									the project, we performed constant user testing to make sure
									that the experience was as user-friendly and user-centered as
									possible!
								</P>
							</SmallSection>
						</Col6>
					</Grid>
				</Section>
				<OtherProjects></OtherProjects>
			</Container>
		</div>
	);
};

export default DoodleVr;
