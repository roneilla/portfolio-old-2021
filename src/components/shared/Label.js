import React from 'react';
import styled from 'styled-components';

const LabelText = styled.p`
	margin-bottom: 2rem;
	font-family: halyard-display, sans-serif;
	text-transform: uppercase;
`;

const Label = ({ text }) => {
	return <LabelText>&#9679; {text}</LabelText>;
};

export default Label;
