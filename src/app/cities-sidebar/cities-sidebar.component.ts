import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-cities-sidebar',
  templateUrl: './cities-sidebar.component.html',
  styleUrls: ['./cities-sidebar.component.css']
})
export class CitiesSidebarComponent implements OnInit {
  public cityList: City[];
  public citySelected: number;

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getCitiess().subscribe(res=> this.cityList = res);
  }



  selectCity(city){
    this.citySelected = city;
  }
}
