import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'pb-d3jschart',
  templateUrl: './d3jschart.component.html',
  styleUrls: ['./d3jschart.component.scss']
})
export class D3jschartComponent implements OnInit {

  private data = [
    {title: 'Eat Out', budget: '25'},
    {title: 'Rent', budget: '375'},
    {title: 'Grocery', budget: '110'},
    {title: 'Gas', budget: '30'},
    {title: 'Babysitter', budget: '40'},
    {title: 'Yard Service', budget: '20'},
    {title: 'Car Payment', budget: '85'}
  ];

  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

  private createSvg(): void {
    this.svg = d3.select('figure#pie')
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height)
    .append('g')
    .attr(
      'transform',
      'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
    );
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.budget.toString()))
  .range(['#ffcd56', '#ff6384', '#36a2eb', '#fd6b19', '#2bcf57', '#db1414', '#8c27cf']);
}

private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.budget));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr('stroke', '#121926')
  .style('stroke-width', '1px');

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('text')
  .text(d => d.data.title)
  .attr('transform', d => 'translate(' + labelLocation.centroid(d) + ')')
  .style('text-anchor', 'middle')
  .style('font-size', 15);
}

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

}
