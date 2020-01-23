/* 
	GSAP Get Started
	https://greensock.com/get-started/ 
*/ 

//Heading
gsap.to('.gsap-test__heading', {duration: 2, x: 200, color: 'rgba(69, 80, 140)', ease: 'back'}); 
gsap.to('.gsap-test__heading .past', {duration: 1.5, maxWidth: '0px', color: 'rgba(209, 103, 155)'});

//Dots
const $dotsTween = gsap.from('.gsap-test__dots__dot', {duration: 6, y: 'random(-200, 200)', opacity: 0, ease: 'back', stagger: 0.24}).pause(); 

document.querySelector('#dots-tween-pause').addEventListener('click', (evt) => {
	console.log('click');
	$dotsTween.pause();
});
document.querySelector('#dots-tween-resume').addEventListener('click', (evt) => {
	console.log('click ' + evt.currentTarget.getAttribute('id'));
	$dotsTween.resume();
});
document.querySelector('#dots-tween-play').addEventListener('click', (evt) => {
	console.log('click');
	$dotsTween.play() ;
	//$dotsTween.play();
});
document.querySelector('#dots-tween-reverse').addEventListener('click', (evt) => {
	console.log('click');
	$dotsTween.reverse();
});

document.querySelector('#dots-tween-progress-20').addEventListener('click', (evt) => {
	console.log('click ' + evt.currentTarget.getAttribute('id'));
	console.log($dotsTween.progress());
	$dotsTween.progress(0.2);
	console.log($dotsTween.progress());
});
document.querySelector('#dots-tween-reset').addEventListener('click', (evt) => {
	console.log('click ' + evt.currentTarget.getAttribute('id'));
	$dotsTween.seek(0).pause();
});


/* AH Logo animations */
if (document.querySelector('#ah-logo')) {
	console.log('yes');
	const $logoMark = document.querySelector('#ah-logo');
	const $ahTimeline = gsap.timeline({delay: 0.382});
	$ahTimeline.from('#ah-logo #cell-center', {duration: 1, opacity: 0, ease: 'power1.in', delay: 0.618});
	$ahTimeline.from('#ah-logo #cell-left, #cell-right', {duration: 0.618, opacity: 0, ease: 'power1.in'});
	$ahTimeline.to('#ah-logo #align-line', {duration: 1, opacity: 1, attr: {x1: '0', x2: '512'}, ease: 'power1.in'}, '0.618'); 
	
	
	//$ahTimeline.play();
}
