function InsertionSort(array){
  this.array = array;
  this.board =  document.getElementById('insertion-sort');
  this.j = 1;
  this.i = 0;
  this.key = 0;
}

InsertionSort.prototype.shift = function() {
  if (this.j >= this.array.length) {
    return;
  }

  this.sort();
  this.j++;
}

InsertionSort.prototype.sort = function() {

  this.key = this.array[this.j]
  this.board.children[this.j].style.backgroundColor = "#f66";

  this.i = this.j - 1;
  var that = this;

  var interval = setInterval(function() {
    if (that.i < 0 || that.array[that.i] < that.key) {
      clearInterval(interval);

      for (var z = 0; z < that.array.length; z++) {
        that.board.children[z].style.backgroundColor = '#ccc';  //do styling here
      }

      that.array[that.i + 1] = that.key;
      that.shift();
      return;
    }

    that.array[that.i + 1] = that.array[that.i];
    that.board.children[that.i + 1].style.backgroundColor = "#6cc";
    that.board.insertBefore(that.board.children[that.i], that.board.children[that.i + 2]);

    that.i--;
  }, 20);
}

var array = generateArrayOfRandomNumbers(150);
renderColumns(array, 'insertion-sort');

var insertionSort = new InsertionSort(array);
insertionSort.shift();
