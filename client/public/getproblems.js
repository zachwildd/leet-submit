// request to get all the problems in the db
var url = "http://localhost:9001"
var route = "/problems/all"
var xhr = new XMLHttpRequest()

// called after the get-problems response is received
var displayProblems = function(problemsArr) {
  var problems = document.getElementById("problems");
  // parse list of title
  problemsArr.forEach(problem => {
    let name = problem['name']
    let id = problem['problemId']
    let a = document.createElement('a')
    a.innerHTML = name
    a.className = 'problem'
    a.href = 'problems/problem.html?' + id
    let li = document.createElement('li')
    li.classList.add('list-group-item')
    li.appendChild(a)
    problems.append(li)
  })
}

// get all problems
var getProblems = function() {
  xhr.open("GET", url+route, true)
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var problemsArr = JSON.parse(this.responseText)
      displayProblems(problemsArr)
    }
  }
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send()
}
window.onload = getProblems