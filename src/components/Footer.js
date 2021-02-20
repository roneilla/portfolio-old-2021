import React from 'react';
import Dribbble from '../images/dribbble.svg';
import Github from '../images/github.svg';
import Instagram from '../images/instagram.svg';
import LinkedIn from '../images/linkedin.svg';

import styled from 'styled-components';
import Button from './shared/Button';
import Animoji from '../images/footerImg.png';
import { BetweenWrapper, H3, P2 } from '../components/shared/global';

const StyledFooter = styled.footer`
	background-color: #fafafa;
	display: block;
	float: left;
	width: 100%;
`;

const FooterWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 80vh;
`;
const FooterContent = styled.div`
	max-width: 600px;
`;

const Copyright = styled.div`
	background-color: #111;
	color: #fafafa;
	padding: 0rem 2rem;
`;

const StyledAnimoji = styled.img`
	height: 2.5rem;
	margin-right: 1rem;
`;
const CopyText = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 375px) {
		display: block;
	}
`;

const SocialLogo = styled.img`
	width: 1.5rem;
	margin-left: 1rem;
	margin-right: 1rem;
`;

const A = styled.a`
	text-decoration: none;
	color: #fafafa;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<FooterWrapper>
				<FooterContent>
					<H3>Want to work together?</H3>
					<P2>
						I create, design, and build digital solutions for modern problems.
						Currently looking for full-time opportunities beginning May 2021.
					</P2>
					<Button primary>Contact Me</Button>
				</FooterContent>
			</FooterWrapper>
			<Copyright>
				<BetweenWrapper>
					<CopyText>
						<StyledAnimoji src={Animoji}></StyledAnimoji>
						<P2> Designed and built by Roneilla Bumanlag © 2021</P2>
					</CopyText>

					<A href="mailto:roneillabumanlag@gmail.com">
						roneillabumanlag@gmail.com
					</A>

					<span style={{ display: 'inline-block' }}>
						<a href="https://www.instagram.com/eillamadethis/" target="_blank">
							<SocialLogo src={Instagram}></SocialLogo>
						</a>
						<a href="https://dribbble.com/roneilla" target="_blank">
							<SocialLogo src={Dribbble}></SocialLogo>
						</a>

						<a href="https://github.com/roneilla" target="_blank">
							<SocialLogo src={Github}></SocialLogo>
						</a>
						<a href="https://www.linkedin.com/in/roneilla/" target="_blank">
							<SocialLogo src={LinkedIn}></SocialLogo>
						</a>
					</span>
				</BetweenWrapper>
			</Copyright>
		</StyledFooter>
	);
};

export default Footer;
