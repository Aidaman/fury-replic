import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IProduct{
  name: string;
  price: number;
  timeago: string
}
const products: IProduct[] =[
  {
    name: 'USB-C Cable',
    price: 9.00,
    timeago: '6 minutes ago'
  },
  {
    name: 'Samsung Galaxy S9',
    price: 800.00,
    timeago: '17 minutes ago'
  },
  {
    name: 'Samsung galaxy S8 256GB',
    price: 600.00,
    timeago: '42 minutes ago'
  },
  {
    name: 'Samsug DEX',
    price: 55.00,
    timeago: '3 hours ago'
  },
  {
    name: 'Lightning to USB-C Adapter	',
    price: 17.00,
    timeago: '25 minutes ago'
  },
  {
    name: 'Apple iPhone x',
    price: 1100.00,
    timeago: 'an hour ago ago'
  },
  {
    name: 'Apple iPhone 8',
    price: 900.00,
    timeago: '2 minutes ago'
  },
  {
    name: 'Apple iPhone 7 128GB',
    price: 700.00,
    timeago: '2 hours ago'
  },
  {
    name: 'Apple MacBook Pro',
    price: 1300.00,
    timeago: '14 minutes ago'
  },
  {
    name: 'Apple Mac Pro',
    price: 1000,
    timeago: '2 hours ago'
  },

]

@Component({
  selector: 'app-recent-sales-table',
  templateUrl: './recent-sales-table.component.html',
  styleUrls: ['./recent-sales-table.component.css']
})
export class RecentSalesTableComponent implements AfterViewInit {
  public displayedColumns: string[] = ['Product', 'Price', 'Timeago'];
  public dataSource = new MatTableDataSource<IProduct>(products);

  @ViewChild('MatPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
