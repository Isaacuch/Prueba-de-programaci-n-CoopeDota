import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

//Definimos el componente Angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//Define la clase del componente y la implementación de OnInit para ejecutar código cuando se inicie el componente
export class AppComponent implements OnInit {
  //Implementamos el Array para almacenar los usuarios obtenidos del servicio
  users: User[] = [];  
  //Objetos para almacenar los datos del nuevo usuario               
  newUser: User = { username: '', email: '' };

  //Definimos el constructor
  constructor(private userService: UserService) {}

  //Método que se ejecuta cuando el componente se inicia y se llama al metodo getUsers para obtener los usuarios
  ngOnInit(): void {
    this.getUsers();
  }

  //Método para obtener la lista de usuarios desde el servicio
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  //Método para crear un nuevo Usuario para almacenar la información
  createUser(): void {
    this.userService.createUser(this.newUser)
      .subscribe(() => {
        this.getUsers();
        this.newUser = { username: '', email: '' };
      });
  }
}
