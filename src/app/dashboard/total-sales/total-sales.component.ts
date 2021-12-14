import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-total-sales-diagram',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.css']
})
export class TotalSalesComponent implements OnInit {
  ngOnInit(): void {
  }
  public multi: any[] = [];
  public height: number = 380;
  public width: number = 600;
  public view: [number, number] = [this.width, this.height];

  // options
  public legend: boolean = false;
  public showLabels: boolean = false;
  public animations: boolean = true;
  public xAxis: boolean = false;
  public yAxis: boolean = false;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = '';
  public yAxisLabel: string = '';
  public timeline: boolean = true;
  public autoScale: boolean = true;
  public showRefLabels: boolean = true;
  public colorScheme:any = {
    domain: ['#7aa3e5', '#a8385d']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
