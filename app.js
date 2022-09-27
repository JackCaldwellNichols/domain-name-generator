let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let ext = [".com", ".net", ".us", ".io"];
var randomise = ext[Math.floor(Math.random() * ext.length)];

var domainGenerator = (pronoun, adj, noun) => {
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var r = 0; r < noun.length; r++) {
        console.log(pronoun[i] + adj[j] + noun[r] + randomise);
      }
    }
  }
};
domainGenerator(pronoun, adj, noun);
