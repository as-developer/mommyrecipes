import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit { 
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC_VB_rUbNuOb8UsS0Vlez56y9ZTIQtTl8",
      authDomain: "mommy-kitchen.firebaseapp.com"
    });
  }  
}
