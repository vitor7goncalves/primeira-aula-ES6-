class List{
  constructor(){
     this.data = [];
  }
     add(data){
        this.data.push(data);
        console.log(this.data);
     
  }
}
class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Vitor';
    }
    mostraUsuario(){
      console.log(this.usuario);
    }
}

let MinhaLista = new TodoList();

document.querySelector('button#novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica{
    static soma(a, b){
        return a + b;
    }
}
console.log(Matematica.soma(4 ,3 ));

//Manipulando arrays
const arr = [1,3,4,5,8,9,10,12];
/*
const newArr = arr.map(function(item){
    return item *2;
})
*/
const newArr = arr.map(function(item, index){
    return item + index;
})

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
   return item %2 ===0;
});
console.log(filter);

let num = 3; // essa variavel foi ideia minha para testar se funcionaria, e funcionou :)

const find = arr.find(function(item){
    return item === num;
});

console.log(find);

