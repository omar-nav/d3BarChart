var data = [455, 377, 40, 77, 281, 86, 303, 337, 365, 110];

data.sort(function(a, b){return a-b});
d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return '\u00A3 ' + d; });


d3.selectAll("p").style("color", "orange");