var src = document.getElementById("src-code");
var test = document.getElementById("test-code");
var submitButton = document.getElementById("submit-button");

var url = "http://localhost:9001";
var route = "/submit";
var xhr = new XMLHttpRequest();

var submit = function() {
  xhr.open("POST", url+route, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    problemId: 0,
    userCode: src.value
  }));
}

submitButton.onclick = submit;