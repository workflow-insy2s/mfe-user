import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './models/role';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
//APIRole
url='http://localhost:8082/api/keycloak'

addRole (role:Role){
  return this.http.post(this.url+'/roles/',role) 
 }

 getAllRoles(){
  return this.http.get(this.url+'/roles/')

 }

 deleteRole (roleId: any ){
  return this.http.delete(this.url+'/roles/'+roleId)
}

editRole(role:Role , roleId:any ){
  return this.http.post(this.url+'/roles/'+roleId+'/update',role) 
 }


//APIs User


addUser (user:User){
  return this.http.post(this.url+'/users/create',user) 
 }

 getAllUsers(){
  return this.http.get(this.url+'/users/')

 }

 deleteUser (userId: any ){
  return this.http.delete(this.url+'/users/'+userId)
}

editUser(user:User){
  return this.http.post(this.url+'/users/update',user) 
 }


 getRoleById(userId:any){
  return this.http.get(this.url+'/'+userId)
}
}

