// Generate random numbers
function generateArrayOfRandomNumbers(amount) {
  var array = [];
  while (array.length < amount) {
    var randomnumber = Math.ceil(Math.random() * 100);
      array[array.length] = randomnumber;
  }

  return array;
}

// Convert array of different numers into a list of div elemens with the
// corresponding height to those numers and render it
function renderColumns(array, elementId) {
  var fragment = document.createDocumentFragment();
  array.forEach(function(item, i) {
    var div = document.createElement('div');
    div.style.height = item + "px";
    fragment.appendChild(div);
  });

  document.getElementById(elementId).appendChild(fragment);
}
