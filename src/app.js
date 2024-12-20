/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".org", ".io"];

  let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  let randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  let randomDomain = domains[Math.floor(Math.random() * domains.length)];

  let randomDomainName = `${randomPronoun}${randomAdjective}${randomNoun}${randomDomain}`;

  document.getElementById("domain").innerText = randomDomainName;
};
