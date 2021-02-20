import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 20px;
`;

export const Col12 = styled.div`
	grid-column: span 12;
	padding-left: 2rem;
	padding-right: 2rem;
`;

export const Col8 = styled.div`
	grid-column: span 8;
`;

export const Col6 = styled.div`
	grid-column: span 6;

	@media (max-width: 768px) {
		grid-column: span 12;
	}
`;

export const Col4 = styled.div`
	grid-column: span 4;
`;

export const Col3 = styled.div`
	grid-column: span 3;
`;

export const Col2 = styled.div`
	grid-column: span 2;
`;

export const Col8_Ctr = styled.div`
	grid-column: 3/11;
`;
