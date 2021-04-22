import React, { useRef, useEffect, useState } from 'react';
import Matter, { Composite } from 'matter-js';
import Sketch from 'react-p5';
import styled, { keyframes } from 'styled-components';
import { P } from './shared/global';

import Text1 from './../images/header/text1.png';
import Text2 from './../images/header/text2.png';
import Text3 from './../images/header/text3.png';
import Text4 from './../images/header/text4.png';
import Amp from './../images/header/amp.png';
import Logo from './../images/header/logo.png';
import Star from './../images/header/star.png';

const fadeIn = keyframes`
	0% { 
		opacity: 0;
		top: -2rem;
	}
	
	100% {
		opacity: 1;
		top: 0;
	}

`;

const StyledP = styled(P)`
	position: absolute;
	text-align: center;
	transition: 1s ease-in-out;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 0.75rem;
	color: #666;
	margin: 0;
	top: 0;
	left: 0;
	width: 100%;

	animation-name: ${fadeIn};
	animation-duration: 2s;
	animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const InteractiveHeader = (props) => {
	const boxRef = useRef(null);
	const canvasRef = useRef(null);

	let cw, ch;

	useEffect(() => {
		cw = document.getElementById('header').clientWidth;
		ch = document.getElementById('header').clientHeight;
		let Engine = Matter.Engine;
		let Render = Matter.Render;
		let World = Matter.World;
		let Bodies = Matter.Bodies;
		let Mouse = Matter.Mouse;
		let MouseConstraint = Matter.MouseConstraint;
		let Composites = Matter.Composites;

		let bgColor = 'rgba(238, 238, 238, 1)';

		let engine = Engine.create({});
		let render = Render.create({
			element: boxRef.current,
			engine: engine,
			canvas: canvasRef.current,
			options: {
				width: cw,
				height: ch,
				background: bgColor,
				wireframes: false,
			},
		});

		const floor = Bodies.rectangle(cw / 2, ch + 25, cw, 50, {
			isStatic: true,
			render: {
				fillStyle: bgColor,
			},
		});

		const leftWall = Bodies.rectangle(-25, ch / 2, 50, ch, {
			isStatic: true,
			render: {
				fillStyle: bgColor,
			},
		});
		const rightWall = Bodies.rectangle(cw + 25, ch / 2, 50, ch, {
			isStatic: true,
			render: {
				fillStyle: bgColor,
			},
		});

		// let randomX = Math.floor(Math.random() * (cw - cw / 2)) + 200;
		// let randomOffset = Math.floor(Math.random() * (300 - 100)) + 100;
		let randomX = cw / 2;
		let randomOffset = 100;

		let y = 0;
		let scale = 0.75;
		let logoScale = 1;

		if (cw < 400 && ch > 400) {
			scale = 0.35;
			logoScale = 0.5;
			randomOffset = 0;
		} else if (cw < 800 && ch > 400) {
			logoScale = 0.75;
			randomOffset = 50;
		} else if (cw > 800 && ch > 400) {
			scale = 0.75;
			logoScale = 0.9;
			randomOffset = 150;
		} else if (cw < 300 && ch < 300) {
			scale = 0.3;
			logoScale = 0.3;
			randomOffset = 25;
		} else if (ch < 400) {
			scale = 0.4;
			logoScale = 0.45;
			randomOffset = 25;
		}

		let cFriction = 1;
		let cRest = 0.7;
		let cFrictionAir = 0.02;

		const logo = Bodies.rectangle(
			randomX - randomOffset / 2,
			y,
			400 * logoScale,
			182 * logoScale,
			{
				friction: cFriction,
				restitution: cRest,
				frictionAir: cFrictionAir,
				render: {
					sprite: {
						texture: Logo,
						xScale: logoScale,
						yScale: logoScale,
					},
				},
			}
		);
		const text4 = Bodies.rectangle(
			randomX - randomOffset * 2,
			y,
			541 * scale,
			100 * scale,
			{
				friction: cFriction,
				restitution: cRest,
				frictionAir: cFrictionAir,
				render: {
					sprite: {
						texture: Text4,
						xScale: scale,
						yScale: scale,
					},
				},
			}
		);

		const text1 = Bodies.rectangle(
			randomX - randomOffset,
			y,
			673 * scale,
			100 * scale,
			{
				friction: cFriction,
				restitution: cRest,
				frictionAir: cFrictionAir,
				render: {
					sprite: {
						texture: Text1,
						xScale: scale,
						yScale: scale,
					},
				},
			}
		);
		const amp = Bodies.rectangle(
			randomX - randomOffset * 0.5,
			y,
			92 * scale,
			102 * scale,
			{
				friction: cFriction,
				restitution: cRest,
				frictionAir: cFrictionAir,
				render: {
					sprite: {
						texture: Amp,
						xScale: scale,
						yScale: scale,
					},
				},
			}
		);
		const text2 = Bodies.rectangle(
			randomX + randomOffset,
			y,
			615 * scale,
			100 * scale,
			{
				friction: cFriction,
				restitution: cRest,
				frictionAir: cFrictionAir,
				render: {
					strokeStyle: 'black',
					sprite: {
						texture: Text2,
						xScale: scale,
						yScale: scale,
					},
				},
			}
		);
		const text3 = Bodies.rectangle(randomX, y, 541 * scale, 100 * scale, {
			friction: cFriction,
			restitution: cRest,
			frictionAir: cFrictionAir,
			render: {
				sprite: {
					texture: Text3,
					xScale: scale,
					yScale: scale,
				},
			},
		});

		// let stack = Composites.stack(cw / 2, 50, 7, 3, 20, 0, (x, y) => {
		// 	return Bodies.circle(x, y, 20, {
		// 		friction: cFriction,
		// 		restitution: cRest,
		// 		frictionAir: cFrictionAir,
		// 		render: {
		// 			sprite: {
		// 				texture: Star,
		// 				xScale: 0.5,
		// 				yScale: 0.5,
		// 			},
		// 		},
		// 	});
		// });

		World.add(engine.world, [
			floor,
			leftWall,
			rightWall,
			logo,
			text1,
			text2,
			text4,
			amp,
		]);

		let mouse = Mouse.create(render.canvas);
		let mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false,
				},
			},
		});

		mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
		mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

		World.add(engine.world, mouseConstraint);

		Engine.run(engine);
		Render.run(render);
	}, []);

	return (
		<div
			id="header"
			ref={boxRef}
			style={{
				width: '100%',
				maxHeight: '500px',
				height: '100%',
				gridColumn: 'span 12',
				position: 'relative',
				alignSelf: 'center',
			}}>
			<StyledP>Click and drag to move!</StyledP>
			<canvas ref={canvasRef} />
		</div>
	);
};

export default InteractiveHeader;
