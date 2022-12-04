import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.css']
})
export class UpdComponent implements OnInit{
  id:any
  updUser:any
  constructor(public demser:DemoService, public fb:FormBuilder, public url:ActivatedRoute){
    this.updUser=fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      mob:['',Validators.required],
      addr:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    this.demser.sngUser(this.id).subscribe(data=>{
      this.updUser.patchValue(data)
    })
  }
  onSubmit(){
    this.id=this.url.snapshot.params['id']
    this.demser.updUser(this.id,this.updUser.value).subscribe((data:any)=>{
      console.log("Data Updated")
    })
    this.updUser.reset();
  }
}
