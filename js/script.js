let number_of_splits = 0;
add_split()
add_split()

function add_split(){
    number_of_splits += +1
    var split_div= document.getElementById("base_splits");
    var newdiv = document.createElement("div");
    var distance_input = document.createElement("input");
    var time_input = document.createElement("input");
    var remove_split = document.createElement("input");
    var line_break = document.createElement("br");

    newdiv.setAttribute("id", "split_number" + number_of_splits);

    distance_input.setAttribute("type", "number");
    distance_input.setAttribute("placeholder", "Distance (km) From Start");
    distance_input.setAttribute("id", "distance " + number_of_splits);
    distance_input.setAttribute("name", "distance[]");
    time_input.setAttribute("type", "number");
    time_input.setAttribute("placeholder", "Time to reach split (seconds)");
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
  var elem = document.getElementById("split_number" + i);
  return elem.parentNode.removeChild(elem);
}

function calculate() {
  // May want to change how this is input
  var mile_time = document.getElementById("mile_time").value
  var factor = mile_time * 2.5
  var time_splits = document.getElementsByName('time[]')
  var distance_splits = document.getElementsByName('distance[]')
  let total_time = time_splits[time_splits.length - 1].value
  let total_distance = distance_splits[time_splits.length - 1].value
  let total_effective_distace = 0
  let total_pace = total_time/ total_distance
  for (var i = 0; i<time_splits.length; i++) {
    var pace_for_split = 0
    var split_distance = 0
    if (i == 0) {
      pace_for_split = time_splits[0].value/distance_splits[0].value
      split_distance = distance_splits[0].value
    } else {
      split_distance = distance_splits[i].value - distance_splits[i-1].value
      pace_for_split = (time_splits[i].value - time_splits[i-1].value)/split_distance
    }
    var difference_in_pace = total_pace - pace_for_split
    var effective_split_distance = split_distance * Math.pow(2, difference_in_pace/factor)

    total_effective_distace += effective_split_distance
  }
  var pace_difference = factor * Math.log2(total_effective_distace/total_distance)
  var new_time = (total_pace - pace_difference) * total_distance

  document.getElementById("result").innerHTML = new_time;
}
