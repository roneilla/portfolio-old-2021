import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Star from './../../images/icons/Star.svg';
import ArrowS from './../../images/icons/ArrowS.svg';
import ArrowE from './../../images/icons/ArrowE.svg';
import ArrowNE from './../../images/icons/ArrowNE.svg';

const Bar = styled.div`
	background-color: #111;
	padding: 1rem 0;
	display: inline-block;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	width: 100%;
	margin: 3rem 0 1rem 0;
	@media (max-width: 800px) {
		padding: 0.5rem 0;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;

const TextContainer = styled.div`
	transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const Text = styled.h1`
	font-family: halyard-display;
	color: #eee;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 3rem;
	margin: 0 1rem;
	display: inline-block;

	@media (max-width: 800px) {
		font-size: 1.25rem;
		margin: 0 0.5rem;
	}
`;

const StyledIcon = styled.img`
	height: 2rem;
	margin-left: 1rem;
	@media (max-width: 800px) {
		height: 1rem;
		margin-left: 0.5rem;
	}
`;

const ScrollingBar = ({ text, icon }) => {
	const imageRef = useRef();
	let styledIcon;

	useEffect(() => {
		window.addEventListener('scroll', (event) => {
			requestAnimationFrame(() => {
				const length = window.scrollY / 2;
				imageRef.current.style.transform = `translateX(-${length}px)`;
			});
		});
	}, []);

	if (icon === 'ArrowS') {
		styledIcon = <StyledIcon src={ArrowS}></StyledIcon>;
	}

	return (
		<Bar>
			<TextContainer ref={imageRef}>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
				<Text>
					{text} {styledIcon}
				</Text>
			</TextContainer>
		</Bar>
	);
};

export default ScrollingBar;
