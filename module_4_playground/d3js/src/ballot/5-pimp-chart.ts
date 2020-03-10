import * as d3 from "d3";
import { resultCollectionSpainNov19 } from "./data";
import { legendColor } from 'd3-svg-legend';

const svgDimensions = { width: 800, height: 500 };
const margin = { left: 5, right: 5, top: 10, bottom: 10 };
const chartDimensions = {
  width: svgDimensions.width - margin.left - margin.right,
  height: svgDimensions.height - margin.bottom - margin.top
};

const partiesColor = [
  "#ED1D25",
  "#0056A8",
  "#5BC035",
  "#6B2E68",
  "#F3B219",
  "#FA5000",
  "#C50048",
  "#029626",
  "#A3C940",
  "#0DDEC5",
  "#FFF203",
  "#FFDB1B",
  "#E61C13",
  "#73B1E6",
  "#BECD48",
  "#017252"
];

const politicalPartiesKeys: string[] = resultCollectionSpainNov19.map(
  item => item.party
);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgDimensions.width)
  .attr("height", svgDimensions.height)
  .attr("style", "background-color: #FBFAF0");

const chartGroup = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)
  .attr("width", chartDimensions.width)
  .attr("height", chartDimensions.height);

const radius = Math.min(chartDimensions.width, chartDimensions.height) / 2;
chartGroup.attr("transform", `translate(${radius},${radius})`);

const arc = d3
  .arc()
  .innerRadius(radius / 1.7)
  .outerRadius(radius);

const pieChart = d3
  .pie()
  .startAngle(-90 * (Math.PI / 180))
  .endAngle(90 * (Math.PI / 180));

const politicalResultsOnlyNumbers: number[] = resultCollectionSpainNov19.map(
  result => result.seats
);

const pie = pieChart(politicalResultsOnlyNumbers);

const arcs = chartGroup
  .selectAll("slice")
  .data(pie)
  .enter();

arcs
  .append("path")
  .attr("d", <any>arc) // Hack typing: https://stackoverflow.com/questions/35413072/compilation-errors-when-drawing-a-piechart-using-d3-js-typescript-and-angular/38021825
  .attr("fill", (d, i) => partiesColor[i]); // TODO color ordinal

// Legend
const ordinal = d3
  .scaleOrdinal()
  .domain(politicalPartiesKeys)
  .range(partiesColor);

const legendOrdinal = legendColor().scale(ordinal);

const legendLeft = margin.left;
const legendTop = radius + 5;

const legendGroup = svg
  .append("g")
  .attr("transform", `translate(${legendLeft},${legendTop})`);

legendGroup.call(legendOrdinal);