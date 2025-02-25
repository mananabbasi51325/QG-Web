
window.addEventListener("load", (event) => {
    AOS.init();
    const tilt = $('.gq_image').tilt()
    tilt.on('change', function (e, transforms) { });
  });