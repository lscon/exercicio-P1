import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public pessoa = {
    matricula:'',
    nome:'',
    imagem:''

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pessoa.nome = "Lucimar da Silva";
    this.pessoa.matricula = "201221200283";
    this.pessoa.imagem = "../assets/imgs/foto.jpg";
  }

}