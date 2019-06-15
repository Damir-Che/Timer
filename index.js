
$(document).ready(function(){
	let clock = $('.clock').FlipClock({
		clockFace : 'DailyCounter',
		autoStart : false,
		callbacks : {
						stop : function(){
							$('.message').html('Свобода!!!!!!!!!!');
						}
					}
	});

	let dt = 'July 1 2019 00:01:00';
	let first = new Date(dt);
	let last = Date.now();
	let remaining = first - last;
	remaining /= 1000;

	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();

	// кнопки смены фона
	// Я знаю что это глупый способ, но это особенности этой библеотеки

	$('.nextFon').on('click', function(){
		$('.videFon').fadeOut(900, function(){
			$('.videFon').vide("https://gcs-vimeo.akamaized.net/exp=1560608486~acl=%2A%2F1185129540.mp4%2A~hmac=a27f9c64d563c4b01c32470c2fcf497e2365bde70299a2763f0d918f65226d33/vimeo-prod-skyfire-std-us/01/1667/12/308335606/1185129540.mp4").fadeIn(900);
		})
	});

	$('.nextFon2').on('click', function(){
		$('.videFon').fadeOut(900, function(){
			$('.videFon').vide('https://nxtsys.com/wp-content/uploads/2017/05/Sunset-Lapse.mp4.mp4?_=3').fadeIn(900);
		})
	});

	$('.nextFon3').on('click', function(){
		$('.videFon').fadeOut(900, function(){
			$('.videFon').vide('https://gcs-vimeo.akamaized.net/exp=1560614864~acl=%2A%2F965926547.mp4%2A~hmac=09b6a37a152ab49422998cc82cb3ba038f812f4485c9fc3acef246c31ff8e28f/vimeo-prod-skyfire-std-us/01/2429/10/262146047/965926547.mp4').fadeIn(900);
		})
	});

	$('.nextFon4').on('click', function(){
		$('.videFon').fadeOut(900, function(){
			$('.videFon').vide('https://gcs-vimeo.akamaized.net/exp=1560613346~acl=%2A%2F1305089938.mp4%2A~hmac=d1552628df9995ab0b624de5b6ad7870e24dacbd5d330938d5aff4698e9bf36c/vimeo-prod-skyfire-std-us/01/1353/13/331768739/1305089938.mp4').fadeIn(900);
		})
	});

	// появления меню

	$('.gamburger').on('click',function(){
		$('.menu_fone').toggleClass('active');
	});

	//
	$('.gamburger').on('click',function(e){
		$('.gamburger').toggleClass('active');
	})




})










