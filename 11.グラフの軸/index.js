const d3 = require("d3");

let migration = [
  [274121, 247577],
  [199006, 260306],
  [323782, 250030],
  [254693, 268462],
  [249637, 205926],
  [233779, 193659],
  [269377, 275795],
  [325008, 377408],
  [282680, 245425],
  [243317, 221319],
  [204331, 186593],
  [272610, 303250]
];

let margin = {top: 20, right: 20, bottom: 30, left: 50},
    width  = 700 - margin.left - margin.right,
    height = 400 - margin.top  - margin.bottom;

function drawAxes(svg, xAxis, yAxis) {
  svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
  svg.append("g")
      .call(yAxis);
}

function drawLine(data, svg, xScale, yScale) {
  let line = d3.line()
      .x((rec, i) => xScale(i+1))
      .y(rec => yScale(rec[0]));
  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
}

function drawCircles(data, svg, xScale, yScale) {
  svg.selectAll("circle")
      .data(data)
      .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", (rec, i) => xScale(i+1))
        .attr("cy", rec => yScale(rec[0]));
}


let svg = d3.select("body").append("svg")
    .attr("width",  width  + margin.left + margin.right)
    .attr("height", height + margin.top  + margin.bottom)
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

let xScale = d3.scaleLinear()
    .domain([0.5, 12.5])
    .range([0, width]);
let yScale = d3.scaleLinear()
    .domain([100000, 400000])
    .range([height, 0]);

let xAxis = d3.axisBottom(xScale);
let yAxis = d3.axisLeft(yScale);

drawAxes(svg, xAxis, yAxis);
drawLine(migration, svg, xScale, yScale);
drawCircles(migration, svg, xScale, yScale);
