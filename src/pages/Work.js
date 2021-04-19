import React, { useState } from 'react';
import styled from 'styled-components';
import { BetweenWrapper, Container, H1, H4 } from '../components/shared/global';
import { Col6, Grid } from '../components/shared/grid';
import WorkCard from '../components/WorkCard';
import projectData from './../projectData';

const FilterWrapper = styled.div`
	border-bottom: 1px #111 solid;
	margin-bottom: 2rem;
`;

const StyledCol6 = styled(Col6)`
	border-bottom: 1px solid #111;
	margin: 1rem 0;
`;

const Work = () => {
	const [filter, setFilter] = useState('all');

	const projects = projectData
		.filter((project) => project.type.includes(filter))
		.map((project) => (
			<StyledCol6 key={project.projectName}>
				<WorkCard
					link={project.link}
					img={project.img}
					title={project.title}
					projectName={project.projectName}
					category={project.category}
					description={project.description}></WorkCard>
			</StyledCol6>
		));

	return (
		<div>
			<Container>
				<H1>Work</H1>
				<FilterWrapper>
					<BetweenWrapper style={{ width: '50%' }}>
						<H4 onClick={(e) => setFilter('all')}>All</H4>
						<H4 onClick={(e) => setFilter('design')}>Design</H4>
						<H4 onClick={(e) => setFilter('development')}>Development</H4>
					</BetweenWrapper>
				</FilterWrapper>
				<Grid>{projects}</Grid>
			</Container>
		</div>
	);
};

export default Work;
