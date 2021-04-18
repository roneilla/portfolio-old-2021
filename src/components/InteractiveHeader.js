import React, { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';
import Sketch from 'react-p5';

import Text1 from './../images/header/text1.png';
import Text2 from './../images/header/text2.png';
import Text3 from './../images/header/text3.png';
import Amp from './../images/header/amp.png';
import Logo from './../images/header/logo.png';

const InteractiveHeader = (props) => {
	const boxRef = useRef(null);
	const canvasRef = useRef(null);
	const [boxes, setBoxes] = useState([]);

	let text = ['Hello', 'Roneilla'];

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

		const floor = Bodies.rectangle(cw / 2, ch - 25, cw, 50, {
			isStatic: true,
			render: {
				fillStyle: bgColor,
			},
		});

		const leftWall = Bodies.rectangle(25, ch / 2, 50, ch, {
			isStatic: true,
			render: {
				fillStyle: bgColor,
			},
		});
		const rightWall = Bodies.rectangle(cw - 25, ch / 2, 50, ch, {
			isStatic: true,
			render: {
				fillStyle: bgColor,
			},
		});

		let randomX = Math.floor(Math.random() * (cw - cw / 2)) + 200;
		// let randomOffset = Math.floor(Math.random() * (300 - 100)) + 100;
		let randomOffset = 75;

		let y = 0;
		let scale = 0.75;

		const logo = Bodies.rectangle(
			randomX + randomOffset,
			y,
			400 * scale,
			182 * scale,
			{
				friction: 1,
				restitution: 0.9,
				render: {
					sprite: {
						texture: Logo,
						xScale: 1,
						yScale: 1,
					},
				},
			}
		);

		const text1 = Bodies.rectangle(randomX, y, 673 * scale, 100 * scale, {
			friction: 1,
			restitution: 0.9,
			render: {
				sprite: {
					texture: Text1,
					xScale: scale,
					yScale: scale,
				},
			},
		});
		const amp = Bodies.rectangle(
			randomX - randomOffset,
			y,
			92 * scale,
			168 * scale,
			{
				friction: 1,
				restitution: 0.9,
				render: {
					sprite: {
						texture: Amp,
						xScale: scale,
						yScale: scale,
					},
				},
			}
		);
		const text2 = Bodies.rectangle(randomX, y, 615 * scale, 100 * scale, {
			friction: 1,
			restitution: 0.9,
			render: {
				strokeStyle: 'black',
				sprite: {
					texture: Text2,
					xScale: scale,
					yScale: scale,
				},
			},
		});
		const text3 = Bodies.rectangle(randomX, y, 541 * scale, 100 * scale, {
			friction: 1,
			restitution: 0.9,
			render: {
				sprite: {
					texture: Text3,
					xScale: scale,
					yScale: scale,
				},
			},
		});

		World.add(engine.world, [
			floor,
			leftWall,
			rightWall,
			logo,
			text1,
			text2,
			text3,
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
			ref={boxRef}
			style={{
				width: '100%',
				height: '100%',
				gridColumn: 'span 12',
			}}>
			<canvas ref={canvasRef} />
		</div>
	);
};

export default InteractiveHeader;
