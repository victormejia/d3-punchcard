(function() {
  'use strict';

  var data;

  d3.json('https://api.github.com/repos/angular/angular/stats/punch_card', function(error, json) {
    data = json;
    visualize();
  });

  function visualize() {
    // 1. Setup
    var el = d3.select('#punchcard'),
        margin = {top: 20, right: 20, bottom: 30, left: 40},
        elWidth = parseInt(el.style('width'), 10),
        elHeight = parseInt(el.style('height'), 10),
        width = elWidth - margin.left - margin.right,
        height = elHeight - margin.top - margin.bottom;

    var svg = el.append('svg')
        .attr('width', elWidth)
        .attr('height', elHeight)
      .append('g')
        .attr('transform', 'translate(' + margin.left + "," + margin.top + ')');

    /* Create Viz
    ----------------------------------------------*/
    // setup scales
    var x = d3.scale.linear()
      .domain([0, 23])
      .range([0, width]);

    var y = d3.scale.linear()
      .domain([0, 6])
      .range([0, height]);

    var maxR = d3.max(data, function(d) {
      return d[2];
    });

    console.log(maxR);

    var r = d3.scale.linear()
      .domain([0, maxR])
      .range([0, 12])

    // setup axis
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .ticks(24);

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(7);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + [0, height] + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis')
      .call(yAxis);

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
        .attr('class', 'circle')
        .attr('cx', function(d) {
          return x(d[1]);
        })
        .attr('cy', function(d) {
          return y(d[0])
        })
        .attr('r', 0)
        .transition()
        .duration(1000)
        .attr('r', function(d) {
          console.log(r(d[2]), Math.ceil(r(d[2])));
          var radius = Math.ceil(r(d[2]));
          return radius > 0 ? Math.ceil(radius * 1.5) : 0;
        });

  }

}());
