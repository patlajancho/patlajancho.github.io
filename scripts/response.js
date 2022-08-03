
var today = new Date();
var time = today.getHours();
var greet;

if (time >= 20) {
  greet = '(Current Response time estimated: 10-15 hrs)';
} else if (time >= 18) {
  greet = '(Current Response time estimated: 1-3 hrs)';
} else if (time >= 16) {
  greet = '(Current Response time estimated: 3-5 hrs)';
} else if (time >= 14) {
  greet = '(Current Response time estimated: 1-3 hrs)';
} else if (time >= 12) {
  greet = '(Current Response time estimated: 3-5 hrs)';
} else if (time >= 10) {
  greet = '(Current Response time estimated: 5-7 hrs)';
} else if (time >= 8) {
  greet = '(Current Response time estimated: 1-3 hrs)';
} else if (time >= 6) {
  greet = '(Current Response time estimated: 3-5 hrs)';
} else if (time >= 4) {
  greet = '(Current Response time estimated: 5-7 hrs)';
} else if (time >= 0) {
  greet = '(Current Response time estimated: 7-12 hrs)';
} else {
  greet = '(Current Response time estimated: 5 hrs)';
}

var show = document.getElementById('message');
show.textContent = greet;


/// <path d="M5.5 17.5c-0.128 0-0.256-0.049-0.354-0.146l-5-5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4.646 4.646 13.646-13.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-14 14c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>
/// <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M5.5 17.5c-0.128 0-0.256-0.049-0.354-0.146l-5-5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4.646 4.646 13.646-13.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-14 14c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg>
