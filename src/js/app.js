'use strict';
var data =[50, 11, 150, 199, 500, -10];
var chart={w: 600, h: 600};
 
var scale= d3.scaleLinear()
			.domain([0,d3.max(data)])
			.range([0,chart.h]);
var chart= d3.select(".chart")
				.style("width", chart.w+'px')
				.style("height", chart.h+'px')
				.selectAll("div")
			.data(data)
				.enter()
				.append("div")
					.classed("bar",true)
					.text((d)=> d)
					.style('height', (d) => (d>0?scale(d):0)+'px')
					.style('margin-top',d=> (d>0?chart.h-scale(d):chart.h)+'px')
				.exit().remove()
						
						
						
						

  