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
} from '../components/shared/global';

import { Grid } from '../components/shared/grid';

const StyledProjectHeader = styled.div`
	width: 100%;
	padding-top: 10rem;
	padding-bottom: 10rem;
`;

const Header = styled.div`
	grid-column: 3 / 11;
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

const DescTitle = styled.h6`
	font-size: 1rem;
	margin-top: 1rem;
	margin-bottom: 0rem;
	line-height: 2rem;
	font-family: ${(props) => props.theme.secondaryFont};
`;

const Date = styled.div`
	grid-column: 3 / 5;
`;

const Roles = styled.div`
	grid-column: 5 / 7;
`;

const Tools = styled.div`
	grid-column: 7 / 9;
`;

const Collaborators = styled.div`
	grid-column: 9 / 11;
`;

const ProjectHeader = ({
	name,
	description,
	date,
	roles,
	tools,
	collaborators,
}) => {
	return (
		<StyledProjectHeader>
			<Container>
				<Grid>
					<Header>
						<H1>{name}</H1>
						<P>{description}</P>
					</Header>

					<Date>
						<DescTitle>Date</DescTitle>
						<P2>{date}</P2>
					</Date>
					<Roles>
						<DescTitle>Roles</DescTitle>
						<P2>{roles}</P2>
					</Roles>
					<Tools>
						<DescTitle>Tools</DescTitle>
						<P2>{tools}</P2>
					</Tools>
					<Collaborators>
						<DescTitle>Collaborators</DescTitle>
						<P2>{collaborators}</P2>
					</Collaborators>
				</Grid>
			</Container>
		</StyledProjectHeader>
	);
};

export default ProjectHeader;
