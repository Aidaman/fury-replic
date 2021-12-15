import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface ICustomer {
  index: number;
  image: string;
  name: string;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: string;
  city: string;
  phone: string;
}
const Customers: ICustomer[] = [
  {
    index: 1,
    image: "../../assets/Users/UserAvatar.jpg",
    name: "Jotaro Kujo",
    firstName: "Jotaro",
    lastName: "Kujo",
    street: "Somwhere in Japan st.",
    zipcode: "123456",
    city: "Some Japanese one",
    phone: "none",
  },
  {
    index: 2,
    image: "../../assets/Users/User1.jpg",
    name: "Kakyoin Noriaki",
    firstName: "Kakyoin",
    lastName: "Noriaki",
    street: "Somwhere in Japan st.",
    zipcode: "123456",
    city: "Some Japanese one",
    phone: "none",
  },
  {
    index: 3,
    image: "../../assets/Users/User2.jpg",
    name: "Joseph Joestar",
    firstName: "Joseph",
    lastName: "Joestar",
    street: "Somwhere in USA",
    zipcode: "654321",
    city: "Some American one",
    phone: "none",
  },
  {
    index: 4,
    image: "../../assets/Users/User3.jpg",
    name: "Giorno Giovanna",
    firstName: "Giovani",
    lastName: "Giorgio",
    street: "Somwhere in Neapolis st.",
    zipcode: "456123",
    city: "Neapolis",
    phone: "none",
  },
  {
    index: 5,
    image: "../../assets/Users/User4.jpg",
    name: "Bruno Bucciarati",
    firstName: "Bruno",
    lastName: "Bucciarati",
    street: "Somwhere in Neapolis st.",
    zipcode: "456123",
    city: "Neapolis",
    phone: "none",
  },
  {
    index: 6,
    image: "../../assets/Users/User5.jpg",
    name: "Spedwagon",
    firstName: "Speeeeeed",
    lastName: "WagOOOOn",
    street: "Somwhere in London st.",
    zipcode: "345612",
    city: "London",
    phone: "none",
  },
  {
    index: 7,
    image: "../../assets/Users/User6.jpg",
    name: "DIO Brando",
    firstName: "DЫO",
    lastName: "Brando",
    street: "Somwhere in London st.",
    zipcode: "345612",
    city: "London",
    phone: "none",
  },
  {
    index: 8,
    image: "../../assets/Users/User7.jpg",
    name: "Higashikata Josuke",
    firstName: "Higashikata",
    lastName: "Josuke",
    street: "Somwhere in Morio st.",
    zipcode: "654321",
    city: "Morio",
    phone: "none",
  },
  {
    index: 9,
    image: "../../assets/Users/User8.jpg",
    name: "Nijimura Okuyasu",
    firstName: "Nijimura",
    lastName: "Okuyasu",
    street: "Somwhere in Morio st.",
    zipcode: "654321",
    city: "Morio",
    phone: "none",
  },
  {
    index: 10,
    image: "../../assets/Users/User9.jpg",
    name: "Hirose Koichi",
    firstName: "Hirose",
    lastName: "Koichi",
    street: "Somwhere in Morio st.",
    zipcode: "654321",
    city: "Morio",
    phone: "none",
  },
  {
    index: 11,
    image: "../../assets/Users/User10.jpg",
    name: "Caesar Zeppeli",
    firstName: "Caesar",
    lastName: "Zeppeli",
    street: "Somwhere in Rome st.",
    zipcode: "321654",
    city: "Rome",
    phone: "none",
  },
  {
    index: 12,
    image: "../../assets/Users/User11.jpg",
    name: "Jolyne Kujo",
    firstName: "Jolyne",
    lastName: "Kujo",
    street: "Somwhere in Florida st.",
    zipcode: "654321",
    city: "Green Dolphin Prison",
    phone: "none",
  },
  {
    index: 13,
    image: "../../assets/Users/User12.jpg",
    name: "Enrico Pucci",
    firstName: "Enrico",
    lastName: "Pucci",
    street: "Somwhere in Florida st.",
    zipcode: "654321",
    city: "Green Dolphin Prison Chapel",
    phone: "none",
  },
  {
    index: 14,
    image: "../../assets/Users/User13.jpg",
    name: "Leone Abbacchio",
    firstName: "Leone",
    lastName: "Abbacchio",
    street: "Somwhere in Neapolis st.",
    zipcode: "654321",
    city: "Neapolis",
    phone: "none",
  },
  {
    index: 15,
    image: "../../assets/Users/User14.jpg",
    name: "Rudolf von Stroheim",
    firstName: "Rudolf",
    lastName: "Stroheim",
    street: "Somwhere in Germany st.",
    zipcode: "654321",
    city: "Zurick",
    phone: "none",
  },
]

@Component({
  selector: 'app-all-in-one-table',
  templateUrl: './all-in-one-table.component.html',
  styleUrls: ['./all-in-one-table.component.css']
})
export class AllInOneTableComponent implements AfterViewInit {
  public displayedColumns: string[] = ['image', 'name', 'firstname', 'lastname', 'street', 'zipcode', 'city', 'phone'];
  public dataSource = new MatTableDataSource<ICustomer>(Customers);

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
