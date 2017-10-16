$(function() {
	$('.carousel').carousel({
	  // interval: false
	})
	$('#elastislide').elastislide();
})

/*Одинаковое отображение во всех браузерах на 767px:*/
/*Создание класса*/
function addClassWidth () {
$('.main-menu').addClass('width767');
$('.main-menu-bg').addClass('width767');
$('#carousel-example-generic').addClass('width767');
$('.main-menu .container').addClass('width767');
$('.main-menu .navbar-brand img').addClass('width767');
$('.main-menu .container .nav.navbar-nav').addClass('width767');
$('#bs-example-navbar-collapse-1').addClass('width767');
$('.main-menu .navbar-form.navbar-left').addClass('width767');
$('.main-menu .container .navbar-nav>li>a').addClass('width767');
$('.main-slogan h1').addClass('width767');
$('.carousel-inner .item .carousel-caption').addClass('width767');
$('.carousel-inner .item h1').addClass('width767');
$('.carousel-inner .item p').addClass('width767');
$('.carousel-inner .item .btn-red').addClass('width767');
} //addClassWidth

/*Удаление класса*/
function removeClassWidth () {
$('.main-menu').removeClass('width767');
$('.main-menu-bg').removeClass('width767');
$('#carousel-example-generic').removeClass('width767');
$('.main-menu .container').removeClass('width767');
$('.main-menu .navbar-brand img').removeClass('width767');
$('.main-menu .container .nav.navbar-nav').removeClass('width767');
$('#bs-example-navbar-collapse-1').removeClass('width767');
$('.main-menu .navbar-form.navbar-left').removeClass('width767');
$('.main-menu .container .navbar-nav>li>a').removeClass('width767');
$('.main-slogan h1').removeClass('width767');
$('.carousel-inner .item .carousel-caption').removeClass('width767');
$('.carousel-inner .item h1').removeClass('width767');
$('.carousel-inner .item p').removeClass('width767');
$('.carousel-inner .item .btn-red').removeClass('width767');
} //removeClassWidth


// alert(window.innerWidth);

var width; //настоящая ширина окна как в CSS (с учетом полосы прокрутки)
width = window.innerWidth;
// alert(width);
if (width == 767) {
 addClassWidth();
}
else {
	removeClassWidth();
}
$(window).resize(function() {
	width = window.innerWidth;
	if (width == 767) {
		addClassWidth();
	}	
	else {
		removeClassWidth();
	}
});
/*Одинаковое отображение во всех браузерах на 767px (конец)*/