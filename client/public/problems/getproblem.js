var displayProblem = function(problemdata) {
  console.log(problemdata)
  // element that we will add the problem under
  let problemNameEle = document.getElementById('problem-title')
  let userCodeEle = document.getElementById('src-code')
  let testCodeEle = document.getElementById('test-code')

  let name = problemdata['name']
  let userCode = problemdata['userCode']
  let testCode = problemdata['testCode']
  
  problemNameEle.innerHTML = name
  userCodeEle.innerHTML = userCode
  testCodeEle.innerHTML = testCode 
}

// get problem with id in window
var getProblem = function(id) {
  var id = window.location.href.split("?")[1]
  var url = "http://localhost:9001";
  var route = "/problems?id=" + id;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url+route, true);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var problem = JSON.parse(this.responseText);
      displayProblem(problem);
    }
  };
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}

window.onload = getProblem