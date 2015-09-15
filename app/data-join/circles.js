(function() {
  'use strict';

  var data = [12, 30, 7, 52];

  var svg = d3.select(".viz").append('svg')
      .attr('width', 500)
      .attr('height', 500);

  var radiusScale = d3.scale.sqrt()
    .domain([0, d3.max(data)])
    .range([0, 20])

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
      .attr('class', 'circle')
      .attr('cx', function (d, i) {
        return i * 100 + 50;
      })
      .attr('cy', 250)
      .attr('r', function(d) {
        return radiusScale(d);
      });

}());
