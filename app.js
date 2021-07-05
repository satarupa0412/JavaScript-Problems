
//First Problem

function birdCount(arr){
  let largest = 1;
  let count = largest;
  let type = [];

  arr.sort();

  for(let i = 0; i < arr.length; i++){
      largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
      if(largest > count){
          count = largest;
          type[0] = arr[i];
      }
  }
  let smallest = 10000;
  let smallcount = smallest;
  for(let i = 0; i < arr.length; i++){
    smallest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
    if(smallest < smallcount){
        smallcount = smallest;
        type[1] = arr[i];
    }
  } 
  return type;
}


//Second Problem

function format_time_and_display(hr, min, sec) {
    if(parseInt(hr) < 10) hr = '0' + parseInt(hr)
    if(parseInt(min) < 10) min = '0' + parseInt(min)
    if(parseInt(sec) < 10) sec = '0' + parseInt(sec)
    return (`${hr}:${min}:${sec}`)
}

function f12to24hr(input_time) {
    let AM_PM = input_time[input_time.length - 2] + input_time[input_time.length - 1]
    let hrminsec = input_time.substring(0, input_time.length - 2).split(':') // 12:01:25 AM
    let hr = hrminsec[0], min = hrminsec[1], sec = hrminsec[2], clonehr = hr
    sec = parseInt(sec) + 45
    if(sec > 60) {
        sec = sec - 60
        min = parseInt(min) + 1
    }
    min = parseInt(min) + 45
    if(min > 60) {
        min = min - 60
        hr = parseInt(hr) + 1
    }
    if(AM_PM === 'AM') {
        if(hr === "12") hr = "00";
        console.log(format_time_and_display(hr, min, sec))
    } else {
        if(clonehr !== "12") hr = parseInt(hr) + 12;
        console.log(format_time_and_display(hr, min, sec))
    }
}