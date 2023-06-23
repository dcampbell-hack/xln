import { SinglyLinkedList, DoublyLinkedList } from './linkedList.js'
const sLL = new SinglyLinkedList()
sLL.push("It")
sLL.push("Is")
sLL.push("Crazy")

const dLL = new DoublyLinkedList()
dLL.push("Forks")
dLL.push("In")
dLL.push("Road")

console.log("SLL", sLL)
console.log("dLL", dLL)

sLL.pop()
dLL.pop()

console.log("SLL", sLL)
console.log("dLL", dLL)
