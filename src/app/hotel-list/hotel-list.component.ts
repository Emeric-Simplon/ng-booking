import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from './hotels.service';
import { CitiesService } from '../cities-sidebar/cities.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public hotelList: Hotel[];
  public freshHotelList: Hotel[];
  private _citySelected: number;

  @Input() set citySelected(value: number) {
    this._citySelected = value;
    this.hotelList = this.freshHotelList;
    if (value) {
      this.hotelList = this.hotelList.filter(hotel => hotel.city.id === value)
    }
  };
  get citySelected(): number {
    return this._citySelected;
  }
  constructor(private modalService: NgbModal, private hotelsService: HotelsService, public citiesService: CitiesService) { }

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe(res => { this.hotelList = res; this.freshHotelList = res })
  }

  open(hotel: Hotel) {
    const modalRef = this.modalService.open(HotelDetailsComponent, { size: "lg" });
    modalRef.componentInstance.hotel = hotel;
  }
}
