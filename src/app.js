/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainName = [];
  var pronoun = ["the", "our", "them", "her", "his"];
  var adj = ["great", "big", "beautiful", "green", "blonde"];
  var noun = ["jogger", "racoon", "fish", "dog", "food"];
  var domain = [".es", ".com", ".net", ".io", ".cl"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push("  " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
};
