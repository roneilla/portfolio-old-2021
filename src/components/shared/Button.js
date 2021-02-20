import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
	border: 1px solid ${({ primary }) => (primary ? '#fafafa' : '#111')};
	background-color: ${({ primary }) => (primary ? '#111' : '#fafafa')};
	color: ${({ primary }) => (primary ? '#fafafa' : '#111')};
	border-radius: 30px;
	font-size: 1rem;
	padding: 0.5rem 1rem;
	appearance: none;
	box-sizing: border-box;
	font-family: 'DM Sans', sans-serif;

	&:hover {
		border: 1px solid ${({ primary }) => (primary ? '#111' : '#fafafa')};
		background-color: ${({ primary }) => (primary ? '#fafafa' : '#111')};
		color: ${({ primary }) => (primary ? '#111' : '#fafafa')};
		cursor: pointer;
	}
`;

const Button = ({ primary, children }) => {
	return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
