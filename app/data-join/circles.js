(function() {
  'use strict';

  var data = [12, 30, 7, 52];

  var svg = d3.select(".viz").append('svg')
      .attr('width', 500)
      .attr('height', 500);

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
  
}());
