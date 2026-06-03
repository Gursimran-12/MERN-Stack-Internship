// Task (Callback) — "Greet With Callback"
// Create a function greet(name, callback)
// Inside, call the callback and pass the name

function greet(name, callback) {
  callback(name);
}

function myCallback(n) {
  console.log("Hello, " + n + "!");
}

greet("Ram", myCallback);


/* TASK 1: The Simple Success
1. Create a Promise called 'simplePromise'.
2. Inside, use resolve("Success!").
3. Consume the promise and log the message.
*/

const simplePromise = new Promise((resolve) => {
  resolve("Success!");
});

simplePromise.then((msg) => console.log(msg));

/* TASK 2: The Conditional Promise
1. Create a variable `isLogged = true`.
2. Create a Promise.
3. If `isLogged` is true, resolve("User is logged in").
4. If false, reject("User not logged in").
5. Test it by changing the variable.
*/

let isLogged = true;

const loginPromise = new Promise((resolve, reject) => {
  if (isLogged) resolve("User is logged in");
  else reject("User not logged in");
});

loginPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

  /* TASK 3: The Delay Function (Very Common!)
1. Create a function `wait(ms)` that returns a Promise.
2. Inside, use `setTimeout` to resolve after `ms` milliseconds.
3. Usage: wait(2000).then(() => console.log("Waited 2 seconds!"));
*/

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(2000).then(() => console.log("Waited 2 seconds!"));

/* TASK 4: The Dice Roll
1. Create a Promise that generates a random number (1-6).
2. If the number is 6, resolve("Jackpot! 🎲").
3. If the number is 1-5, reject("You lost. Rolled a " + number).
4. Handle both cases.
*/

const dicePromise = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 6) + 1;

  if (num === 6) resolve("Jackpot!");
  else reject("You lost. Rolled a " + num);
});

dicePromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

/* TASK 5: The Morning Routine (Chaining)
1. Create 3 functions that return Promises:
   - `shower()` -> Resolves "Showered!" after 2s.
   - `dress()` -> Resolves "Dressed!" after 2s.
   - `eatBreakfast()` -> Resolves "Ate food!" after 3s.
2. Chain them: shower -> .then(dress) -> .then(eat) -> .then(log "Ready to go!").
*/

function shower() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Showered!"), 2000);
  });
}

function dress() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dressed!"), 2000);
  });
}

function eatBreakfast() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ate food!"), 3000);
  });
}

shower()
  .then((msg) => {
    console.log(msg);
    return dress();
  })
  .then((msg) => {
    console.log(msg);
    return eatBreakfast();
  })
  .then((msg) => {
    console.log(msg);
    console.log("Ready to go!");
  });

  /* TASK 6: The Calculator Chain (Passing Data)
1. Create a Promise that resolves with the number 5.
2. .then() -> multiply by 2 (should return 10).
3. .then() -> add 20 (should return 30).
4. .then() -> log the final result.
*/

Promise.resolve(5)
  .then((n) => n * 2)  
  .then((n) => n + 20)  
  .then((final) => console.log(final)); 


/* TASK 7: The File Downloader
1. Create a function `downloadFile(url)`.
2. Resolve "Downloaded [url]" after 3s.
3. Create a function `compressFile(file)`.
4. Resolve "Compressed [file]" after 2s.
5. Chain them: download -> compress -> log "Done!".
*/

function downloadFile(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Downloaded " + url), 3000);
  });
}

function compressFile(file) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Compressed " + file), 2000);
  });
}

downloadFile("file.jpg")
  .then((result) => {
    console.log(result);
    return compressFile(result);
  })
  .then((msg) => {
    console.log(msg);
    console.log("Done!");
  });

//   Task (Async–Await) — "Fetch User After Delay"
// Create a function wait(ms) returning a Promise
// Create an async function getUser()
// Inside getUser, wait for 2 seconds
// Then return { name: "Simran", age: 20 }
// Log the result using async–await

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUser() {
  console.log("Fetching user...");
  await wait(2000);
  return { name: "Simran", age: 20 };
}

async function run() {
  const user = await getUser();
  console.log(user);
}

run();