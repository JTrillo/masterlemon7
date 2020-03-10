import * as d3 from "d3";
import { resultCollectionSpainNov19 } from "./data";

const svgDimensions = { width: 800, height: 500 };
const margin = { left: 5, right: 5, top: 10, bottom: 10 };
const chartDimensions = {
  width: svgDimensions.width - margin.left - margin.right,
  height: svgDimensions.height - margin.bottom - margin.top
};
const totalNumberSeats = resultCollectionSpainNov19.reduce(
  (sum, item) => sum + item.seats,
  0
);

const barHeight = 200;

const politicalPartiesKeys: string[] = resultCollectionSpainNov19.map(
  item => item.party
);

const partiesColorScale = d3
  .scaleOrdinal(politicalPartiesKeys)
  .range([
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
  ]);

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

const xScale = d3
  .scaleLinear()
  .domain([0, totalNumberSeats])
  .range([0, chartDimensions.width]);

const singleElectionResult = resultCollectionSpainNov19.reduce(
  (total, item) => ({
    ...total,
    [item.party]: item.seats
  }),
  {}
);

const data = [singleElectionResult];

const stack = d3.stack().keys(politicalPartiesKeys);

const series = stack(data);

chartGroup
  .selectAll("rect")
  .data(series)
  .enter()
  .append("rect")
  .attr("width", d => {
    // To get the width of the current item we have to substract
    // the final stack value - the initial stack value
    return xScale(d[0][1] - d[0][0]);
  })
  .attr("height", barHeight)
  .attr("x", (d, i) => {
    // We take as starting point the first coordinate
    // e.g. PP 120, 208 -> we start at 120 (where PSOE ended, and on the width param sum up that value)
    return xScale(d[0][0]);
  })
  .attr("y", d => chartDimensions.height - barHeight)
  .attr("fill", (d, i) => partiesColorScale(d.key));