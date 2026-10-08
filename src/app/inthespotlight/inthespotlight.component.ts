import { Component } from '@angular/core';
import { Inthespotlight } from '../models/inthespotlight';
import { InthespotlightService } from '../services/inthespotlight.service';

@Component({
  selector: 'app-inthespotlight',
  templateUrl: './inthespotlight.component.html',
  styleUrls: ['./inthespotlight.component.css']
})
export class InthespotlightComponent {
images:any;
constructor(private service:InthespotlightService){}
ngOnInit(){
  this.service.onsubmit().subscribe(data=>this.images=data);
}
}
