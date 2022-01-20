$('.scrool').on('click', function(e){
    console.log("ok");

// ambil isi href
var tujuan = $(this).attr('href');
// tangkap elemen ybs
var elemenTujuan = $(tujuan);

// pindahkan scroll
// pindahkan scroll
$('html,body').animate({
    scrollTop: elemenTujuan.offset().top - 50
}, 1250, 'easeInOutExpo');

e.preventDefault();


});