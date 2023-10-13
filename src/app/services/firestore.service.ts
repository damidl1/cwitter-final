import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { FireappService } from './fireapp.service';
import { OurUser } from '../model/our-user';
import { Cwit } from '../model/cwit';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  db: Firestore;

  constructor(private fireApp: FireappService) {
    this.db = getFirestore(this.fireApp.app);
  }

  getCwits() {
    const cwits = collection(this.db, 'cwitt');
    return getDocs(cwits).then((snap) =>
      snap.docs.map((doc) => {
        return {
          text: doc.data()['text'],
          url: doc.data()['url'],
          author: doc.data()['author'],
          authorName: doc.data()['authorName'],
          creationTime: doc.data()['creationTime'].toDate(),
        };
      })
    );
  }

  postOurUser(ourUser: OurUser, uid: string) {
    const docUrl = doc(this.db, 'user', uid);
    return setDoc(docUrl, ourUser);
  }

  getOurUser(uid: string) {
    const docUrl = doc(this.db, 'user', uid);
    return getDoc(docUrl);
  }

  // async loadUserCwits(uid: string):Promise<Cwit[]> {
  //     console.log(uid)
  //     const q = query(collection(this.db, 'cwitt'), where('author', '==', uid ));
  //     const querySnapshot = await getDocs(q);
  //     console.log(querySnapshot.docs)
  //     querySnapshot.forEach((doc) => {
  //     console.log(doc.id, '=>', doc.data())
  //   })
  // }

  async loadUserCwits(uid: string) {
    const q = query(collection(this.db, 'cwitt'), where('author', '==', uid));
    const querySnapshot = await getDocs(q);
    const cwits = querySnapshot.docs.map((doc) => {
      return {
        text: doc.data()['text'],
        url: doc.data()['url'],
        author: doc.data()['author'],
        authorName: doc.data()['authorName'],
        creationTime: doc.data()['creationTime'].toDate(),
      };
    });
    return cwits;
  }

  postCwit(cwit: Cwit, uid: string) {
    console.log('firestore cwit')
    // const docUrl = doc(this.db, 'user', uid);
    // return setDoc(docUrl, ourUser);
  }
}
