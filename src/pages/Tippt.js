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
	GreyBG,
} from '../components/shared/global';
import { Grid, Col6, Col12, Col8_Ctr } from '../components/shared/grid';
import Label from '../components/shared/Label';

import ProjectHeader from '../components/ProjectHeader';

import S_Home from '../images/tippt/homePage.png';
import S_Profile from '../images/tippt/profile.png';
import S_RestaurantInfo from '../images/tippt/restaurantInfo.png';

export const HeaderImgWrapper = styled.div`
	display: flex;
	padding: 2rem;
	width: 100%;
`;

export const HeaderImg = styled.img`
	flex: 1;
	padding: 1rem;
	min-width: 100px;
`;

export const StyledCol8_Ctr = styled(Col8_Ctr)`
	padding-top: 5rem;
	padding-bottom: 5rem;
`;

export const StyledH2 = styled(H2)`
	margin-top: 3rem;
	margin-bottom: 3rem;
`;

const Tippt = () => {
	return (
		<div>
			<Grid>
				<Col12>
					<ProjectHeader
						name="Tippt"
						description="Helping users make greener choices through a sustainability platform"
						date="June 2020 – January 2021"
						roles="UX Design, Front End Dev"
						tools="Figma, ReactJS, Miro"
						collaborators="Nellie Spektor, Mina Malloy"></ProjectHeader>
				</Col12>
				<Col12>
					<HeaderImgWrapper>
						<HeaderImg src={S_Home}></HeaderImg>
						<HeaderImg src={S_Profile}></HeaderImg>
						<HeaderImg src={S_RestaurantInfo}></HeaderImg>
					</HeaderImgWrapper>
				</Col12>
			</Grid>
			<GreyBG>
				<Grid>
					<StyledCol8_Ctr>
						<Label text="Overview"></Label>
						<P>
							Tippt is a platform that scores restaurants based on their
							sustainability level. It aims to help customers make greener
							choices when purchasing take outs from restaurants and other food
							places (bar, cafe, etc). My official role is UX/UI Designer, but I
							also help out with branding, social media, and front end
							development.
							<br></br>
							<br></br>
							Nellie Spektor, the Founder, had the initial idea of creating a
							platform where users can search for food places that offer take
							out by their sustainability score. Throughout the summer, we aimed
							to consult with our target audience to ground the platform and
							experience in user research.
						</P>
					</StyledCol8_Ctr>
				</Grid>
			</GreyBG>
			<Grid>
				<StyledCol8_Ctr>
					<StyledH2>
						Aligning the Visual Identity with Tippt’s Mission &amp; Values
					</StyledH2>
					<Label text={`Branding & Visual Identity`}></Label>
					<P>
						When I first started working on Tippt, the first thing I proposed
						was a logo redesign. I noticed that the current icon and logos
						needed a revamp to better showcase Tippt’s mission and values. The
						colours also needed to be refined to become web accessible. I had a
						short conversation with Nellie to understand the identity she wants
						to depict with Tippt. She wanted to have imagery that represents
						food, sustainability, and take out. She wanted to use blue and
						green, taken from her original logo, in order to portray
						sustainability, earth, and eco-friendliness.
						<br></br>
						<br></br>
						*The photo below displays Tippt’s Brand Guide used for branding and
						marketing purposes. There is a separate guide for the design system
						and web usage.
					</P>
				</StyledCol8_Ctr>
			</Grid>
		</div>
	);
};

export default Tippt;
