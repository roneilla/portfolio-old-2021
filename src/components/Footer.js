import React from 'react';
import Dribbble from '../images/dribbble.svg';
import Github from '../images/github.svg';
import Instagram from '../images/instagram.svg';
import LinkedIn from '../images/linkedin.svg';

import styled from 'styled-components';
import { BetweenWrapper, H4, P } from '../components/shared/global';
import { Grid, Col12, Col6, Col8 } from '../components/shared/grid';

const StyledFooter = styled.footer`
	background-color: #202020;
	display: block;
	float: left;
	width: 100%;
	color: #fff;
	padding: 2rem;
	font-family: halyard-display, sans-serif;
`;

const SocialLogo = styled.img`
	width: 1.5rem;
	margin-left: 1rem;
	margin-right: 1rem;
`;

const A = styled.a`
	text-decoration: underline;
	color: #fafafa;
`;

const StyledCol12 = styled(Col12)`
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const StyledH4 = styled(H4)`
	font-weight: 400;
	font-size: 3rem;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	text-transform: none;
	/* font-family: moret, serif; */
	line-height: 4rem;

	@media (max-width: 400px) {
		font-size: 2rem;
		line-height: 3rem;
	}

	@media (min-width: 401px) and (max-width: 800px) {
		font-size: 2.5rem;
		line-height: 3rem;
	}
`;

const StyledBW = styled(BetweenWrapper)`
	@media (max-width: 800px) {
		flex-direction: column;
		text-align: left;
		align-items: flex-start;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Grid>
				<Col8>
					<StyledH4>
						I create, design, and build digital solutions for modern problems.
						Want to work together?{' '}
						<A href="mailto:roneillabumanlag@gmail.com">Let’s talk!</A>
					</StyledH4>
				</Col8>
				<StyledCol12>
					<StyledBW>
						<P
							style={{
								textTransform: 'uppercase',
								fontSize: '1rem',
								padding: '1rem 0',
								margin: '0',
								lineHeight: '1.25rem',
							}}>
							Designed and built by<br></br>Roneilla Bumanlag © 2021
						</P>

						<A
							href="mailto:roneillabumanlag@gmail.com"
							style={{
								textTransform: 'uppercase',
								fontSize: '1.1rem',
								padding: '1rem 0',
							}}>
							roneillabumanlag@gmail.com
						</A>

						<span style={{ display: 'inline-block', padding: '1rem 0' }}>
							<a
								rel="noreferrer"
								href="https://www.instagram.com/eillamadethis/"
								target="_blank">
								<SocialLogo src={Instagram}></SocialLogo>
							</a>
							<a
								rel="noreferrer"
								href="https://dribbble.com/roneilla"
								target="_blank">
								<SocialLogo src={Dribbble}></SocialLogo>
							</a>

							<a
								rel="noreferrer"
								href="https://github.com/roneilla"
								target="_blank">
								<SocialLogo src={Github}></SocialLogo>
							</a>
							<a
								rel="noreferrer"
								href="https://www.linkedin.com/in/roneilla/"
								target="_blank">
								<SocialLogo src={LinkedIn}></SocialLogo>
							</a>
						</span>
					</StyledBW>
				</StyledCol12>
			</Grid>
		</StyledFooter>
	);
};

export default Footer;
