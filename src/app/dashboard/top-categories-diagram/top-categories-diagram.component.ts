import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-top-categories-diagram',
  templateUrl: './top-categories-diagram.component.html',
  styleUrls: ['./top-categories-diagram.component.css']
})
export class TopCategoriesDiagramComponent implements OnInit {
  public topCategoryAmount: number = this.sumOfData();
  public rndTotalSales: number = this.getRandomTotalSales();

  public data: any[] = data;
  public view: [number, number] = [700, 400];

  // options
  public gradient: boolean = false;
  public showLegend: boolean = true;
  public showLabels: boolean = false;
  public isDoughnut: boolean = false;
  public legendPosition: any = 'below';

  public colorScheme: any = {
    domain: ['#6e9a44', '#bad072', '#d5e2ed', '#3d9690', '#023026']
  };

  constructor() {
  }
  ngOnInit(): void {
  }

  onSelect(data: any): void {
    // console.log('Item clicked',: any JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  public sumOfData(): number{
    let tmp: number = 0;
    for (let i = 0; i < data.length; i++) {
      tmp += data[i].value;
    }
    return tmp;
  }
  public getRandomTotalSales(){
    return Math.round(Math.random()*(2000-this.sumOfData())+this.sumOfData());
  }
}
