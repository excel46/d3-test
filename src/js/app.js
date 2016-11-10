'use strict';
var data =[50, 11, 150, 199, 500];
var chart={w: 600, h: 600};
var barwidth=30;
 
var scale= d3.scaleLinear()
			.domain([0,d3.max(data)])
			.range([0,chart.h]);
var update= d3.select(".chart")
				.append("svg")
				.attr("class", "svg")
				.attr("width", chart.w)
				.attr("height", chart.h)
				.selectAll("g")
					.data(data);
				
var bars= update.enter()
					.append("g")
						.attr("transform", (d,i) =>  "translate("+(i*barwidth + i*5 )+","+(chart.h - scale(d) +1 )+")");
						
bars.append("rect")
	.attr("class", "rect")
	.attr("width", barwidth)
	
	.attr("height", (d)=> scale(d));

	bars.append("text")
    .attr("x", barwidth / 5  )
    .attr("y", (d)=> scale(d) -3 )
    .text(function(d) { return d; });
					
update.exit().remove();
					
						
						
						
						

  