(function() {
  'use strict';

  var data;

  // var dataUrl = 'https://api.github.com/repos/angular/angular/stats/punch_card';
  var dataUrl = 'punch_card.json';

  d3.json(dataUrl, function(error, json) {
    data = json;
    visualize();
  });

  function visualize() {
    // 1. Setup
    var el = d3.select('#punchcard'),
        margin = {top: 20, right: 20, bottom: 30, left: 80},
        elWidth = parseInt(el.style('width'), 10),
        elHeight = parseInt(el.style('height'), 10),
        width = elWidth - margin.left - margin.right,
        height = elHeight - margin.top - margin.bottom,
        padding = 20;

    var svg = el.append('svg')
        .attr('width', elWidth)
        .attr('height', elHeight)
      .append('g')
        .attr('transform', 'translate(' + margin.left + "," + margin.top + ')');

    /* Create Viz
    ----------------------------------------------*/



    // 2. Setup scales

    // the "x" scale should be a linear scale
    // input values are [0, 23]
    // output values are [0, width]


    // the "y" scale should be a linear scale
    // input values are [0, 6]
    // output valies are [0, height]




    // 6. setup scale for radius

    // first get the max number of commits
    var maxCommits = d3.max(data, function(d) {
      return d[2];
    });

    // setup linear scale
    // input values are [0, maxCommits]
    // output values are [0, 12] (arbitrary max radius)




    // 3. setup axis

    // x axis should utiilze the "x" scale
    // tick orientation should be 'bottom'
    // there should be a total of 24 ticks
    // format the ticks accordingly. you can use the following:
    //      .tickFormat(function (d, i) {
    //        var suffix = (d > 12) ? 'p' : 'a';
    //        var time = (d%12 === 0) ? 12 : d%12;
    //        return time + suffix;
    //      })

    // y axis should utilize the "y" scale
    // tick orientation should be 'left'
    /// there should be a total of 7 ticks
    // format the ticks accordingly. You can use the following:
    //    .tickFormat(function (d, i) {
    //      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d];
    //    })



    // 4. append the axis to the svg

    // append x axis
    // give it a class of 'axis'
    // transform it accordingly: translate(0, height)
    // .call(xAxis)


    // append y axis
    // give it a class of 'axis'




    // 5. create the main visualization

    // data join to the data and enter()
    // append circle, and style all the attributes accordingly
    //    cx, cy, r
    // remember, each datum is of the form [1, 9, 20] - 20 total commits
    // during the 9:00am hour on Mondays


  }

}());
