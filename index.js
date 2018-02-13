var data = [77, 86, 168, 210, 281, 303, 337, 365];

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return '\u00A3 ' + d; });