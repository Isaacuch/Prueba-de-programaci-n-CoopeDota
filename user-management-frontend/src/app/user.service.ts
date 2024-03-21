//se importan la clases necesarias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

//clase como un servicio inyectable en Angular
@Injectable({
  providedIn: 'root'
})

// Se define la clase del servicio UserService
export class UserService {
  //URL de la API en donde se encuentra
  private apiUrl = 'https://localhost:5001/users';

  //Constructor del servicio que recibe el módulo HttpClient
  constructor(private http: HttpClient) { } 

  // Método para obtener la lista de usuarios desde la API por medio del HTTP GET
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  //// Método para crear un nuevo usuario en la API por medio del HTTP Post
  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
