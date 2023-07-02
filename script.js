function appendToScreen(value) {
    document.getElementById('result').value += value;
  }
  
  function clearScreen() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }

  function calculateSquare() {
    var result = eval(document.getElementById('result').value);
    var square = Math.pow(result, 2);
    document.getElementById('result').value = square;
  }
  
  function calculateCube() {
    var result = eval(document.getElementById('result').value);
    var cube = Math.pow(result, 3);
    document.getElementById('result').value = cube;
  }
  
  function calculateSquareRoot() {
    var result = eval(document.getElementById('result').value);
    var squareRoot = Math.sqrt(result);
    document.getElementById('result').value = squareRoot;
  }
  