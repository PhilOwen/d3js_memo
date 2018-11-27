const d3 = require("d3"),
      _  = require("underscore");

const [width, height] = [800, 600];
 
let svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

let ns = _.range(1, 49);

let xScale = d3.scaleLinear()
    .domain([0, ns.length-1])
    .range([10, width-10]);
 
let yScale = d3.scaleLog()
    .domain(d3.extent(ns))
    .range([height-10, 10]);

let colorScale = d3.scaleLog()
    .domain(d3.extent(ns).reverse())
    .range(['blue', 'red']);

svg.selectAll("circle")
    .data(ns)
    .enter()
      .append("circle")
      .attr("r", 4)
      .attr("cx", (d, i) => xScale(i))
      .attr("cy", yScale)
      .attr("fill", colorScale);

console.log("xScaleを直接呼ぶ")
console.log(`1　 => ${xScale(1)}`);
console.log(`45 => ${xScale(45)}`);
