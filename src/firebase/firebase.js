import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';
 
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses2 = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses2.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses2);
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses2 = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses2.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses2);
//   });

// expenses.map((expense) => database.ref('expenses').push(expense));

// database.ref('notes/-LCIhNxbLOgsVTiC_1t9').update({
//   body: 'Eat'
// });

// database.ref('notes').push({
//   title: 'To do',
//   body: 'Go for run'
// });

// const firebaseNotes = {
//   notes: {
//     sdfnsdif: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     gskefgnesk: {
//       title: 'Second note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '1276',
//   title: 'Second note',
//   body: 'This is my note'
// }];

// database.ref().set(notes);

// database.ref().on('value', (snapshot) => {
//   const person = snapshot.val();
//   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, () => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('name').set('John');
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(25);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(() => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Mike',
//   age: 28,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Melbounre',
//     country: 'Aus'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data updated.');
// }).catch((e) => {
//   console.log('Data update failed.', e);
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch(() => {
//     console.log('Did not remove data', e);
//   });


