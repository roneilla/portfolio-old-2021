import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const GradientCanvas = styled.canvas`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: -1;
	top: 0;
	left: 0;
`;

const PI2 = Math.PI * 2;

class GlowParticle {
	constructor(x, y, radius, rgb) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.rgba = rgb;

		this.vx = Math.random() * 4;
		this.vy = Math.random() * 4;

		this.sinValue = Math.random();
	}

	animate(ctx, stageWidth, stageHeight) {
		// this.sinValue += 0.01;
		// this.radius += this.sinValue;

		this.x += this.vx * 0.75;
		this.y += this.vy * 0.75;

		if (this.x < 0) {
			this.vx *= -1;
			this.x += 10;
		} else if (this.x > stageWidth) {
			this.vx *= -1;
			this.x -= 10;
		}

		if (this.y < 0) {
			this.vy *= -1;
			this.y += 10;
		} else if (this.y > stageHeight) {
			this.vy *= -1;
			this.y -= 10;
		}

		ctx.beginPath();
		const g = ctx.createRadialGradient(
			this.x,
			this.y,
			this.radius * 0.001,
			this.x,
			this.y,
			this.radius
		);
		g.addColorStop(0, `rgba(${this.rgba.r},${this.rgba.g},${this.rgba.b},1)`);
		g.addColorStop(1, `rgba(${this.rgba.r},${this.rgba.g},${this.rgba.b},0)`);
		ctx.fillStyle = g;
		ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
		ctx.fill();
	}
}

const MovingGradientCanvas = (props) => {
	const COLORS = [
		{ r: 184, g: 132, b: 124 }, // dull salmon
		{ r: 188, g: 114, b: 64 }, // orange
		{ r: 117, g: 131, b: 187 }, // purple
		{ r: 206, g: 184, b: 110 }, // yellow
		// { r: 172, g: 195, b: 199 }, // light blue
	];

	const canvasRef = useRef(null);

	let particles = [],
		totalParticles = 4,
		maxR = 800,
		minR = 400;

	let curColor = 0;

	const createParticles = (canvas) => {
		const particleInfo = [
			{
				x: (Math.random() * canvas.width) / 2,
				y: (Math.random() * canvas.height) / 2,
			},
			{
				x: (Math.random() * canvas.width) / 2,
				y: (Math.random() * canvas.height) / 2 + canvas.height / 2,
			},
			{
				x: (Math.random() * canvas.width) / 2 + canvas.width / 2,
				y: (Math.random() * canvas.height) / 2,
			},
			{
				x: (Math.random() * canvas.width) / 2 + canvas.width / 2,
				y: (Math.random() * canvas.height) / 2 + canvas.height / 2,
			},
		];

		for (let i = 0; i < totalParticles; i++) {
			const item = new GlowParticle(
				particleInfo[i].x,
				particleInfo[i].y,
				Math.random() * (maxR - minR) + minR,
				COLORS[curColor]
			);

			if (++curColor >= COLORS.length) curColor = 0;

			particles[i] = item;
		}
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();

		window.addEventListener('resize', resizeCanvas);

		createParticles(canvas);

		let frameCount = 0;
		let animationFrameId;

		//Our draw came here
		const render = () => {
			frameCount++;
			animationFrameId = window.requestAnimationFrame(render);

			context.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < totalParticles; i++) {
				particles[i].animate(context, canvas.width, canvas.height);
			}
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return <GradientCanvas ref={canvasRef} {...props} />;
};

export default MovingGradientCanvas;
