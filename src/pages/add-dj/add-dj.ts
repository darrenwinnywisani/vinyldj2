import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {Alert, IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import 'firebase/database';
import 'firebase/auth';
import { AddDjProvider } from '../../providers/add-dj/add-dj';
/**
 * Generated class for the AddDjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-dj',
  templateUrl: 'add-dj.html',
})
export class AddDjPage {
  stageName:string;
  email:string;
  contact:string;
  desc:string;
  Location:string;
  private load:Loading;

  townships:string;
  
  town=['Alice','Bellville','Benoni','Bethlehem','Bloemfontein','Boksburg','Brakpan' ,'Butterworth','Cape Town',
  'Carletonville','Constantia','Durban','East London','Emalahleni','Empangeni','Germiston','George','Giyani',
  'Graaff-Reinet','Grahamstown','Hopefield','Jagersfontein','Johannesburg','King William’s Town','Kimberley',
  'Klerksdorp','Kroonstad','Krugersdorp','Kuruman','Ladysmith','Lebowakgomo','Mahikeng','Mmabatho','Mthatha',
  'Musina','Nelspruit','Newcastle','Odendaalsrus','Oudtshoorn','Paarl','Parys','Phuthaditjhaba','Pinetown',
  'Pietermaritzburg','Polokwane','Port Elizabeth','Port Nolloth','Potchefstroom','Queenstown','Randburg',
  'Randfontein','Roodepoort','Rustenburg','Sasolburg','Secunda','Seshego','Sibasa','Simon’s Town','Soweto',
  'Springs','Stellenbosch','Swellendam','Thabazimbi','Uitenhage','Ulundi','Umlazi','Vanderbijlpark','Vereeniging',
  'Virginia','Welkom','Worcester','Zwelitsha', ];

  constructor(public navCtrl: NavController, private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private djPROV:AddDjProvider) {

  }

  
  updateDjD(email,stageName,desc,contact,Location){
      this.djPROV.updateNames(this.email,this.stageName,this.desc,this.contact,this.Location)
     
  }

  SaveUserData(){
  if(this.email === '' || this.stageName==='' || this.desc==='' || this.contact==='' || this.Location==='' ){
  const alertName:Alert =this.alertCtrl.create({
  subTitle:'Please provide your names in full',
    buttons:[{
    text:'Cancel',
    role:'cancel'
          },
          {
     text:'ok',
    handler:data=>{
              
            }
          }]
        })
  alertName.present();
    }
    else{
    this.djPROV.updateNames(this.email,this.stageName,this.desc,this.contact,this.Location);
    this.navCtrl.push('ImagePage');
    }
}

goback(){
  this.navCtrl.setRoot(HomePage);
 }

}