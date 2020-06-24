import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel: Hotel;
  isAdmin: boolean
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(this.authenticationService.isAdmn().roles[0] === "ADMIN"){
      this.isAdmin = true;
    }
    console.log(this.isAdmin)
  }

}
