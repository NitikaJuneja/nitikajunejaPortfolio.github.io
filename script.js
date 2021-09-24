$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    });

   // smooth scrolling
$('a[href*="#"]').on('click',function(e){
      e.preventDefault();

      $('html,body').animate({

    scrollTop : $($(this).attr('href')).offset().top,
    },
    500, 
    'linear'
    );

});

});



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyY2WZlxuiK2yfxAKskZcKofD5IPieW35za-N_jLzSrF-whMM9AAuNDViXuTjk_RRiLAA/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert('Form Submitted!', response))
      .catch(error => console.error('Error!', error.message))
  })
