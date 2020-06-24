import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { AuthenticationService } from '../login/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelsService } from '../hotel-list/hotels.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel: Hotel;
  isAdmin: boolean;
  isUser: boolean;
  public form: FormGroup;
  public buyForm: FormGroup;

  constructor(private hotelsService: HotelsService, private fb: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (localStorage.getItem('authUser')) {
      if (this.authenticationService.isAdmn().roles[0] === "ADMIN") {
        this.isAdmin = true;
        this.form = this.fb.group({
          name: this.hotel.name,
          description: this.hotel.description,
          stars: this.hotel.stars,
          phone: this.hotel.phone,
          quantity: this.hotel.quantity,
          currentPrice: this.hotel.currentPrice,
          photoName: this.hotel.photoName
        });
      }else if (this.authenticationService.isAdmn().roles[0] === "USER"){
         this.isUser = true
         this.buyForm = this.fb.group({
           quantity: ""
         })
      }
    }
  }
  buy(){

  }
  onSubmit() {

    this.hotelsService.updtHotel(this.hotel.id, this.form.value).subscribe(res=> alert(res))
  }
}
