import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user = {
    username : '',
    nombre : '',
    password : '',
    email : ''
  }

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.userService.añadirUsuario(this.user);
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('El nombre de usuario es requerido');
      return;
    }



    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario guardado con exito');
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error');
      }
    )
  }

  

}
