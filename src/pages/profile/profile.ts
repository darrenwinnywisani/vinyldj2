import { HomePage } from './../home/home';
import { ProfileProvider } from './../../providers/profile/profile';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


 
  userProfile:any;
  email:string;
  firstName:string;
  lastName:string;
  Location:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private authPROV:AuthProvider,private profilePROV:ProfileProvider ) {
    this.userProfile=this.navParams.get('userProfile');
  }

  
  ionViewCanEnter(){
    this.authPROV.getUserProfile().off;
  }
  ionViewDidLoad() {
    this.authPROV.getUserProfile().on('value',userprofileSnapShot=>{
      this.userProfile=userprofileSnapShot.val();
      this.email=userprofileSnapShot.val().email;
      this.firstName=userprofileSnapShot.val().firstName;
      this.lastName=userprofileSnapShot.val().lastName;
      this. Location=userprofileSnapShot.val().Location;
      
    })
  }

  updateEmail(){

    const alert:Alert=this.alertCtrl.create({
  
      inputs:[{
        name:'oldEmail',
        placeholder:'enter old email',
     type:'email'
      },{
        name:'newEmail',
        placeholder:'enter new email',
        type:'email'
    
      }],
      buttons:[{
        text:'cancel',
      },{
        text:'save',
        handler:data =>{
          this.profilePROV.updateEmail(data.newEmail,data.oldEmail)
          .catch(error=>{
            console.log('error message from catch',error.message)
           let newAlert:Alert=this.alertCtrl.create({
             message:error.message
           })
           newAlert.present(); 
          })
        }
      }],
     
    })
    alert.present()
    }
    goback(){
    this.navCtrl.setRoot(HomePage);
   }

}
