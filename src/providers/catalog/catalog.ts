
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

import 'firebase/database';
/*
  Generated class for the CatalogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatalogProvider {
  private  DjListRef:firebase.database.Reference;
  constructor () {

    firebase.auth().onAuthStateChanged(user=>{
    if(user){
    this.DjListRef=firebase.database().ref(`/DjProfile`)
    console.log(this.DjListRef.on)
     }
    })
     }
     
      createList(name:string):firebase.database.ThenableReference{
      return this.DjListRef.push({stageName: name})
      }
    
    
      getDjList():firebase.database.Reference{
        return this.DjListRef;
      }
}
