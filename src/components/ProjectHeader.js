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

	@media (max-width: 600px) {
		grid-template-rows: repeat(1, 1fr);
		grid-row-gap: 0;
	}
`;

const StyledProjectHeader = styled.div`
	width: 100%;
	padding-top: 8rem;
	padding-bottom: 8rem;
	border-bottom: 2px #202020 solid;
`;

const Description = styled.div`
	grid-column: span 6;
	grid-row: span 2;
	white-space: pre-line;

	@media (max-width: 600px) {
		grid-column: span 12;
		grid-row: span 1;
	}
`;

const DescTitle = styled(H5)`
	/* padding-bottom: 1rem; */
	/* border-bottom: 2px #202020 solid; */
`;

const Date = styled.div`
	grid-column: span 3;
	grid-row: span 1;
	@media (max-width: 600px) {
		grid-column: span 12;
	}
`;

const Roles = styled.div`
	grid-column: span 3;
	grid-row: span 1;
	@media (max-width: 600px) {
		grid-column: span 12;
	}
`;

const Tools = styled.div`
	grid-column: span 3;
	grid-row: span 1;
	@media (max-width: 600px) {
		grid-column: span 12;
	}
`;

const Collaborators = styled.div`
	grid-column: span 3;
	grid-row: span 1;
	@media (max-width: 600px) {
		grid-column: span 12;
	}
`;

const ProjectHeader = (props) => {
	return (
		<StyledProjectHeader>
			<StyledGrid>
				<Description>
					<Label text={props.label}></Label>
					<P>{props.description}</P>
				</Description>
				<Date>
					<DescTitle>Date</DescTitle>
					<P>{props.date}</P>
				</Date>
				<Roles>
					<DescTitle>Roles</DescTitle>
					<P>{props.roles}</P>
				</Roles>
				<Tools>
					<DescTitle>Tools</DescTitle>
					<P>{props.tools}</P>
				</Tools>
				<Collaborators>
					<DescTitle>Collaborators</DescTitle>
					<P>{props.collaborators}</P>
				</Collaborators>
			</StyledGrid>
		</StyledProjectHeader>
	);
};

export default ProjectHeader;
