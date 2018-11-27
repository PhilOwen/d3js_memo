let [width, height]  = [800, 600];

let svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("line")
    .attr("x1", 80)
    .attr("y1", 400)
    .attr("x2", 500)
    .attr("y2", 320)
    .attr("stroke-width", 16)
    .attr("stroke","MediumSpringGreen");

svg.append("rect")
    .attr("x", 360)
    .attr("y", 80)
    .attr("width", 80)
    .attr("height", 200)
    .attr("fill", "CornflowerBlue");

svg.append("circle")
    .attr("r", 40)
    .attr("cx", 180)
    .attr("cy", 300)
    .attr("fill", "HotPink");

svg.append("text")
    .text("hello d3.js")
    .attr("x", 70)
    .attr("y", 120)
    .attr("fill","MidnightBlue")
    .attr("font-size", 32);
