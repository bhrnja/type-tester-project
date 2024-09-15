// Font Family
let changeFont = function(font){
      document.getElementById("testerArea").style.fontFamily = font.value;
}

// Font Size
const sizeSlider = document.getElementById('testerSize');

sizeSlider.addEventListener('input', function() {
    let size = sizeSlider.value;
    document.getElementById('testerArea').style.fontSize = size + 'px';
});

// Letter Tracking
const trackingSlider = document.getElementById('testerTracking');

trackingSlider.addEventListener('input', function() {
    let size = trackingSlider.value;
    document.getElementById('testerArea').style.letterSpacing = size + 'px';
});

// Line Leading
const leadingSlider = document.getElementById('testerLeading');

leadingSlider.addEventListener('input', function() {
    let size = leadingSlider.value;
    document.getElementById('testerArea').style.lineHeight = size + '%';
});