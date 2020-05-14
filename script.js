let pronoun = ['El','Nuestro', ];
let adj = ['gran', 'super', 'genial', 'colosal' ];
let noun = ['castor','animal','perro', 'arbol'];

function domainGenerator (){
    for(let i=0; i<3; i++){
        alert('www.' + pronoun[i] + adj[i] + noun[i] + '.com');
        alert('www.' + adj[i] + pronoun[i] + noun[i] + '.com');
        alert('www.' + pronoun[i] + noun[i] + adj[i] + '.com');
    }
}
domainGenerator();
