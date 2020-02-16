var src = document.getElementById("src-code");
var test = document.getElementById("test-code");
var submitButton = document.getElementById("submit-button");

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

submitButton.onclick = submit;