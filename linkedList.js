import Node from "./node.js";

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert last node
    append(value){
        let node = new Node(value),
            current;

        if(!this.head){
            this.head = node;
        } else {
            current = this.head;

            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = node;
        }

        this.size++
    }

    // Insert first node
    prepend(value){
        this.head = new Node(value, this.head)
        
        this.size++
    }

    //returns the last node in the list
    tail(){
        
        let current = this.head;

        while (current.nextNode) {
            current = current.nextNode;
        }

        return console.log(current)
    }

    //returns the node at the given index
    at(index){
        let current = this.head;
        let count = 0;

        if(index >= this.size){
            return console.log(`An item at that index does not exist`)
        } else {
            while (current) {
          
                if (count == index) {
                    return console.log(current.value);
                }
    
                count++;
                
                current = current.nextNode;
            }
        }
    }

    //removes the last element from the list
    pop(){
        if(this.head == null){
            console.log(`There is no linked list.`);
        } else {
            let current = this.head;

            while (current.nextNode.nextNode) {
                current = current.nextNode;
            }
    
            current.nextNode = null;
    
            this.size--
        }
    }

    //if the value is in the list, returns true
    contains(value){
        if(this.head == null){
            console.log("There is no linked list.")
        } else{
            let current = this.head;

            while(current){
                if(current.value == value){
                    return console.log(true);
                }

                current = current.nextNode;
            }

            return console.log(false);
        }
    }

    //returns the index of the node containing value
    find(value){
        if(this.head == null){
            console.log("There is no linked list.")
        } else{
            let current = this.head,
                index = 0;

            while(current != null) {
                if(current.value == value){
                    return console.log(index);
                }
                index++
                current = current.nextNode;
            }

            return console.log("This value cannot be found")
        }
    }

    //Print list data
    toString() {
        let current = this.head;
    
        while (current) {
          console.log(`( ${current.value} ) ->`);
          current = current.nextNode;
        }
    }

    insertAt(value, index){
        if(index < 0 || index > this.size){
            return
        }

        if(index == 0) {
            this.prepend(value)
            return
        }

        const node = new Node(value);
        let current,
            previous,
            count = 0;

        current = this.head;
        
        while (count < index){
            previous = current;

            count++

            current = current.nextNode;
        }

        node.nextNode = current;
        previous.nextNode = node;

        this.size++
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
          return;
        }
    
        let current = this.head,
            previous,
            count = 0;
    
        // Remove first
        if (index == 0) {
          this.head = current.nextNode;
        } else {
          while (count < index) {
            count++;

            previous = current;

            current = current.nextNode;
          }
    
          previous.nextNode = current.nextNode;
        }
    
        this.size--;
    }

    //'size' and 'head' can be called without a function
    //example: 'ourObject.size' or 'ourObject.head'
    //this should be enough to get the information
}

export default LinkedList;