/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domains = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      let domain = pronoun[i] + adj[j] + noun[h] + ".com";
      domains.push(domain);
    }
  }
}

console.log("Dominios Generados:");
domains.forEach(function(domain) {
  console.log(domain);
});
