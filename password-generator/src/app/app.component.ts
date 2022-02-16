import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, } from '@angular/forms';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    options: FormGroup;
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');

    constructor(fb: FormBuilder) {
        this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
        });
    }

    passwordLength: number = 0;
    includeLetters: boolean = false;
    includeNumbers: boolean = false;
    includeSymbols: boolean = false;
    generatedPassword = '';

    modifyLength(value: string){
        const parsedValue = parseInt(value);

        if(!isNaN(parsedValue)){
            this.passwordLength = parsedValue;
        }
    }
    modifyLetters(){
        this.includeLetters = !this.includeLetters;
    }
    modifyNumbers(){
        this.includeNumbers = !this.includeNumbers;
    }
    modifySymbols(){
        this.includeSymbols = !this.includeSymbols;
    }

    createPassword(){
        const numbers = '1234567890';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const symbols = '±!@#$%^&*()_+-=£–≠';

        let validChars = '';

        if(this.includeLetters){
            validChars += letters;
        }
        if(this.includeNumbers){
            validChars += numbers;
        }
        if(this.includeSymbols){
            validChars += symbols;
        }

        this.generatedPassword = '';

        for(let i = 0;i < this.passwordLength; i++){
            const index = Math.floor(Math.random()*validChars.length);
            this.generatedPassword += validChars[index];
            console.log(index);
        }
        console.log(this.generatedPassword);

        console.log(`values:
        Letters: ${this.includeLetters}
        Numbers: ${this.includeNumbers}
        Symbols: ${this.includeSymbols}
        PasswordLength: ${this.passwordLength}`);
    }
    getPassword(){
    }

}
