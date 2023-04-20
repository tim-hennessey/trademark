var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var animationWindow = document.getElementById('animationWindow');
	var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: './scripts/data.json',
        assetsPath: './images/'
    };

    var anim = bodymovin.loadAnimation(animData);
    var cta = document.getElementById('cta');
    var buttonExit = document.getElementById('button-exit');
    var tl1 = new TimelineMax({paused:true});

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		t.to(cta, .5, {delay:5, opacity:1, ease:Sine.easeInOut});

		tl1.to(cta, .25, {scale:1.1, ease:Sine.easeOut})
		.to(cta, .25, {scale:1, ease:Sine.easeIn});

		buttonExit.addEventListener('mouseover', function () {

				tl1.play(0);

			});

		

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		anim.play();
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
