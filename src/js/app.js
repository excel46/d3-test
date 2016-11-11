'use strict';
var margin={ top: 20, bottom:60, left:40, right: 20};
var svg={w: 800 - margin.left - margin.right, h: 600 - margin.top - margin.bottom};

var chart=d3.select(".chart")
			.append("svg")
				.attr("class", "svg")
				.attr("width", svg.w + margin.right + margin.left )
				.attr("height", svg.h + margin.top + margin.bottom)
				
var xScale=d3.scaleBand()
 .rangeRound([0, svg.w])
xScale.padding(.3);

var yScale=d3.scaleLinear()
.range([svg.h, 0]);

var xAxis = d3.axisBottom ()
    .scale(xScale);

var yAxis = d3.axisLeft()
	.scale(yScale);
				
var data = d3.json('src/data/data.json', function(data){
	xScale.domain(data.map( (obj) => obj.name ));
	yScale.domain([0, d3.max(data.map( (d)=> d.age))]);
	
	//xScale.align();
	chart.append("g")
			
			.attr("transform", "translate("+margin.left+","+(svg.h +margin.top)+")")
			.call(xAxis) 
			.selectAll('text')
			.attr('transform', 'translate(-10,15) rotate(-45)')
	
	chart.append("g")
			.call(yAxis)
			.attr("transform", "translate("+margin.left+","+(margin.top)+")")
	
	var update =chart.selectAll(".circle")
					.data(data)
				
	var enter = update.enter()
					.append("circle")
						.attr("class", "circle")
						.attr("transform", (d) => "translate( "+margin.left+","+margin.top+")")
						.attr("r", 20)
						.attr("cx", (d)=>xScale(d.name))
						.attr("cy", (d)=>yScale(d.age))
						//.attr("height", (d) =>svg.h- yScale(d.age))
						//.attr("width", xScale.bandwidth())
		
		update.enter().append("text")
						.text((d)=>d.name)
						.attr("transform", (d) => "translate( "+margin.left+","+margin.top+")")
						.attr("x", (d)=>xScale(d.name)-10)
						.attr("y", (d)=>yScale(d.age))
						.attr("class", "text")
					
					
					
					
	
					
		
	
}
);



					
						
						
						
						

  