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

import ManropeSVG from '../images/Manrope.svg';
import CorbenSVG from '../images/Corben.svg';
import TipptLogo from '../images/tippt-logo.svg';

import Thumbnail from '../images/tippt-thumbnail.png';
import AffinityMap from '../images/tippt/affinitymap-1.jpg';

import CollegePersona from '../images/tippt/CollegeStudent.png';
import CollegeJourney from '../images/tippt/college-student-journey.jpg';
import EcoMPersona from '../images/tippt/Eco-Millenial.png';
import EcoMJourney from '../images/tippt/eco-millenial-journey.jpg';
import ParentPersona from '../images/tippt/Parent.png';
import ParentJourney from '../images/tippt/parent-journey.jpg';

import UserFlow1 from '../images/tippt/userflow-1.jpg';
import UserFlow2 from '../images/tippt/userflow-2.jpg';
import UserFlow3 from '../images/tippt/userflow-3.jpg';
import UserFlow4 from '../images/tippt/userflow-4.jpg';

import Sitemap from '../images/tippt/sitemap.jpg';
import Wireframe from '../images/tippt/wireframe.png';

import DS1 from '../images/tippt/dessys1.png';
import DS2 from '../images/tippt/dessys2.png';
import HighFi from '../images/tippt/highfi.png';
import Spacers from '../images/tippt/spacers.png';

import TP1 from '../images/tippt/TP-1.png';
import TP2 from '../images/tippt/TP-2.png';
import TP3 from '../images/tippt/TP-3.png';
import TP4 from '../images/tippt/TP-4.png';
import TP5 from '../images/tippt/TP-5.png';
import TP6 from '../images/tippt/TP-6.png';
import TP7 from '../images/tippt/TP-7.png';

const HeaderImgWrapper = styled.div`
	display: flex;
	padding: 2rem;
	width: 100%;
`;

const HeaderImg = styled.img`
	flex: 1;
	padding: 1rem;
	min-width: 100px;
`;
const StyledH2 = styled(H2)`
	margin-top: 3rem;
	margin-bottom: 3rem;
`;

const BrandImg = styled.img`
	margin: 2rem 1rem;
`;

const ColourDiv = styled.div`
	width: 100%;
	height: 5rem;
	border-radius: 5px;
	margin: 2rem 0;
`;

const ProtoImg = styled.img`
	max-height: 800px;
	margin: 0 1rem;
`;

const Tippt = () => {
	return (
		<div>
			<Container>
				<ProjectCard
					title="Tippt"
					description="Helping users make greener choices through a sustainability platform"
					category="UX Design"
					img={Thumbnail}></ProjectCard>
				<ProjectHeader
					label="Overview"
					description={`Tippt is a platform that scores restaurants based on their sustainability level. It aims to help customers make greener choices when purchasing take outs from restaurants and other food places (bar, cafe, etc). My official role is UX/UI Designer, but I also help out with branding, social media, and front end development.\n\nNellie Spektor, the founder, had the initial idea of creating a platform where users can search for food places that offer take out by their sustainability score. Throughout the summer, we aimed to consult with our target audience to ground the platform and experience in user research.`}
					date="June 2020 - January 2021"
					roles="UX Design, Front End Development"
					tools="Figma, Mirror, ReactJS"
					collaborators="Nellie Spektor, Mina Malloy"></ProjectHeader>
				<Section>
					<Grid>
						<Col6>
							<H1>
								Aligning the Visual Identity with Tippt’s Mission &amp; Values
							</H1>
						</Col6>
						<Col6></Col6>
						<Col6>
							<StickyDiv>
								<span style={{ margin: '2rem' }}>
									<Label text="Branding &amp; Visual Identity"></Label>
									<P>
										When I first started working on Tippt, the first thing I
										proposed was a logo redesign. I noticed that the current
										icon and logos needed a revamp to better showcase Tippt’s
										mission and values. The colours also needed to be refined to
										become web accessible. I had a short conversation with
										Nellie to understand the identity she wants to depict with
										Tippt. She wanted to have imagery that represents food,
										sustainability, and take out. She wanted to use blue and
										green, taken from her original logo, in order to portray
										sustainability, earth, and eco-friendliness.
										<br></br>
										<br></br>
										*The photo below displays Tippt’s Brand Guide used for
										branding and marketing purposes. There is a separate guide
										for the design system and web usage.
									</P>
								</span>
							</StickyDiv>
						</Col6>
						<Col6>
							<SmallSection>
								<StyledH4>Typography</StyledH4>
								<BrandImg src={CorbenSVG}></BrandImg>
								<BrandImg src={ManropeSVG}></BrandImg>
							</SmallSection>
							<SmallSection>
								<StyledH4>Colours</StyledH4>
								<P>“Tippt Blue” #174887</P>
								<ColourDiv style={{ backgroundColor: '#174887' }}></ColourDiv>
								<P>“Tippt Green” #B7DDB9</P>
								<ColourDiv style={{ backgroundColor: '#B7DDB9' }}></ColourDiv>
							</SmallSection>
							<SmallSection>
								<StyledH4>Logo</StyledH4>
								<BrandImg src={TipptLogo}></BrandImg>
							</SmallSection>
						</Col6>
					</Grid>
				</Section>
				<Section>
					<Grid>
						<Col6>
							<H1>Grounding the Experience in User Research</H1>
						</Col6>
						<Col6></Col6>
						<Col6>
							<span style={{ margin: '2rem' }}>
								<Label text="User Consultation"></Label>
								<P>
									After doing the survey and interviews, we mapped out the
									answers to questions about their influences, current steps
									taken to be more sustainable, sources of information, barriers
									to being more sustainable, effects of COVID-19 on their take
									out habits, as well as their opinions on ratings/reviews.
									<br></br>
									<br></br>I conducted a design sprint where the team and I
									brainstormed categorized sticky notes and created
									opportunities – solutions to the issues. We generated an
									extensive list, but we decided to refine it into a shorter
									list for MVP. (Note: the list below was refined further during
									a later MVP meeting, the list is available further down this
									case study!)
									<br></br>
									<br></br>
								</P>
								<ol>
									<li>View contact info of restaurants</li>
									<li>Assess the restaurant’s packaging</li>
									<li>Sustainability tips before going to a restaurant</li>
									<li>Reminder to leave a review</li>
									<li>Offer incentives to leave reviews</li>
									<li>
										Show information about what they can do for each restaurant
										(i.e this restaurant accepts reusables!)
									</li>
									<li>Add photos to a review</li>
									<li>See tippt-provided information</li>
									<li>
										Leave a review based on their packaging and accomodations
										(reusables, allergies, substitutions, etc.)
									</li>
									<li>Create account</li>
									<li>Search restaurants</li>
								</ol>
							</span>
						</Col6>
						<Col6>
							<StickyDiv>
								<StyledImg src={AffinityMap}></StyledImg>
								<Caption>
									Above: A screenshot of the affinity map Miro board, separate
									from our original survey map.
								</Caption>
							</StickyDiv>
						</Col6>
					</Grid>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv style={{ paddingTop: '3rem' }}>
									<Label text="Personas"></Label>
									<P>
										I conducted a design sprint with the whole team to get
										everyone’s perspectives in analyzing the user research and
										creating personas. Together, we brainstormed the different
										user groups and their demographic and psychographic
										characteristics. My fellow UX designer, Mina, and I took our
										final results from the design sprint and created more
										refined user personas.
									</P>
								</StickyDiv>
							</Col6>
							<Col6>
								<StyledImg src={CollegePersona}></StyledImg>
								<StyledImg src={CollegeJourney}></StyledImg>
								<StyledImg src={EcoMPersona}></StyledImg>
								<StyledImg src={EcoMJourney}></StyledImg>
								<StyledImg src={ParentPersona}></StyledImg>
								<StyledImg src={ParentJourney}></StyledImg>
							</Col6>
						</Grid>
					</MediumSection>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv style={{ paddingTop: '3rem' }}>
									<Label text="User Flows"></Label>
									<P>
										We held a secondary meeting about what features to add to
										MVP, so we took our original list from the brainstorm
										session and refined it, with feasibility, importance, and
										our timeline in mind. Some features were also refined in
										order to be simpler for both the user and development side
										(MVP mindset!)
										<ol>
											<li>Create account/log in</li>
											<li>
												Leave a review focused on the packaging (a Tippt!)
											</li>
											<li>
												Search for restaurants by location then get directions
											</li>
											<li>Add a restaurant</li>
										</ol>
									</P>
								</StickyDiv>
							</Col6>
							<Col6>
								<StyledImg src={UserFlow1}></StyledImg>
								<StyledImg src={UserFlow2}></StyledImg>
								<StyledImg src={UserFlow3}></StyledImg>
								<StyledImg src={UserFlow4}></StyledImg>
							</Col6>
						</Grid>
					</MediumSection>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv style={{ paddingTop: '3rem' }}>
									<Label text="Site Map"></Label>
									<P>
										I worked with Nellie, the founder, and Mina, another UX
										Designer to create a sitemap (with a little bit of
										content/IA) for the whole platform. We expanded on a few
										features, such as the profile and the search feature.
										<br></br>
										<br></br>
										Note: the sitemap on the right was our final version (as of
										September 2020). We originally made one with less
										pages/content, but we changed the sitemap as we progressed.
									</P>
								</StickyDiv>
							</Col6>
							<Col6>
								<StyledImg src={Sitemap}></StyledImg>
							</Col6>
						</Grid>
					</MediumSection>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv style={{ paddingTop: '3rem' }}>
									<Label text="Wireframes"></Label>
									<P>
										In brainstorming for the pages, Mina and I created sketches
										for each pages, then chose our favourite screens or parts of
										the sketches to collaborate on a wireframe. We were
										developing mobile first, so we created mobile screens.
									</P>
								</StickyDiv>
							</Col6>
							<Col6>
								<StyledImg src={Wireframe}></StyledImg>
							</Col6>
						</Grid>
					</MediumSection>
				</Section>
				<Section>
					<Grid>
						<Col6>
							<H1>Extending the Brand Identity into a Digital Platform</H1>
						</Col6>
						<Col6></Col6>
						<Col6>
							<StickyDiv style={{ paddingTop: '3rem' }}>
								<Label text="High Fidelity Wireframes"></Label>
								<P>
									After creating the wireframes, I created a design system while
									simultaneously designing the high fidelity prototype. This
									helped me organize the visual style as well as keep everything
									consistent.
								</P>
							</StickyDiv>
						</Col6>
						<Col6>
							<StyledImg src={HighFi}></StyledImg>
						</Col6>
					</Grid>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv style={{ paddingTop: '3rem' }}>
									<Label text="Design System"></Label>
									<P>
										I decided to utilize spacers on an atomic system in order to
										better space and organize the components and elements on the
										screen. This helped keep our design cleaner and more
										consistent.
									</P>
								</StickyDiv>
							</Col6>
							<Col6>
								<StyledImg src={DS1}></StyledImg>
								<StyledImg src={DS2}></StyledImg>
								<StyledImg src={Spacers}></StyledImg>
							</Col6>
						</Grid>
					</MediumSection>
				</Section>
				<Section>
					<Grid>
						<Col12>
							<H1>
								A platform that provides users with the information they need to
								make sustainable choices
							</H1>
						</Col12>
						<Col6>
							<StickyDiv style={{ paddingTop: '3rem' }}>
								<H4>Leave Reviews Based on a Restaurant's Sustainability</H4>
								<P>
									The backbone of Tippt is its score system developed by our
									sustainabilty expert, Delaney. It is based on the restaurant’s
									type of packaging. It quantifies the materials, production,
									disposal, pollution, and usability. The score system utilizes
									information provided by users in reviews, or “Tippts”.
									<br></br>
									<br></br>
									The submit a tippt flow has changed a lot as we progressed in
									order to simplify and minimize the questions.
								</P>
							</StickyDiv>
						</Col6>
						<Col6>
							<HorizontalDiv>
								{/* <ShadowDiv></ShadowDiv> */}
								<ProtoImg src={TP1}></ProtoImg>
								<ProtoImg src={TP2}></ProtoImg>
								<ProtoImg src={TP3}></ProtoImg>
								<ProtoImg src={TP4}></ProtoImg>
								<ProtoImg src={TP5}></ProtoImg>
							</HorizontalDiv>
						</Col6>
					</Grid>
					<MediumSection>
						<Grid>
							<Col6>
								<StickyDiv style={{ paddingTop: '3rem' }}>
									<H4>Sustainability Features</H4>
									<P>
										We decided to minimize the contact information and show only
										the restaurant’s address, with a button that allows them to
										open up restaurant in Google Maps. We made this decision
										because of financial restraints, we had to limit what
										information we accessed through the Google Places API.
										<br></br>
										<br></br>
										The sustainability features inform users of what the
										restaurant offers. We cut it down to two main categories of
										reusables and zero waste packaging, and a simple boolean
										(true or false) statement about each. By adding the
										expand/collapse functioanlity, they’ll be able to obtain the
										information they need without too much cognitive load.
									</P>
								</StickyDiv>
							</Col6>
							<Col6>
								<HorizontalDiv>
									<ProtoImg src={TP6}></ProtoImg>
									<ProtoImg src={TP7}></ProtoImg>
								</HorizontalDiv>
							</Col6>
						</Grid>
					</MediumSection>
				</Section>
				<Section>
					<Grid>
						<Col6>
							<StickyDiv style={{ paddingTop: '3rem' }}>
								<H2>What I Learned</H2>
							</StickyDiv>
						</Col6>
						<Col6>
							<SmallSection>
								<H4>Keep UX in mind when writing interview questions</H4>
								<P>
									I received some feedback from participants that they were
									confused regading some questions from the survey or interview.
									Even though I was able to answer their questions and refine
									the survey after some feedback, I regret not double checking
									each question properly. For future surveys and interview
									questions, I will ensure that each question is simple and easy
									to understand.
								</P>
							</SmallSection>
							<SmallSection>
								<H4>Define research goals</H4>
								<P>
									Tippt was one of my first non-academic UX/UI experience. One
									of the biggest lessons I learned was to create goals for the
									research. This allows us to understand what we’re looking for
									in interviews, surveys, or secondary research. It also helps
									us know what insights to look for.
									<br></br>
									<br></br>
									It is also important to be able to look back at the goals from
									time to time in order to ensure that we are on the right track
									and within scope of what we want from our research. It can
									also help us find what our research is lacking or what else we
									need to do further research on.
								</P>
							</SmallSection>
							<SmallSection>
								<H4>Prioritize! Prioritize! Prioritize!</H4>
								<P>
									I was first exposed to the concept of MVP at Tippt. It was
									where I learned how to prioritize tasks or features based on
									their importance and feasibility while taking into account
									other factors such as finance and timelines. Learning about
									prioritization helped me better estimate and define the scope
									of tasks, as well as manage my time.
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

export default Tippt;
