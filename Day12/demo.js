function externalAlert(){
    alert('Hiii');
}
function externalConfirm(){
    if (confirm("External confirm??")) {
        alert('Yes');
    } else {
        alert('No');
    }
}
function externalPrompt(){
    var name = prompt("Enter external prompt value");
    alert('Hii ' + name);
    document.write(name);
    console.log(name);
    console.error(name);
}