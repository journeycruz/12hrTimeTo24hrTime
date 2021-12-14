const today = new Date();
let hour = today.getHours();
if (hour < 10) {
  hour = "0" + hour;
}
let min = today.getMinutes();
if (min < 10) {
  min = "0" + min;
}
let second = today.getSeconds();
if (second < 10) {
  second = "0" + second;
}
let ampm = 'AM';
if (hour > 12) {
    hour -= 12;
    ampm = 'PM';
}
let convertedTime = hour + ":" + min + ":" + second + ' ' + ampm;

export default convertedTime;