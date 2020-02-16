var src = document.getElementById("src-code");
var test = document.getElementById("test-code");
var submitButton = document.getElementById("submit-button");
const refreshButton = document.getElementById('test-button')

var url = "http://localhost:9001";
var route = "/submit";
var xhr = new XMLHttpRequest();

var submit = function() {
  var problemId = window.location.href.split("?")[1]
  xhr.open("POST", url+route, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (this.status === 200) {
      let res = JSON.parse(this.responseText);
      let staus = res.status;
      let outcome = res.outcome;
      console.log(outcome); // "fail" if tests fail, "success" otherwise
      test.innerText = res.output;
      console.log(res)
    } else {
      console.error(`Error: ${this.status} - ${this.responseText || '(No Response Text)'}`)
    }
  }
  xhr.send(JSON.stringify({
    problemId,
    userCode: src.value
  }));
}

function refreshTests() {
  var id = window.location.href.split("?")[1]
  var url = "http://localhost:9001";
  var route = "/problems?id=" + id;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url+route, true);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var problem = JSON.parse(this.responseText);
      let testCodeEle = document.getElementById('test-code')
      let { testCode = '' } = problem
      testCodeEle.innerText = testCode

      var test = ace.edit("test-code");
      test.setTheme("ace/theme/monokai");
      test.session.setMode("ace/mode/javascript");
    }
  };
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send()
}

submitButton.onclick = submit;
refreshButton.onclick = refreshTests;