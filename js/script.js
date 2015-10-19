(function(){

		var breakLength=$('#breakLength');
		$('<div></div>',{
			class: "breaktext col-xs-1",
			text: "5:00"
		}).insertAfter('#breakMinus');

		$('<div></div>',{
			class: "timertext col-xs-1",
			text: "25:00"
		}).insertAfter('#timerMinus');
		
		var timerTime, breakTime;
		var m ;
		var s = 0;
		$('#breakAddition').on('click', function(){
			var breakTime=parseInt($('.breaktext').text());
			$('.breaktext').text(breakTime+1+":00");
			$('#reset').removeAttr('disabled');
		});

		$('#breakMinus').on('click', function(){
			var breakTime=parseInt($('.breaktext').text());
			$('.breaktext').text(breakTime-1+":00");
			$('#reset').removeAttr('disabled');
		});

		$('#timerAddition').on('click', function(){
			timerTime=parseInt($('.timertext').text());
			$('.timertext').text(timerTime+1+":00");
			$('#clockTime').text(timerTime+1+":00");
			$('#reset').removeAttr('disabled');

		});

		$('#timerMinus').on('click', function(){
			timerTime=parseInt($('.timertext').text());
			$('.timertext').text(timerTime-1+":00");
			$('#clockTime').text(timerTime-1+":00");
			$('#reset').removeAttr('disabled');
		});

		$('#reset').on('click', function(){
			$('#start').removeAttr('disabled');
			timerTime=25;
			breakTime=5;
			s=0;
			$('.timertext').text(timerTime);
			$('#clockTitle').text("Session");
			$('#clockTime').text("25:00");
			$('.breaktext').text("5:00");
			clearTimeout(timeout);


		});

		countdownTime =function(){
			timerTime=parseInt($('#clockTime').text());
			m=timerTime;
			s--;
			timeout=setTimeout("countdownTime()", 1000);
			if(s<0){
				m--;
				s=59;
			}
			$('#clockTitle').text("Session");
			$('#clockTime').text(m +":"+ (s<10?"0"+s:s));

			
			if($('#clockTime').text()=="0:00"){
				clearTimeout(timeout);
				$('#clockTime').text($('.breaktext').text());
				countdownBreak();
			//var audio = new Audio("coke-mirror-war.mp3" );
				//audio.play();
			}
	}

	countdownBreak =function(){
			breakTime=parseInt($('#clockTime').text());
			m=breakTime;
			s--;
			timeout=setTimeout("countdownBreak()", 1000);
			if(s<0){
				m--;
				s=59;
			}
			$('#clockTitle').text("!!Break!!");
			$('#clockTime').text(m +":"+ (s<10?"0"+s:s));

			
			if($('#clockTime').text()=="0:00"){
				clearTimeout(timeout);
				$('#clockTime').text($('.timertext').text());
			countdownTime();
			}
	}


		$('#start').on('click', function(){
			$('#start').attr('disabled', 'disabled');
			$('#reset').removeAttr('disabled');
			countdownTime();


			
		});

		




			
				
			})();