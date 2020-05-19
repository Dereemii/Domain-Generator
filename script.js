let pronoun = ['El','Nuestro', 'Un', 'Este'];
let adj = ['gran', 'super', 'genial', 'colosal' ];
let noun = ['castor','animal','perro', 'arbol'];

function domainGenerator (){
    for(let i=0; i<4; i++){
        alert('www.' + pronoun[i] + adj[i] + noun[i] + '.com');
        alert('www.' + adj[i] + pronoun[i] + noun[i] + '.com');
        alert('www.' + pronoun[i] + noun[i] + adj[i] + '.com'); //aca tiene un problema ya que me aparece "Undefined"
    }
}


domainGenerator();
