
import { Component, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph-visualizer',
  standalone: true,
  template: '<svg id="graph" width="600" height="400"></svg>',
})
export class GraphVisualizerComponent implements AfterViewInit {
  ngAfterViewInit() {
    const data = (globalThis as any).ngSignalScope?.graph ?? [];

    const nodes = data.map((n: any) => ({ id: n.id, group: n.type }));
    const links = data.flatMap((n: any) => n.deps.map((d: string) => ({ source: d, target: n.id })));

    const svg = d3.select('#graph');
    const width = 600;
    const height = 400;

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    svg.selectAll('*').remove();

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#888')
      .attr('stroke-width', 2);

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', d => d.group === 'signal' ? 'steelblue' : d.group === 'computed' ? 'purple' : 'orange')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text(d => d.id)
      .attr('font-size', 10)
      .attr('dx', 12)
      .attr('dy', '.35em');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      label
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
}
