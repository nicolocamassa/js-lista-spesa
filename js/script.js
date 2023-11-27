let list = ['Pere', 'Mele', 'Arance', 'Caffè']
let i = 0;

while(i<list.length){
    console.log(list[i]);

    const node = document.createElement("li");
    const textnode = document.createTextNode(list[i]);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    i++
}