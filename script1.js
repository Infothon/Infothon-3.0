let partJSON1 = {
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 700
			}
		},
		color: {
			value: "#fff"
		},
		shape: {
			type: "polygon",
			stroke: {
				width: 0,
				color: "#000000"
			},
			polygon: {
				nb_sides: 15
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 2,
			random: false,
			anim: {
				enable: false,
				speed: 80,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 300,
			/*color: "#9ee0ff",*/
			color: "#000000",
			opacity: 0.8,
			width: 2
		},
		move: {
			enable: true,
			speed: 4,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "grab"
			},
			onclick: {
				enable: false,
				mode: "push"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 800,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 800,
				size: 80,
				duration: 2,
				opacity: 0.8,
				speed: 3
			},
			repulse: {
				distance: 400,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

particlesJS("particles1", partJSON1, function () {});
