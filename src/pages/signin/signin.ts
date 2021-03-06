import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';
import { SignupPage } from './../signup/signup';
import { ResetpasswordPage } from './../resetpassword/resetpassword';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController, LoadingController ,Loading} from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  private load:Loading;

  email:string;
  password:string;
  
  userForm:FormGroup;

    constructor(public navCtrl: NavController,
       private alertCtrl:AlertController,
       private loadingCtrl:LoadingController, 
       private authPROV:AuthProvider,public FB:FormBuilder ) {

        this.userForm= this.FB.group({
  
          email:['',Validators.compose([Validators.required,
          ])],

         password:['',Validators.compose([Validators.required,
         Validators.minLength(6)
          ])]

    })

        
    }
  
ionViewDidLoad() {
  console.log('ionViewDidLoad  SiginPage');
}
goToSignUp():void {
  this.navCtrl.setRoot(SignupPage);
} 

signIn(){
  if(!this.userForm.valid){
  console.log(this.userForm.valid)
  }else{
    this.authPROV.signIn(this.userForm.value.email,this.userForm.value.password)
    .then(authData=>{
      this.load.dismiss().then(()=>{
    this.navCtrl.setRoot(HomePage);
      })
    },error=>{
      this.load.dismiss().then(()=>{
        const alert :Alert = this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role: 'cancel'}]
        })
        alert.present();
      })
    })
    this.load=this.loadingCtrl.create();
    this.load.present()
    }
  }
 

  forgotPassword(){
      this.navCtrl.push(ResetpasswordPage);
    
  } 
  
  goback(){
    this.navCtrl.setRoot(HomePage);
   }

}
