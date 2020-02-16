const converter = new showdown.Converter();
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

// Display the problem information in the editor
var displayProblem = function(problemdata) {
  console.log(problemdata)
  const TITLE = 'problem-title'
  const PROBLEM_TEXT = 'problem-text'
  const USER_CODE = 'src-code'
  const TEST_CODE = 'test-code'
  // element that we will add the problem under
  let problemNameEle = document.getElementById(TITLE)
  let problemTextEle = document.getElementById(PROBLEM_TEXT)
  let userCodeEle = document.getElementById(USER_CODE)
  let testCodeEle = document.getElementById(TEST_CODE)

  // 
  let {
    name = 'Anonymous Problem',
    problemId,
    text = 'No Description Available',
    defaultCode = '',
    testCode = ''
  } = problemdata

  text = converter.makeHtml(text);
  
  problemNameEle.innerText = name
  problemTextEle.innerHTML = text
  userCodeEle.innerHTML = defaultCode
  testCodeEle.innerHTML = testCode 
  setupEditor();
}

function setupEditor() {
  var editor = ace.edit("src-code");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");

  var test = ace.edit("test-code");
  test.setTheme("ace/theme/monokai");
  test.session.setMode("ace/mode/javascript");
}

window.onload = getProblem