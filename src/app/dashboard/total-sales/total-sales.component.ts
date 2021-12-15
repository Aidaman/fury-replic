import { Component, OnInit } from '@angular/core';
import { multi } from '../visits/Data';

@Component({
  selector: 'app-total-sales-diagram',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.css']
})
export class TotalSalesComponent implements OnInit {
  ngOnInit(): void {
  }
  public multi: any[] = [];
  public height: number = 200;
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
    domain: ['#ecdab9'],
  };

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
