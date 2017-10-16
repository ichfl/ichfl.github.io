var vsVr1=0, vsVr2=0, vsVr3=0; //для аккордена
var vsVr4=0, vsVr5=0, vsVr6=0;
var vsVrform1=0, vsVrform2=0, vsVrform3=0; //вспоогательные переменные для контроля заполенности формы
// Аккордеон
$('.text_hide').hide();
$('.p_link').click(function() {
	var idPLink =	$(this).attr('id');
	if (idPLink=='10') {
		if (vsVr1==0) {
			$('.text'+idPLink).slideDown(400);
			vsVr1=1;
			$('.p_link .ind1 i').removeClass().addClass('fa fa-minus-circle');
		}
		else {
			$('.text'+idPLink).slideUp(400);
			vsVr1=0;
			$('.p_link .ind1 i').removeClass().addClass('fa fa-plus-circle');
		}	
	}
	if (idPLink=='02') {
		if (vsVr2==0) {
			$('.text'+idPLink).slideDown(400);
			vsVr2=1;
			$('.p_link .ind2 i').removeClass().addClass('fa fa-minus-circle');
		}
		else {
			$('.text'+idPLink).slideUp(400);
			vsVr2=0;
			$('.p_link .ind2 i').removeClass().addClass('fa fa-plus-circle');
		}
	}
	if (idPLink=='08') {				
		if (vsVr3==0) {
			$('.text'+idPLink).slideDown(400);
			vsVr3=1;
			$('.p_link .ind3 i').removeClass().addClass('fa fa-minus-circle');
		}
		else {
			$('.text'+idPLink).slideUp(400);
			vsVr3=0;
			$('.p_link .ind3 i').removeClass().addClass('fa fa-plus-circle');
		}	
	}	
})
//Аккордеон (конец)


/***Форма (селект)***/

//Запретить отправку формы без ввода данных:
regVName = '[A-Za-zА-Яа-яЁё]{3,30}';
regVEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
$('#plan').val(0);
$("#my_form").submit(function() {
	if (($('#inputName').val().search(regVName) != -1) 
		&& ($('#inputEmail').val().search(regVEmail) != -1)
		&& ($('#plan').val() != 0)) {
		console.log('селект - '+$('#plan').val());
			console.log('можно отправлять');
			return true; //разрешить отправку формы 
			$('#button_form').css({
				'backgroundColor':'#7ea4e8',
				'cursor':'pointer'
			})
	}
	else {
		console.log('нельзя отправлять');
		return false; //запретить отправку формы
	}
});

// Input
$('#inputName').focus(function() {
	$(this).attr('placeholder','');
	$(this).css({
		'border':' 2px solid #95e3e0',
		'backgroundColor':'#fff'	
	});
})
$('#inputName').blur(function() {
	if ($(this).val()=='') {
		$(this).attr('placeholder','Your Name');
		vsVrform1=0;
	}	
	if ($(this).val().search(regVName) != -1) {
		vsVrform1=1;
		$(this).css({
			'border':'2px solid #2cc7c1',
			'backgroundColor':'#fff!impotant'
		});
	}
	else {
		vsVrform1=0;
		$(this).css({
			'border':'none',
			'backgroundColor':'#efefef'	
		});
	}
	if (($(this).val()!=='') && ($(this).val().search(regVName) == -1)) {
		$(this).css({
			'border':'2px solid red',
			'backgroundColor':'#efefef'	
		});		
	}
	// console.log('вышли из формы Имя');
});



// Input (end)

// Email
$('#inputEmail').focus(function() {
	$(this).attr('placeholder','');
	$(this).css({
		'border':' 2px solid #95e3e0',
		'backgroundColor':'#fff'	
	});
})
$('#inputEmail').blur(function() {
	if ($(this).val()=='') {
		vsVrform2=0;
		$(this).attr('placeholder','Email Address');
		$(this).css({
			'border':'none',
			'backgroundColor':'#efefef'	
		});		
	}	
	else {
		if ($(this).val().search(regVEmail) != -1) {
			vsVrform2=1;
			$(this).css({
				'border':'2px solid #2cc7c1',
				'backgroundColor':'#ffffff'	
			});
		}
		else {
			vsVrform2=0;
			$(this).css({
				'border':'2px solid red',
				'backgroundColor':'#efefef'
			});
		}
	}
});

// Email (end)

// Select
$('#plan').hide();
$('.planJsWr').hide();
$('.planOpen').click(function() {
	if (vsVr4==0) {
		$('.planJsWr').slideDown(300);
		vsVr4=1;
	}
	else {
		$('.planJsWr').slideUp(300);
		vsVr4=0;		
	}
})
$('.planJs').click(function() {
	$(this).attr('class');
	if ($(this).attr('class')=='plan1Js planJs') {
		$('#plan').val(1);
		$('.seletPlanJs p').text('1 Day - $20');
		vsVrform3=1;
	}
	if ($(this).attr('class')=='plan2Js planJs') {
		$('#plan').val(2);
		$('.seletPlanJs p').text('2 Day - $25');
		vsVrform3=1;
	}
	if ($(this).attr('class')=='plan3Js planJs') {
		$('#plan').val(3);
		$('.seletPlanJs p').text('3 Day - $40');
		vsVrform3=1;
	}	
	$('.planJsWr').slideUp(300);
	vsVr4=0;	
	console.log('vsVrform3 - '+vsVrform3);
	//Разрешить отправку формы если все поля заполнены
	if (($('#inputName').val().search(regVName) != -1) 
		&& ($('#inputEmail').val().search(regVEmail) != -1)
		&& ($('#plan').val() != 0)) {
			$('#button_form').css({
				'backgroundColor':'#7ea4e8',
				'cursor':'pointer'
			})
	}
});
// Select (end)

//Мониторинг того что введено в форму (online):
//общий интервал (начало)
var focusInterval;
$('input').focus(function() {
	console.log('focus');
	focusInterval = setInterval(function() {
		if (($('#inputName').val().search(regVName) != -1) 
			&& ($('#inputEmail').val().search(regVEmail) != -1)
			&& ($('#plan').val() != 0)) {
				$('#button_form').css({
					'backgroundColor':'#7ea4e8',
					'cursor':'pointer'
				})
		}
		else {
				$('#button_form').css({
					'backgroundColor':'#D5E1F7',
					'cursor':'default'
				})			
		}
	},300);
});
$('input').blur(function() {
	console.log('unfocus');
	clearInterval(focusInterval);
});
//общий интервал (конец)





/*Форма (селект) Конец*/