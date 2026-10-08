import { Component } from '@angular/core';
import { LatestrelesesService } from '../services/latestreleses.service';

@Component({
  selector: 'app-latestreleses',
  templateUrl: './latestreleses.component.html',
  styleUrls: ['./latestreleses.component.css']
})
export class LatestrelesesComponent {
  images:any;
constructor(private service:LatestrelesesService){}
ngOnInit(){
  this.service.onsubmit().subscribe(data=>this.images=data);
}
}
