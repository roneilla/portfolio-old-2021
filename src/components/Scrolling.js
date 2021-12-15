import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrolldown = keyframes`
    0% {
        background-position: 0 -60px;
    }
    
    75% {
        background-position: 0 0;
    }
    
    100% {
        background-position: 0 60px;
    }
`;

const WhiteBar = styled.div`
	width: 2px;
	height: 60px;
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;
	margin: 0 auto;
	overflow: hidden;
	background: linear-gradient(to bottom, white 50%, rgba(255, 255, 255, 0) 50%);
	background-position: 0 -60px;
	background-size: 100% 200%;
	animation: ${scrolldown} 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
`;

const Scrolling = () => {
	return (
		<>
			<WhiteBar />
		</>
	);
};

export default Scrolling;
