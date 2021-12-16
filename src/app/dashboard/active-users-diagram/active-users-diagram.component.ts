import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { IChartData, data, createData } from './data';

@Component({
  selector: 'app-active-users-diagram',
  templateUrl: './active-users-diagram.component.html',
  styleUrls: ['./active-users-diagram.component.css']
})
export class ActiveUsersDiagramComponent implements OnInit {
  private $tick: Observable<number> = interval(2000);
  private subscription!: Subscription;
  private dataLength: number = data[0].series.length;

  public ActiveUsersRightNow: number = this.sumOfData();
  public data: IChartData[] = data;
  public height: number = 200;
  public width: number = 600;
  public view: [number, number] = [this.width, this.height];

  public legend: boolean = false;
  public showLabels: boolean = true;
  public animations: boolean = true;
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = '';
  public yAxisLabel: string = '';
  public timeline: boolean = true;
  public autoScale: boolean = true;
  public showRefLabels: boolean = true;
  public colorScheme:any = {
    domain: ['#d5e2ed'],
  };

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.$tick.subscribe( () => {
      this.moveDiagramData();
      this.ActiveUsersRightNow = this.sumOfData();
    });
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

  public update(){

  }

  private moveDiagramData(){
    let tmpData: any = this.data[0].series;
    tmpData.push({
      name: "a few seconds ago" + (++this.dataLength),
      value: Math.round(Math.random() * (10 - 1) + 1)
    });
    tmpData.shift();
    this.data = [{
      name: "",
      series: tmpData
    }];    
  }
  private sumOfData(): number{
    let tmp: number = 0;
    for (let i = 0; i < data[0].series.length; i++) {
      tmp += data[0].series[i].value;         
    }
    return tmp;
  }
}
