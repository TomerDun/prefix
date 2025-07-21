import { color } from "./utils/colorText.js";

export function displayWelcome() {
    console.log(color('=== Welcome to wordPredictor© ===', null, 'rainbow'));
    console.log(color("Enter 'help' to see commands\n\n"));        
}

function handleCommands(command) {
    switch (command) {
        case 'add': 
    }
}