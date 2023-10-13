import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Cwit } from 'src/app/model/cwit';

@Component({
  selector: 'app-user-cwit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-cwit.component.html',
  styleUrls: ['./user-cwit.component.scss']
})
export class UserCwitComponent {

     mynewCwit: Cwit = {
      text: "ilmiotesto",
      url: 'lamiaurl',
      author:'---',
      authorName: '---',
      creationTime: new Date()
    }

  newCwitForm= this.fb.group({
    text: ['', [Validators.required]],
    url: ['', [Validators.required]],
    // author: [''],
    // authorName: [''],
    creationTime: new Date(),
  })

  constructor(private fb:FormBuilder, private fireStore : FirestoreService ){}

  onSubmit(){
    console.log('p');

    this.fireStore.postCwit(this.mynewCwit,"uid");

  }
}
