import tippt from './images/thumbnails/tippt.png';
import doodlevr from './images/thumbnails/doodlevr.jpg';
import thepriceoflife from './images/thumbnails/thepriceoflife.png';
import tipptHover from './images/thumbnails/tippt-hover.png';
import doodlevrHover from './images/thumbnails/doodlevr-hover.png';
import thepriceoflifeHover from './images/thumbnails/thepriceoflife-hover.png';

export default [
	{
		img: thepriceoflife,
		imgHover: thepriceoflifeHover,
		projectName: 'thepriceoflife',
		title: 'The Price of Life',
		link: '/thepriceoflife',
		category: 'UX Design',
		type: ['design', 'development', 'all'],
		description:
			'Increasing financial literacy in 10th Graders through the intersection of board game and technology',
	},
	{
		img: tippt,
		imgHover: tipptHover,
		projectName: 'tippt',
		title: 'Tippt',
		link: '/tippt',
		category: 'UX Design',
		type: ['design', 'all'],
		description:
			'Helping users make greener choices through a sustainability platform',
	},
	{
		img: doodlevr,
		imgHover: doodlevrHover,
		projectName: 'doodlevr',
		title: 'Google Doodle VR',
		link: '/doodlevr',
		category: 'AR/VR',
		type: ['development', 'all'],
		description:
			'Rethinking Google Doodles to create an immersive experience celebrating 50 years of VR',
	},

	// {
	// 	name: 'bridge',
	// 	title: 'Bridge',
	// 	link: '/bridge',
	// 	category: ['UX/UI Design', 'UX Research'],
	// 	description: 'Fostering connections between students and mentors',
	// },
];
