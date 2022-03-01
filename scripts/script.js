
class Node {
  constructor(data, next) {
      this.data = data;
      this.next = next;
  };
};

class LinkedList {
  constructor() {
      this.head = null;
      this.size = 0; 
      console.log("xddd");
      
  };
 
  add(data) {
      const newNode = new Node(data, null);
      if (!this.head) {
          this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++
    };
    
    print() {
        if (!this.size) {
            return null
        };
        let current = this.head;
        let result = " ";
        while (current) {
            result += current.data;
            current = current.next; 
        };
        result += 'X';
        return result;
    }

    // primaryList1(){
        
    //     for (var i = 0; i < linkedList.size; i++) {
            
    //         let current = linkedList.head;
    //         var result = " ";
    //         while (i < linkedList.size) {
    //             i++;
    //             result = current.data;
    //             console.log(current + "hola")
    //             current = current.next;
    //         }
    //         console.log("hola")
    //      }
    //      return result;
    // }  
    
    printList() {
        var tnode = linkedList.head;
        var phrase = "";
        while (tnode != null) {
            phrase += (tnode.data) + ",";
            tnode = tnode.next;
        }
        return phrase;
    }
};



function addElemnt(){
    var toadd = document.getElementById("name").value;
    console.log(toadd);
    linkedList.add(toadd);
    adToList(toadd);
    console.log(linkedList.print() + "esto es agregando uno");
}

function primaryList(){
    var list = " ";
    list = linkedList.printList();
    let arreglo = list.split(",");
    for (let i = 0; i < arreglo.length-1; i++) {
        const element = arreglo[i];
        adToList(element)
    }
    console.log(arreglo[0]);
    console.log(list)
}


function adToList(info){
    
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1
    li.setAttribute("id", "element"+children)
    li.setAttribute("onclick", "test()")
    li.appendChild(document.createTextNode(info));
    ul.appendChild(li)
    
}

function test(){
    console.log("papiromano");
}

const linkedList = new LinkedList();
linkedList.add("Andres Amaya");
linkedList.add("Harrison Diaz");
linkedList.add("Martin Chiquillo");
linkedList.add("Miguel Rubiano");
linkedList.add("Julian Ardila");
console.log(linkedList);
console.log(linkedList.print());

window.onload = () => primaryList();