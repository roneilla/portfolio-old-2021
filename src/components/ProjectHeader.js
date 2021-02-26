import React from 'react';
import styled from 'styled-components';
import {
	Container,
	CenteredWrapper,
	H1,
	H2,
	H3,
	H4,
	H5,
	P,
	Caption,
} from '../components/shared/global';
import Label from '../components/shared/Label';

import { Grid } from '../components/shared/grid';

const StyledGrid = styled(Grid)`
	grid-template-rows: repeat(2, 1fr);
	grid-row-gap: 3rem;
`;

const StyledProjectHeader = styled.div`
	width: 100%;
	padding-top: 8rem;
	padding-bottom: 8rem;
	border-bottom: 2px #202020 solid;
`;

const Description = styled(P)`
	grid-column: span 6;
	grid-row: span 2;
	white-space: pre-line;
`;

const DescTitle = styled(H5)`
	padding-bottom: 1rem;
	border-bottom: 2px #202020 solid;
`;

const Date = styled.div`
	grid-column: span 3;
	grid-row: span 1;
`;

const Roles = styled.div`
	grid-column: span 3;
	grid-row: span 1;
`;

const Tools = styled.div`
	grid-column: span 3;
	grid-row: span 1;
`;

const Collaborators = styled.div`
	grid-column: span 3;
	grid-row: span 1;
`;

const ProjectHeader = ({
	label,
	description,
	date,
	roles,
	tools,
	collaborators,
}) => {
	return (
		<StyledProjectHeader>
			<Container>
				<StyledGrid>
					<Description>
						<Label text={label}></Label>
						{description}
					</Description>
					<Date>
						<DescTitle>Date</DescTitle>
						<P>{date}</P>
					</Date>
					<Roles>
						<DescTitle>Roles</DescTitle>
						<P>{roles}</P>
					</Roles>
					<Tools>
						<DescTitle>Tools</DescTitle>
						<P>{tools}</P>
					</Tools>
					<Collaborators>
						<DescTitle>Collaborators</DescTitle>
						<P>{collaborators}</P>
					</Collaborators>
				</StyledGrid>
			</Container>
		</StyledProjectHeader>
	);
};

export default ProjectHeader;