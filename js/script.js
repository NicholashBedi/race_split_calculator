let number_of_splits = 0;

function addInput(counter){

    return false
}

function display_split_inputs() {
  var number_of_splits = document.getElementById('number_of_splits').value;
  console.log(number_of_splits)
  for (var i = 0; i < number_of_splits; i++) {
    console.log(i)
    var newdiv = document.createElement('div');
    newdiv.id = i;
    newdiv.innerHTML = "Entry " + (i + 1) + " <br><input type='text' name='array[]'> ";
    document.body.appendChild(newdiv);
  }
  var newdiv = document.createElement('div');
  newdiv.id = i;
  newdiv.innerHTML = "<input type='submit' onclick='add_numbers()'> ";
  document.body.appendChild(newdiv);
  return false
}

function add_numbers() {
  var input_array = document.getElementsByName('array[]')
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
