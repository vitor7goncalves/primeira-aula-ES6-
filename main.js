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