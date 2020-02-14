$(document).ready(function () {

  //$('body').css('display', 'none');
  //$('body').fadeIn(500);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  

  const heart = new NextParticle({
    renderer: 'webgl',
    image: document.querySelector('.logo'),
    width:350,
    height:350,
    maxWidth:350,
    maxHeight:350,
    particleSize:1,
    particleGap:2,
    fadeDirection:'random',
    initDirection:'none',
    noise:20,
    initPosition:'none',
    fadePosition:'random'
  });

  const heartsmall = new NextParticle({
    renderer: isMobile?'':'webgl',
    image: document.querySelector('.logo-small'),
    width:350,
    height:350,
    maxWidth:350,
    maxHeight:350,
    particleSize:1,
    particleGap:2,
    fadeDirection:'random',
    initDirection:'none',
    noise:20,
    initPosition:'none',
    fadePosition:'random'
  });


});