particlesJS("particles-js", {
	particles: {
		number: {
			value: 100, 
			density: { enable: true, value_area: 800 }
		},
		color: { value: "#ff4f14" },
		shape: { type: "circle" },
		opacity: { value: 0.5, random: false },
		size: { value: 3, random: true },
		line_linked: {
			enable: true,
			distance: 150,
			color: "#ff4f14",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 3,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			attract: { enable: false }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "grab" },
			onclick: { enable: true, mode: "push" }
		},
		modes: {
			grab: { distance: 140, line_linked: { opacity: 1 } },
			push: { particles_nb: 4 }
		}
	},
	retina_detect: true
});