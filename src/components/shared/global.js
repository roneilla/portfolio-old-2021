import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1600px;
	margin: 0 auto;

	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: 800px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const CenteredWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const BetweenWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const H1 = styled.h1`
	font-size: 6rem;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 4rem;
	font-family: moret, serif;

	@media (max-width: 800px) {
		font-size: 4rem;
		margin-bottom: 2rem;
	}
`;

export const H2 = styled.h2`
	font-size: 4rem;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 3rem;
	font-family: moret, serif;
	@media (max-width: 800px) {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}
`;

export const H3 = styled.h3`
	font-size: 3rem;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 2rem;
	font-family: halyard-display, sans-serif;
	text-transform: uppercase;
	@media (max-width: 800px) {
		font-size: 2rem;
	}
`;

export const H4 = styled.h4`
	font-size: 2.25rem;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 2rem;
	font-family: halyard-display, sans-serif;
	text-transform: uppercase;
	@media (max-width: 800px) {
		font-size: 1.5rem;
	}
`;

export const H5 = styled.h5`
	font-size: 1.5rem;
	font-family: halyard-display, sans-serif;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 1rem;
	text-transform: uppercase;

	@media (max-width: 800px) {
		font-size: 1.25rem;
	}
`;

export const P = styled.p`
	font-size: 1.25rem;
	line-height: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-family: halyard-display, sans-serif;

	@media (max-width: 800px) {
		font-size: 1rem;
	}
`;

export const Caption = styled.p`
	font-size: 1rem;
	color: #999999;
	font-style: italic;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-family: halyard-display, sans-serif;
	text-align: center;
`;

export const A = styled.a`
	text-decoration: none;
	color: #fafafa;
	font-family: halyard-display, sans-serif;
`;

export const GreyBG = styled.div`
	background-color: #fafafa;
	font-family: halyard-display, sans-serif;
`;

export const StickyDiv = styled.div`
	@media (min-width: 800px) {
		position: sticky;
		top: calc(3rem + 60px);
		align-self: start;
		display: block;
	}
`;

export const Section = styled.section`
	padding-top: 5rem;
	padding-bottom: 5rem;
	border-bottom: 2px #202020 solid;

	@media (max-width: 800px) {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
`;

export const SmallSection = styled.section`
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

export const MediumSection = styled.section`
	padding-top: 10rem;
	padding-bottom: 5rem;
	@media (max-width: 800px) {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
`;

export const StyledImg = styled.img`
	width: 100%;
	object-fit: contain;
	margin: 1rem 0;
`;

export const StyledH4 = styled(H4)`
	border-bottom: 2px #202020 solid;
	padding-bottom: 1rem;
`;

export const HorizontalDiv = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	position: relative;
	padding: 1rem 0;

	&::-webkit-scrollbar {
		display: none;
	}

	/* cursor: e-resize; */
`;
