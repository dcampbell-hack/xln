import { SNode } from "./linkedList"

function mergeTwoList(list1, list2){
    let current = new SNode()
    const dummy = current;
    while(list1 && list2){
        if(list1.value < list2.value){
            current.next = list1;
            list1 = list1.next; 
        } else {
           current.next = list2;
           list2 = list2.next;
        }
        current = current.next;
        if(list1){
            current.next = list1;
        }
        if(list2) current.next = list2;
        return dummy.next;
    }

}