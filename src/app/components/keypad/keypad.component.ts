import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  numericals : Array<number> = [0,1];

  operations: Array<string> = ["exponentiation", "root", "percentage", "clear", "division", 
  "multiplication", "subtraction", "decimal", "equalTo", "addition" ];

  result : string = "";

  keys: Array<object> = [{
    name: "exponentiation",
    value: "x <sup>y</sup>",
    class: "key-symbol-btn"
  }, {
    name: "root",
    value: "&radic;",
    class: "key-symbol-btn"
  }, {
    name: "percentage",
    value: "%",
    class: "key-symbol-btn"
  }, {
    name: "clear",
    value: "CE",
    class: "key-btn"
  }, {
    name: "7",
    value: "7",
    class: "key-btn"
  }, {
    name: "8",
    value: "8",
    class: "key-btn"
  }, {
    name: "9",
    value: "9",
    class: "key-btn"
  }, {
    name: "division",
    value: "&divide;",
    class: "key-symbol-btn"
  }, {
    name: "4",
    value: "4",
    class: "key-btn"
  }, {
    name: "5",
    value: "5",
    class: "key-btn"
  }, {
    name: "6",
    value: "6",
    class: "key-btn"
  }, {
    name: "multiplication",
    value: "&times;",
    class: "key-symbol-btn"
  }, {
    name: "1",
    value: "1",
    class: "key-btn"
  }, {
    name: "2",
    value: "2",
    class: "key-btn"
  }, {
    name: "3",
    value: "3",
    class: "key-btn"
  }, {
    name: "subtraction",
    value: "&minus;",
    class: "key-symbol-btn"
  }, {
    name: "0",
    value: "0",
    class: "key-btn"
  }, {
    name: "decimal",
    value: ".",
    class: "key-symbol-btn"
  }, {
    name: "equalTo",
    value: "&equals;",
    class: "key-symbol-btn"
  }, {
    name: "addition",
    value: "&plus;",
    class: "key-symbol-btn"
  }];

  constructor() { }

  keyClick(key) {
    console.log(key.name);
    switch(key.name){
      //case: 
    }
  }

  ngOnInit() {
  }

}
