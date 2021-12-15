import { Component, OnInit } from '@angular/core';
import { multi } from '../visits/Data';
import { IChartData, bounceRateData, sessionData, sessionDurationData, usersData } from './Data'

interface ICompare{
  iconLigature: string;
  color: string;
  text: string;
}

interface IData{
  name: string;
  chartDatas: IChartData[];
  compared: ICompare;
  requareSum: boolean;
  viewValue: string;
}

const chartDataUsers: IData = {
  name: "Users",
  chartDatas: usersData,
  compared: {
    iconLigature: "keyboard_arrow_up",
    color: "green",
    text: "5.95",
  },
  requareSum: true,
  viewValue: 'active',
};
const sessions: IData = {
  name: "Sessions",
  chartDatas: sessionData,
  compared: {
    iconLigature: "keyboard_arrow_up",
    color: "green",
    text: "11.6",
  },
  requareSum: true,
  viewValue: '',
};
const bounceRates: IData = {
  name: "Bounce Rate",
  chartDatas: bounceRateData,
  compared: {
    iconLigature: "keyboard_arrow_down",
    color: "red",
    text: "-20.14",
  },
  requareSum: false,
  viewValue: '',
}
const sessionDuration: IData = {
  name: "session Duration",
  chartDatas: sessionDurationData,
  compared: {
    iconLigature: "keyboard_arrow_up",
    color: "green",
    text: "-6.62",
  },
  requareSum: false,
  viewValue: '',
}

@Component({
  selector: 'app-switching-line-chard-diagram',
  templateUrl: './switching-line-chard-diagram.component.html',
  styleUrls: ['./switching-line-chard-diagram.component.css']
})
export class SwitchingLineChardDiagramComponent implements OnInit {
  ngOnInit(): void {  }

  info: IData[] = [
    chartDataUsers, sessions, bounceRates, sessionDuration
  ]

  multi: any[] = this.info[0].chartDatas;
  height: number = 350;
  width: number = 1200;
  view: [number, number] = [this.width, this.height];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Timeline';
  yAxisLabel: string = 'Amount';

  timeline: boolean = true;
  autoScale: boolean = true;
  showRefLabels: boolean = true;
  colorScheme:any = {
    domain: ['#b2481b', '#eab586']
  };

  public formula(data: IData){
    let result: number = 0;
    for(let i = 0; i < data.chartDatas[0].series.length; i++){
      result += data.chartDatas[0].series[i].value;
    }
    if(data.requareSum){
      return result;
    }
    else{
      return (result/data.chartDatas[0].series.length).toFixed(2);
    }
  }

  switchActiveGraffic(dataUnits: IData) : void{
    for(let i = 0; i < this.info.length; i++){
        if(this.info[i].viewValue.includes('active')){
          this.info[i].viewValue = '';
        }}
    dataUnits.viewValue = 'active';
    this.multi = dataUnits.chartDatas;
  }

  constructor() {
    // Object.assign(this, {usersData})
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
