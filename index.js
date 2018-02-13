var numbers = [177, 1177, 377, 77, 281, 86, 303, 337, 365, 110];

numbers.sort(function(a, b){return a-b});

d3.select(".chart")
  .selectAll("div")
  .data(numbers)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return "\u00A3 " + d.toLocaleString(); });