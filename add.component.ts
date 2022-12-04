import { Component } from '@angular/core';
import { DemoService } from "../demo.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  addUser:any
  constructor(public demser:DemoService, public fb:FormBuilder){
    this.addUser=fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      mob:['',Validators.required],
      addr:['',Validators.required]
    })
  }
  onSubmit(){
    this.demser.addUser(this.addUser.value).subscribe((data:any)=>{
      console.log("Data Inserted")
      this.addUser.reset();
    })
  }
}
