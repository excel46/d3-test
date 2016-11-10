var data =[50, 11, 150, 199, 1000, -10];
var chart={w: 600, h: 600};
 
var scale= d3.scaleLinear()
			.domain([0,d3.max(data)])
			.range([0,chart.w]);
var chart= d3.select(".chart")
				.style("width", chart.w+'px')
				.style("height", chart.h+'px')
				.selectAll("div")
			.data(data)
				.enter()
				.append("div")
					.classed("bar",true)
					.text((d)=> d)
					.style('width', (d) => scale(d)+'px')
				.exit().remove()
						
						
						
						

  