const rect3 = new mojs.Shape({
  shape:            'rect',
  fill:             '#212D3A',
  radiusY:          {[($(document).height())/2]: 0, easing: "cubic.out cubic.in"},
  radiusX:          {[($(document).width())/2]: 0, easing: "cubic.out cubic.in"},
  strokeWidth:      0,
  angle:            0,
  duration:         600,
  delay:            1200,
  isShowStart:      "True",
  isShowEnd:        "False"
}).play();
const rect2 = new mojs.Shape({
  shape:            'rect',
  fill:             '#2196F3',
  radiusY:          {[($(document).height())/2]: 0, easing: "cubic.out cubic.in"},
  radiusX:          {[($(document).width())/2]: 0, easing: "cubic.out cubic.in"},
  strokeWidth:      0,
  angle:            0,
  duration:         600,
  delay:            1100,
  isShowStart:      "True",
  isShowEnd:        "False"
}).play();
const rect1 = new mojs.Shape({
  shape:            'rect',
  fill:             '#1D1D1D',
  radiusY:          {[($(document).height())/2]: 0, easing: "cubic.out cubic.in"},
  radiusX:          {[($(document).width())/2]: 0, easing: "cubic.out cubic.in"},
  strokeWidth:      0,
  angle:            0,
  duration:         600,
  delay:            1000,
  isShowStart:      "True",
  isShowEnd:        "False"
}).play();
const circlespinner = new mojs.Shape({
  shape:            'circle',
  fill:             'none',
  stroke:           '#2196F3',
  radiusY:          50,
  radiusX:          50,
  strokeWidth:      8,
  angle:            -90,
  top:              '40%',
  duration:         1000,
  delay:            0,
  strokeDasharray:  '100%',
  strokeDashoffset: { '-100%' : '100%' },
  isShowStart:      "True",
  isShowEnd:        "False"
}).play();

function hideload() {
    $("#loadtext").attr('style', "opacity: 0;");
}
setTimeout('hideload()', 700);
