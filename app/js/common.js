$('.dropdown-item').on('click', function () {
   $(this).siblings('.dropdown-box').fadeToggle();
});

$('.reviews-slider').slick({
   slidesToShow: 3,
   dots: true,
   prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
       '\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
       '<g>\n' +
       '\t<g>\n' +
       '\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
       '\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
       '\t\t\tL143.492,221.863z"/>\n' +
       '\t</g>\n' +
       '</g>\n' +
       '\n' +
       '</svg>\n</button>',
   nextArrow: '<button type="button" class="slick-next">' +
       '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
       '\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
       '<g>\n' +
       '\t<g>\n' +
       '\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
       '\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
       '\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
       '\t</g>\n' +
       '</g>\n' +
       '</svg>\n</button>'
});

// accordeon
function accordeon() {
   var panel = $('.panel_heading');

   if (panel.hasClass('in')) {
      $('.in').find('.block_hover').slideDown();
   }

   $('.panel_heading .block_title').on('click', function () {
      $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
   });
}

accordeon();

// mask phone
$('[name="phone"]').mask('+7(999) 999-99-99');

// time
function clock() {
   let d = new Date();
   let hrs = d.getHours();
   let min = d.getMinutes();
   let sec = d.getSeconds();

   if (hrs <= 9) hrs="0" + hrs;
   if (min <=9 ) min="0" + min;
   if (sec <= 9) sec="0" + sec;

   $(".time").html(hrs + ":" + min + ":" + sec);
}
setInterval("clock()",1000);



// timer
function getTimeRemaining(endtime) {
   let t = Date.parse(endtime) - Date.parse(new Date());
   let seconds = Math.floor((t / 1000) % 60);
   let minutes = Math.floor((t / 1000 / 60) % 60);
   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   // let days = Math.floor(t / (1000 * 60 * 60 * 24));
   return {
      'total': t,
      // 'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
   };
}

function initializeClock(id, endtime) {
   let clock = document.getElementById(id);
   // let daysSpan = clock.querySelector('.days');
   let hoursSpan = clock.querySelector('.hours');
   let minutesSpan = clock.querySelector('.minutes');
   let secondsSpan = clock.querySelector('.seconds');

   function updateClock() {
      let t = getTimeRemaining(endtime);

      // daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
         clearInterval(timeinterval);
      }
   }

   updateClock();
   let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);