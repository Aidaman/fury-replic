import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-circle-diagram',
  templateUrl: './circle-diagram.component.html',
  styleUrls: ['./circle-diagram.component.css']
})
export class CircleDiagramComponent implements OnInit {
  data: any[] = data;

  width: number = 750;
  height: number = 200;
  view: [number, number] = [this.width, this.height];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: any = {
    domain: ['#c43d16', '#fd9a7e', '#edc596', '#fcb500', '#dc6d02', '#e7284a']
  };


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
