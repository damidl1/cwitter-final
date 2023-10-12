import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase-config';
import { FirestoreService } from './services/firestore.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'cwitter';

}
