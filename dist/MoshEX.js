"use strict";
class stack {
    constructor() {
        this.count = 0;
        this.arr = [];
    }
    Count() {
        console.log(this.count);
    }
    push(val) {
        this.arr[this.count] = val;
        this.count++;
    }
    pop() {
        if (this.count >= 0) {
            this.count--;
            this.arr[this.count];
        }
        else
            throw new Error("Stack is empty");
    }
    peek() {
        console.log(this.arr[this.count - 1]);
    }
}
//# sourceMappingURL=MoshEX.js.map