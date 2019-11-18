import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }
  usuario:Usuario={};

  

  @ViewChild('frmRegister',{static:false}) frmRegister:Form;

  ngOnInit() {
  }

}
