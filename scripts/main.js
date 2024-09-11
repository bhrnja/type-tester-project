// Font Size
const sizeSlider = document.getElementById('tester-font-size');

sizeSlider.addEventListener('input', function() {
    let size = sizeSlider.value;
    document.getElementById('tester-input').style.fontSize = size + 'px';
});

// Font Family
let changeFont = function(font){
    console.log(font.value)
      document.getElementById("tester-input").style.fontFamily = font.value;
  }
  
  // Font Spacing
const spaceSlider = document.getElementById('tester-font-spacing');

spaceSlider.addEventListener('input', function() {
    let size = spaceSlider.value;
    document.getElementById('tester-input').style.letterSpacing = size + 'px';
});