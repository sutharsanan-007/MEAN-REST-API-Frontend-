import { Component } from '@angular/core';
import { DemoService } from "../demo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  user:any
  constructor(public demser:DemoService) {
    this.demser.retUser().subscribe((data:any)=>{
      this.user=data;
    })
  }
  del(data:any){
    this.demser.delUser(data._id).subscribe(data=>{
      console.log("Deleted")
    })
  }
}
