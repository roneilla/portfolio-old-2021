import React from 'react';
import styled from 'styled-components';

const LabelText = styled.p`
	margin-bottom: 2rem;
	font-family: halyard-display, sans-serif;
	text-transform: uppercase;
	font-size: 1.25rem;
	@media (max-width: 800px) {
		font-size: 1rem;
	}
`;

const Label = ({ text }) => {
	return <LabelText>&#9679; &nbsp; {text}</LabelText>;
};

export default Label;
