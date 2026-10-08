import { Component } from '@angular/core';
import { MollywoodmoodsService } from '../services/mollywoodmoods.service';

@Component({
  selector: 'app-mollywoodmoods',
  templateUrl: './mollywoodmoods.component.html',
  styleUrls: ['./mollywoodmoods.component.css']
})
export class MollywoodmoodsComponent {
  images: any;
  constructor(private service: MollywoodmoodsService) { }
  ngOnInit() {
    this.service.onsubmit().subscribe(data => this.images = data);
  }
}


