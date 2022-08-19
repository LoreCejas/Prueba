import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  sections: any = [
    {
      name: "coops",
      icon: "coops",
      title: "Cooperativas",
      description: "Acá podras dar de alta, ver y modificar los acuerdos creditos de las cooperativa."
    },
    {
      name: "socios",
      icon: "socios",
      title: "Socios",
      description: "Acá podras dar de alta, ver y modificar los acuerdos creditos de tus asociados."
    },
    {
      name: "transactions",
      icon: "transactions",
      title: "Transacciones",
      description: "Acá podras ver y descargar las transacciones realizadas."
    }
    ,
    {
      name: "users",
      icon: "user",
      title: "Usuarios",
      description: "Acá podras configurar los usuarios de cada cooperativa."
    }
  ];

  changePassword = false;

  _environment;

  constructor(private authService: AuthService) {
    this.user = authService.authenticatedUser;
  }

  ngOnInit(): void {
    this._environment = environment;
  }

  logOff(e: any) {
    e.preventDefault();
    this.authService.logout();
  }

  showChangePasswordModal(show: boolean) {
    this.changePassword = show;
  }

}
