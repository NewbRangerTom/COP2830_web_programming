
function showCode(parentElement){
    var parentElementDiv = document.getElementById(parentElement);
    var exampleElement = document.querySelector('#' + parentElement + ' .example');

    if (parentElementDiv.className == 'section open') {
        var codeBlock = exampleElement.querySelector('.example-code');
        exampleElement.removeChild(codeBlock);
        document.querySelector('#' + parentElement + ' .code-show-button').value = 'Show Code';
        parentElementDiv.classList.remove('open');
    } else {
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