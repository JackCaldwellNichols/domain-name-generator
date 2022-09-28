let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

var ext = [".com", ".co.uk", ".es"];
var randomise = ext[Math.floor(Math.random()*ext.length)];

var domainNameGen = (a, b, c) => {
    for(let x = 0; x<a.length; x++){
        for(let y = 0;y<b.length; y++){
            for(let z=0; z<c.length; z++){
              console.log(a[x] + b[y] + c[z] + randomise)
            }
        }
    }
}

domainNameGen(pronoun, adj, noun)
