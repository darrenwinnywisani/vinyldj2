import { BookingPage } from './../pages/booking/booking';
import { ViewDetailsPage } from './../pages/view-details/view-details';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';
import { ProfilePage } from './../pages/profile/profile';
import { SigninPage } from './../pages/signin/signin';
import { OnboardingPage } from './../pages/onboarding/onboarding';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { AddDjProvider } from '../providers/add-dj/add-dj';
import { SignupPage } from '../pages/signup/signup';
import { AddDjPage } from '../pages/add-dj/add-dj';
import * as firebase from 'firebase';
import { CatalogProvider } from '../providers/catalog/catalog';
import { BookingProvider } from '../providers/booking/booking';
import {RecaptchaModule} from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';


const config = {
  apiKey: "AIzaSyB6wFnNa8EY1IRpags_2tUXbo9qbe2HPx0",
    authDomain: "vinyl-8fb36.firebaseapp.com",
    databaseURL: "https://vinyl-8fb36.firebaseio.com",
    projectId: "vinyl-8fb36",
    storageBucket: "vinyl-8fb36.appspot.com",
    messagingSenderId: "973224201180"
};

firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnboardingPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    ResetpasswordPage,
    AddDjPage,
    ViewDetailsPage,
    BookingPage
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    RecaptchaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OnboardingPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    ResetpasswordPage,
    AddDjPage,
    ViewDetailsPage,
    BookingPage,


     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProfileProvider,
    AddDjProvider,
    CatalogProvider,
    BookingProvider,
    BookingProvider
  ]
})
export class AppModule {}
