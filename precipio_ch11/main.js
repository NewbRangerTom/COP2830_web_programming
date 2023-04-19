
function showCode(parentElement){
    var parentElementDiv = document.getElementById(parentElement);
    var exampleElement = document.querySelector('#' + parentElement + ' .example');
    // first check if section has class .open, if true close section
    if (parentElementDiv.className == 'section open') {
        var codeBlock = exampleElement.querySelector('.example-code');
        exampleElement.removeChild(codeBlock);
        document.querySelector('#' + parentElement + ' .code-show-button').value = 'Show Code';
        parentElementDiv.classList.remove('open');
    } 
    // if the section does not have class .open, create and show the section
    else {
        var text = exampleElement.innerHTML;
        var code = document.createTextNode(text);
        var codeElement = document.createElement('div');
        codeElement.appendChild(code);
        codeElement.className = 'example-code';
        exampleElement.appendChild(codeElement);
        document.querySelector('#' + parentElement + ' .code-show-button').value = 'Hide Code';
        parentElementDiv.classList.add('open');
    }
}