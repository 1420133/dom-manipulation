/* Task 1 */
var heading = document.getElementId('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
//Task 2 a
function addText2(){
    var task2div = document.getElementId('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = "Hello World"
    task2div.appendChild(paragraph)
}
var textBtn = document.getElementById('textBtn2a')
textBtn.addEventListener('click', addText2)

//Task 2 b
function changeBGcolor(event){
    var body = document.getElementByTagName('body')[0]
    if(event.target.innerText == "Red"){
        body.style.backgroundcolor = 'red'
    }
   if(event.target.innerText == "Green"){
        body.style.backgroundcolor = 'green'
   }
}
//Task 2 c
function redirectToGoogle(){
    window.location.assign ('https://www.google.com');
}

/* Task 4 using jQuery */
