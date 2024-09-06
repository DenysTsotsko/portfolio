const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');


inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        const command = inputField.value; 
        outputDiv.innerHTML += `<div>bash-3.2$ ${command}</div>`; 
        handleCommand(command); // Call the function to handle the command
        inputField.value = ''; 
    }
});

// Function to handle commands
function handleCommand(command) {
    if (command.toLowerCase() === 'about'){
        outputDiv.innerHTML += `<div>I am a passionate developer learning JavaScript and building cool projects!</div>`;
    } else if (command.toLowerCase() === 'ls -help'){
        outputDiv.innerHTML += `<div>about\t    projects\tgithub\neducation   linkedin\tclear</div>`;
    }else if (command.toLowerCase() === 'clear'){
        outputDiv.innerHTML = '';
    }else {
        outputDiv.innerHTML += `<div>Command not recognized: ${command}. Enter ls -help to check commands</div>`;
    } 
}
