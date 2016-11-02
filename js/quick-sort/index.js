function QuickSort(array) {
  this.array = array;
  this.board =  document.getElementById('quick-sort');

  this.sort(0, this.array.length - 1);
}

// Works on O(n)
// Memory O(1)
QuickSort.prototype.partition = function (from, to) {
  var i = from - 1,
      j = from,
      ref = this.array[to];

  var that = this;
  // Highlight reference element (the last one in current selection range)
  this.board.children[to].style.backgroundColor = '#999';

  var interval = setInterval(function() {
    if (that.array[j] <= ref) {
      var temp = that.array[i + 1];
      var major = that.board.children[i + 1];
      that.array[i + 1] = that.array[j];
      var minor = that.board.children[j];

      that.board.insertBefore(minor, that.board.children[i + 1]);
      that.board.children[i + 1].style.backgroundColor = "#6cc";

      that.array[j] = temp;

      that.board.insertBefore(major, that.board.children[j + 1]);
      that.board.children[j + 1].style.backgroundColor = "#f66";
      i++;
    }

    if (j == to - 1) {
      clearInterval(interval);

      that.array[to] = that.array[i + 1];
      that.board.insertBefore(
        that.board.children[i + 1],
        that.board.children[to]
      );

      that.array[i + 1] = ref;
      that.board.insertBefore(
        that.board.children[to],
        that.board.children[i + 1]
      );

      for (var z = 0; z <= to; z++) {
        that.board.children[z].style.backgroundColor = '#ccc';  //do styling here
      }

      that.sort(from, i);
      that.sort(i + 1, to);
    }

    j++;
  }, 20);
}

QuickSort.prototype.sort = function(p, r) {
  if (p < r) {
    this.partition(p, r);
  }
}

var array = generateArrayOfRandomNumbers(150);
renderColumns(array, 'quick-sort');

var quickSort = new QuickSort(array);
quickSort.sort();
