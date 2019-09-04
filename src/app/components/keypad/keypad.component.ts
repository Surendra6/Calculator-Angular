import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  displayValue : string = "0";

  expression : string = "";

  operations: Array<string> = ["^", "√", "%", "/", "*", "-", "+"];

  actions: Array<string> = ["clear", "decimal", "equalTo",]

  result : string = "";

  keys: Array<object> = [
    {
      name: this.operations[0],
      value: "x <sup>y</sup>",
      class: "key-symbol-btn"
    }, {
      name: this.operations[1],
      value: "&radic;",
      class: "key-symbol-btn"
    }, {
      name: this.operations[2],
      value: "%",
      class: "key-symbol-btn"
    }, {
      name: this.actions[0],
      value: "CE",
      class: "key-btn"
    }, {
      name: 7,
      value: "7",
      class: "key-btn"
    }, {
      name: 8,
      value: "8",
      class: "key-btn"
    }, {
      name: 9,
      value: "9",
      class: "key-btn"
    }, {
      name: this.operations[3],
      value: "&divide;",
      class: "key-symbol-btn"
    }, {
      name: 9,
      value: "4",
      class: "key-btn"
    }, {
      name: 5,
      value: "5",
      class: "key-btn"
    }, {
      name: 6,
      value: "6",
      class: "key-btn"
    }, {
      name: this.operations[4],
      value: "&times;",
      class: "key-symbol-btn"
    }, {
      name: 1,
      value: "1",
      class: "key-btn"
    }, {
      name: 2,
      value: "2",
      class: "key-btn"
    }, {
      name: 3,
      value: "3",
      class: "key-btn"
    }, {
      name: this.operations[5],
      value: "&minus;",
      class: "key-symbol-btn"
    }, {
      name: 0,
      value: "0",
      class: "key-btn"
    }, {
      name: this.actions[1],
      value: ".",
      class: "key-symbol-btn"
    }, {
      name: this.actions[2],
      value: "&equals;",
      class: "key-symbol-btn"
    }, {
      name: this.operations[6],
      value: "&plus;",
      class: "key-symbol-btn"
    }
  ];

  constructor() { }

  calculateResult() {    
    this.result = this.displayValue;
  }

  operatorFinder(expressionArray) {
    let lastChar = expressionArray[expressionArray.length-2];
    let operatorIndices = this.operations.findIndex(operator => operator === lastChar);

    if(operatorIndices !== -1) {
      expressionArray.splice(expressionArray.length-2, 1);
      this.displayValue = expressionArray.join("");
    }
  }

  keyClick(key) {
    if(key.name !== "equalTo") {
      this.displayValue+= key.name;
    }
    else {
      this.calculateResult();
    }

    let expressionArray = this.displayValue.split("");

    switch(key.name){      
      case "clear": 
        if(this.displayValue.length > 1){
          this.displayValue = this.displayValue.slice(0, this.displayValue.length-1);
        }
        break;      
      case 0:
        if(this.displayValue.length == 2){
          this.displayValue = "0";
        }
        break;      
      case "^":
        this.operatorFinder(expressionArray);
        break;
      case "√":
        this.operatorFinder(expressionArray);
        break;
      case "%":
        this.operatorFinder(expressionArray);
          break;
      case "/":
        this.operatorFinder(expressionArray);
        break;
      case "*":
        this.operatorFinder(expressionArray);
        break;
      case "-":
        this.operatorFinder(expressionArray);
        break;
      case "+":
        this.operatorFinder(expressionArray);
        break;
    }
    
    this.expression = `${this.displayValue}`;
    console.log(this.expression);
  }

  ngOnInit() {
  }

}
