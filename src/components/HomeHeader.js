import React from 'react';
import styled from 'styled-components';
import { H1, H2 } from '../styles/typography';

import Dribbble from './../assets/social-icons/dribbble.png';
import Email from './../assets/social-icons/email.png';
import Instagram from './../assets/social-icons/instagram.png';
import Github from './../assets/social-icons/github.png';
import Linkedin from './../assets/social-icons/linkedin.png';

import ID from './../assets/id.png';
import CD from './../assets/cd.png';
import Amper from './../assets/amp.png';

const Header = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 3rem 0;
`;

const TitleContainer = styled.div`
	display: flex;
	width: 100%;
	/* height: 60vh; */

	@media (max-width: 600px) {
		flex-direction: column;
	}
	@media (min-width: 601px) {
		flex-direction: row;
	}
`;

const SideA = styled.span`
	align-items: flex-start;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const SideB = styled.span`
	align-items: flex-end;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
`;

const HeaderTitle = styled(H2)`
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 500;
	font-size: 5rem;
	mix-blend-mode: hard-light;
`;

const Amp = styled.span`
	color: #fff;
	font-size: 15rem;
	font-family: halyard-display, sans-serif;
	font-weight: 500;
`;

const HeaderRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 5rem;
`;

const HeaderRowChild = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Roles = styled(H2)`
	max-width: 200px;
	font-size: 1rem;
	text-transform: uppercase;
	color: #eee;
	margin-right: 2rem;
`;

const SocialMediaIcon = styled.img`
	width: 30px;
	height: 30px;
	object-fit: contain;
`;

const A = styled.a`
	margin: 0 1rem;
`;

const Img = styled.img`
	width: 100%;
	object-fit: contain;
	min-width: 300px;
`;

const AmperImg = styled.img`
	width: 25%;
	object-fit: contain;
	min-width: 150px;
	margin-top: 2rem;
`;

const HomeHeader = () => {
	return (
		<Header>
			<TitleContainer>
				<SideA>
					<Img alt="Interaction Designer" src={ID} />
					<AmperImg src={Amper} />
				</SideA>
				<SideB>
					<Img
						style={{ marginTop: '2rem' }}
						alt="Creative Developer"
						src={CD}
					/>
				</SideB>
			</TitleContainer>
			<HeaderRow>
				<HeaderRowChild>
					<Roles>interaction Designer @ ASTOUND Group</Roles>
					<Roles>young jury @ awwwards</Roles>
				</HeaderRowChild>
				<HeaderRowChild>
					<A target="_blank" href="https://instagram.com/eillamadethis">
						<SocialMediaIcon src={Instagram} />
					</A>
					<A target="_blank" href="https://linkedin.com/in/roneilla">
						<SocialMediaIcon src={Linkedin} />
					</A>
					<A target="_blank" href="https://dribbble.com/roneilla">
						<SocialMediaIcon src={Dribbble} />
					</A>
					<A target="_blank" href="https://github.com/roneilla">
						<SocialMediaIcon src={Github} />
					</A>
					<A target="_blank" href="mailto:roneillabumanlag@gmail.com">
						<SocialMediaIcon src={Email} />
					</A>
				</HeaderRowChild>
			</HeaderRow>
		</Header>
	);
};

export default HomeHeader;
