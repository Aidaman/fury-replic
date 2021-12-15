import { Component, OnInit } from '@angular/core';
import { multi } from './Data';
import * as shape from 'd3-shape'

@Component({
  selector: 'app-total-clicks-diagram',
  templateUrl: './total-clicks.component.html',
  styleUrls: ['./total-clicks.component.css']
})
export class TotalClicksComponent implements OnInit {

  ngOnInit(): void {
  }
  multi: any[] = [];
  height: number = 200;
  width: number = 600;
  view: [number, number] = [this.width, this.height];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;
  autoScale: boolean = true;
  showRefLabels: boolean = true;
  colorScheme:any = {
    domain: ['#d5e2ed']
  };
  curve: any = shape.curveBasis;

  constructor() {
    Object.assign(this, { multi }); 
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
