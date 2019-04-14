'use strict';

var params = {
  lines: [{
    background: 'green',
    updateTime: 500,
    elements: [{
      background: '#fff2',
      width: 25
    }, {
      background: '#fff5',
      width: 50
    }, {
      background: '#fff9',
      width: 25
    }]
  }, {
    background: 'red',
    updateTime: 1000,
    elements: [{
      background: '#fff2',
      width: 50
    }, {
      background: '#fff5',
      width: 25
    }, {
      background: '#fff9',
      width: 25
    }]
  }, {
    background: 'orange',
    updateTime: 1500,
    elements: [{
      background: '#fff2',
      width: 25
    }, {
      background: '#fff5',
      width: 25
    }, {
      background: '#fff9',
      width: 50
    }]
  }, {
    background: 'orange',
    updateTime: 1500,
    elements: [{
      background: '#fff2',
      width: 25
    }, {
      background: '#fff5',
      width: 25
    }, {
      background: '#fff9',
      width: 50
    }]
  }]
};

var lineHeight = function lineHeight() {
  var height = "".concat(100 / params.lines.length, "vh");
  return height;
};

var renderLines = function renderLines(params) {
  var lines = params.lines;
  lines.forEach(function (line, i) {
    document.getElementById('root').innerHTML += "<div id=\"line-".concat(i, "\" class=\"line\" style=\"background: ").concat(line.background, "; height:").concat(lineHeight(), "\"></div>");
  });
};

var renderElements = function renderElements(params) {
  var lines = params.lines;

  for (var i = 0; i < lines.length; i++) {
    var elements = lines[i].elements;

    for (var k = 0; k < lines.length; k++) {
      document.getElementById("line-".concat(i)).innerHTML += "<div id=\"element-".concat(i, "-").concat(k, "\" class=\"element\" style=\"background: ").concat(elements[k].background, "; width:").concat(elements[k].width, "%; height: ").concat(lineHeight(), "\"></div>");
    }
  }
};

var getRandomColor = function getRandomColor() {
  var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  return randomColor;
};

var updateBackgroundColor = function updateBackgroundColor(params) {
  var lines = params.lines;

  for (var i = 0; i < lines.length; i++) {
    var interval = lines[i].updateTime;
    setTimer("line-".concat(i), interval);
  }
};

var setTimer = function setTimer(id, timer) {
  setInterval(function () {
    var updatedColor = getRandomColor();
    document.getElementById("".concat(id)).style.backgroundColor = updatedColor;
  }, timer);
};

var render = function render(params) {
  renderLines(params);
  renderElements(params);
  updateBackgroundColor(params);
};

document.addEventListener("DOMContentLoaded", render(params));
