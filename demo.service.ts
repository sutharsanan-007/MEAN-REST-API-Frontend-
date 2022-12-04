import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public _http:HttpClient) { }
  addUser(user:any){
    return this._http.post("http://localhost:8080/home/addi/",user)
  }
  retUser(){
    return this._http.get("http://localhost:8080/home/")
  }
  delUser(id:string){
    return this._http.delete("http://localhost:8080/home/del/"+id)
  }
  updUser(id:any,user:any){
    return this._http.put("http://localhost:8080/home/updi/"+id,user)
  }
  sngUser(id:string){
    return this._http.get("http://localhost:8080/home/find/"+id)
  }
}
