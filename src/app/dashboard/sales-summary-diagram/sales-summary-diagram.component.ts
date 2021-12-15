import { Component, OnInit } from '@angular/core';
import { data } from './data';
import * as shape from 'd3-shape'

@Component({
  selector: 'app-sales-summary-diagram',
  templateUrl: './sales-summary-diagram.component.html',
  styleUrls: ['./sales-summary-diagram.component.css']
})
export class SalesSummaryDiagramComponent implements OnInit {
  public data: any[] = data;
  public height: number = 200;
  public width: number = 100;
  public view: [number, number] = [0, this.height];

  // options
  public legend: boolean = false;
  public showLabels: boolean = false;
  public animations: boolean = true;

  public xAxis: boolean = false;
  public yAxis: boolean = false;
  public showYAxisLabel: boolean = false;
  public showXAxisLabel: boolean = false;
  public xAxisLabel: string = '';
  public yAxisLabel: string = '';

  public timeline: boolean = false;
  public autoScale: boolean = false;
  public showRefLabels: boolean = false;
  public colorScheme: any = {
    domain: ['#EEEEEE', '#6e9a44']
  };
  public curve: any = shape.curveBasis;

  constructor() { }

  ngOnInit(): void {
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
