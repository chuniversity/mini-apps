module.exports = {
  getData: function (data) {
    if (data[data.length - 1] === ';') {
      data = data.slice(0, -1)
    }
    var newData = JSON.parse(data)
    var keys = Object.keys(newData);
    keys.pop()
    var data2 = [];
    var recurse = function (newData) {
      var temp = Object.values(newData);
      temp.pop();
      data2.push(temp)
      if (newData.children) {
        newData.children.forEach(function (child) {
          recurse(child)
        })
      }
    }
    recurse(newData)
    data2.unshift(keys)
    return data2
  },
  formatData: function (data) {
    var csv = '';
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
        if (j === data[i].length - 1) {
          csv += data[i][j]
        } else {
          csv += data[i][j] + ',';
        }
      }
      // csv += '<br>';
    }
    return csv
  }
}
