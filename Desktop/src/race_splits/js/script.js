let number_of_splits = 0;
add_split()
add_split()
function split_HTML(){

  distance = "<input id = 'distance1' min=0 type='number' placeholder='Distance From Start'>"
  time = "<input id = 'time1' min=0 placeholder='Time From Start' type='number' />"
}

function add_split(){
    number_of_splits += +1
    console.log(number_of_splits)
    var split_div= document.getElementById("base_splits");
    var newdiv = document.createElement("div");
    var distance_input = document.createElement("input");
    var time_input = document.createElement("input");
    var remove_split = document.createElement("input");
    var line_break = document.createElement("br");

    newdiv.setAttribute("id", "split_number" + number_of_splits);

    distance_input.setAttribute("type", "number");
    distance_input.setAttribute("placeholder", "Distance From Start");
    distance_input.setAttribute("id", "distance" + number_of_splits);
    time_input.setAttribute("type", "number");
    time_input.setAttribute("placeholder", "Split (seconds)");
    time_input.setAttribute("id", "time" + number_of_splits);
    time_input.setAttribute("name", "time[]");
    remove_split.setAttribute("type", "submit");
    remove_split.setAttribute("value", "-");
    remove_split.setAttribute("onclick", "remove_split(" + number_of_splits + ")");
    newdiv.appendChild(distance_input);
    newdiv.appendChild(time_input);
    newdiv.appendChild(remove_split);
    newdiv.appendChild(line_break);
    split_div.appendChild(newdiv);
}

function remove_split(i) {
  number_of_splits--
  console.log(i)
  var elem = document.getElementById("split_number" + i);
  return elem.parentNode.removeChild(elem);
}

function calculate() {
  var input_array = document.getElementsByName('time[]')
  console.log(input_array)
  let sum = 0
  for (var i = 0; i<input_array.length; i++) {
    var p = input_array[i].value;
    console.log(p)
    sum += +p;
  }
  document.getElementById("result").innerHTML = sum;
  console.log(sum)
  return sum
}
