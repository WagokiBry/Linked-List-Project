 class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }

      class linkedList {
        constructor() {
          this.head = null;
          this.tail = null;
        }

        append(value) {
          const newNode = new Node(value);
          if(this.head === null){
            this.head = newNode;
            this.tail = newNode
          }else {
            this.tail.next = newNode;
            this.tail = newNode;
          }
        }
        shift(){
            if(!this.head) return null;

            let removed = this.head;
            this.head = this.head.next

            if(!this.head){
                this.tail = null
            }
            removed.next = null
            return removed
        }

        size(){
            if(!this.head) return 0
let count = 0;
            let current = this.head;
            while(current !== null){
                count++
                current = current.next
            }
            
            return count
        }
      }

      let head = new linkedList();
      head.append(1115);
      head.append(1115);
      head.append(1115);
      
      console.log(head.size());
      console.log(head.tail)

     