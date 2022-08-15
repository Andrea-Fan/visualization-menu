import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualization-menu';
  menu = [
    {
      icon: 'fa-solid  demo_icons fa-5x',
      name: 'COLUMN CHART',
      actionFn: function () {
        window.alert(this.name);

      },
      isSelected: false,
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-chart-pie fa-5x',
      name: 'PIE CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-diagram-project fa-5x',
      name: 'MIND MAP',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-chart-line fa-5x',
      name: 'GRAPH',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'HISTOGRAM',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'SURFACE GRAPH',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-chart-area fa-5x',
      name: 'AREA CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'FINANCIAL ANALYSIS',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'COMBO CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-tree fa-5x',
      name: 'INFOGRAPHIC',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-chart-bar fa-5x',
      name: 'BAR CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'STOCK ANALYSIS',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-chart-gantt fa-5x',
      name: 'GANTT CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-table fa-5x',
      name: 'TABLE',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-sitemap fa-5x',
      name: 'ORG CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },

    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'BUBBLE CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'TREEMAP',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-gauge-simple-high fa-5x',
      name: 'GAUGE CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'SCATTER CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'border' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'VENN DIAGRAM',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'POLAR DIAGRAM',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'lastlineborder' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'PYRAMID DIAGRAM',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'EXPLODED DONUT',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'lastlineborder' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'FLOWCHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    },
    { type: 'lastlineborder' },
    {
      icon: 'fa-solid fa-image fa-5x',
      name: 'DONUT CHART',
      actionFn: function () {
        window.alert(this.name);
      },
      type: 'option',
      number: ''
    }
  ];
}
