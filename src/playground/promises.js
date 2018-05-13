const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Mike',
    //   age: 28
    // });
    reject('Something went wrong!');
  }, 5000); 
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return 'some data'
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');