import { Component, OnInit } from '@angular/core';
import { faList,faPlus,faUser,faPowerOff,faTable,faHome,faUsers,faHandshake } from "@fortawesome/free-solid-svg-icons";
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faList = faList;
  faPlus = faPlus;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faTable=faTable;
  faHome=faHome;
  faUsers=faUsers;
  faHandshake=faHandshake;


  isLogged = false;
  usuario = "";

  roles:string[]=[];
  isAdmin = false;

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.getUsuario()
    }else{
      this.isLogged=false;
    }


    this.roles=this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      console.log(rol);
      
      if(rol === "ROLE_ADMIN"){
        this.isAdmin=true;
      }
    })
  }

  getUsuario(){
    this.usuario=this.tokenService.getUsername();
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
