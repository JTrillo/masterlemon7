import * as d3 from "d3";
import * as topojson from "topojson-client";
const spainjson = require('./spain.json');
const d3Composite = require("d3-composite-projections");
import { latLongCommunities } from "./communities";
import { stats } from "./stats";

const aProjection = d3Composite
  .geoConicConformalSpain()
  .scale(3300)
  .translate([500, 400]);

const geoPath = d3.geoPath().projection(aProjection);

const geojson = topojson.feature(
  spainjson,
  spainjson.objects.ESP_adm1
);

const maxAffected = stats.reduce(
  (max, item) => (item.value > max ? item.value : max),
  0
);

const calculateRadiusBasedOnAffectedCases = (comunidad: string) => {
  const entry = stats.find(item => item.name === comunidad);

  return entry ? affectedRadiusScale(entry.value) : 0;
};

const affectedRadiusScale = d3
  .scaleLinear()
  .domain([0, maxAffected])
  .range([0, 50]);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1024)
  .attr("height", 800)
  .attr("style", "background-color: #FBFAF0");

svg
  .selectAll("path")
  .data(geojson["features"])
  .enter()
  .append("path")
  .attr("class", "country")
  .attr("d", geoPath as any);
svg
  .selectAll("circle")
  .data(latLongCommunities)
  .enter()
  .append("circle")
  .attr("class", "affected-marker")
  .attr("r", d => calculateRadiusBasedOnAffectedCases(d.name))
  .attr("cx", d => aProjection([d.long, d.lat])[0])
  .attr("cy", d => aProjection([d.long, d.lat])[1]);