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
	GreyBG,
} from '../components/shared/global';
import { Grid, Col6, Col12 } from '../components/shared/grid';
import Label from '../components/shared/Label';

import ProjectHeader from '../components/ProjectHeader';

import S_Home from '../images/tippt/homePage.png';
import S_Profile from '../images/tippt/profile.png';
import S_RestaurantInfo from '../images/tippt/restaurantInfo.png';

export const HeaderImgWrapper = styled.div`
	display: flex;
	padding: 2rem;
	width: 100%;
`;

export const HeaderImg = styled.img`
	flex: 1;
	padding: 1rem;
	min-width: 100px;
`;
export const StyledH2 = styled(H2)`
	margin-top: 3rem;
	margin-bottom: 3rem;
`;

const Tippt = () => {
	return (
		<div>
			<div></div>
		</div>
	);
};

export default Tippt;
