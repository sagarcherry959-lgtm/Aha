import { Component } from '@angular/core';
import { LovedairiesService } from '../services/lovedairies.service';

@Component({
  selector: 'app-lovedairies',
  templateUrl: './lovedairies.component.html',
  styleUrls: ['./lovedairies.component.css']
})
export class LovedairiesComponent {
images:any;
constructor(private service:LovedairiesService){}
ngOnInit(){
  this.service.onsubmit().subscribe(data=>this.images=data);
}
}
