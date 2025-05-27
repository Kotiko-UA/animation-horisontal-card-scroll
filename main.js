gsap.registerPlugin(ScrollTrigger)

function animateRec(index) {
	gsap.to(`.rec-${index}`, {
		scrollTrigger: {
			trigger: `.trigger-${index}`,
			start: 'top center',
			end: () => '+=' + window.innerHeight,
			markers: true,
			toggleActions: 'play reverse play reverse',
		},
		backgroundColor: 'green',
		width: '300',
		duration: 0.5,
	})
}

;[1, 2, 3, 4].forEach(animateRec)

// або якщо треба анімувати по різному

// gsap.to('.rec-1', {
// 	scrollTrigger: {
// 		trigger: '.trigger-1',
// 		start: 'top center',
// 		end: () => '+=' + window.innerHeight,
// 		markers: true,
// 		toggleActions: 'play reverse play reverse',
// 	},
// 	backgroundColor: 'green',
// 	width: '300',
// 	duration: 1,
// })
// gsap.to('.rec-2', {
// 	scrollTrigger: {
// 		trigger: '.trigger-2',
// 		start: 'top center',
// 		end: () => '+=' + window.innerHeight,
// 		markers: true,
// 		toggleActions: 'play reverse play reverse',
// 	},
// 	backgroundColor: 'green',
// 	width: '300',
// 	duration: 1,
// })
// gsap.to('.rec-3', {
// 	scrollTrigger: {
// 		trigger: '.trigger-3',
// 		start: 'top center',
// 		end: () => '+=' + window.innerHeight,
// 		markers: true,
// 		toggleActions: 'play reverse play reverse',
// 	},
// 	backgroundColor: 'green',
// 	width: '300',
// 	duration: 1,
// })
// gsap.to('.rec-4', {
// 	scrollTrigger: {
// 		trigger: '.trigger-4',
// 		start: 'top center',
// 		end: () => '+=' + window.innerHeight,
// 		markers: true,
// 		toggleActions: 'play reverse play reverse',
// 	},
// 	backgroundColor: 'green',
// 	width: '300',
// 	duration: 1,
// })
