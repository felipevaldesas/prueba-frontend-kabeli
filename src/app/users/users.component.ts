import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  usersArray: User[] = [
    {
      name: 'Juan Rodriguez',
      email: ' juan@rodriguez.org ',
      password: 'hunter2',
      phone: {
        number: '1234567',
        citycode: '1',
        contrycode: '57',
      },
    },
    {
      name: 'Felipe Valdés',
      email: ' felipevaldes7@hotmail.com ',
      password: 'hunter2',
      phone: {
        number: '71344176',
        citycode: '56',
        contrycode: '9',
      },
    },
  ];

  selectedUser: User = {
    name: '',
    email: '',
    password: '',
    phone: {
      number: '',
      citycode: '',
      contrycode: '',
    },
  };
  addOrEditBtn: boolean = true;
  addOrEditHeader: String = 'Insertar Nuevo Usuario';

  edit(user: User) {
    this.selectedUser = user;
    this.addOrEditBtn = false;
    this.addOrEditHeader = 'Update ' + this.selectedUser.name;
  }

  addOrEdit() {
    if (
      this.selectedUser.name !== '' &&
      this.selectedUser.email !== '' &&
      this.selectedUser.password !== '' &&
      this.selectedUser.phone.number !== '' &&
      this.selectedUser.phone.citycode !== '' &&
      this.selectedUser.phone.contrycode !== ''
    ) {
      if (this.addOrEditBtn) {
        this.usersArray.push(this.selectedUser);
      }
      this.selectedUser = {
        name: '',
        email: '',
        password: '',
        phone: {
          number: '',
          citycode: '',
          contrycode: '',
        },
      };
      this.addOrEditBtn = true;
      this.addOrEditHeader = 'Insertar Nuevo Usuario';
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'debes rellenar todos los campos',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
    }
  }

  delete(user: User) {
    this.usersArray = this.usersArray.filter((x) => x != user);
    this.selectedUser = {
      name: '',
      email: '',
      password: '',
      phone: {
        number: '',
        citycode: '',
        contrycode: '',
      },
    };
    Swal.fire('Bien hecho!', 'Usuario eliminado!', 'success');
  }
}
