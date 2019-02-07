function chooseAdjective() {
    var adjectives = document.getElementById("adjectives").value.split(" ");
    return " " + adjectives[Math.floor(Math.random()*adjectives.length)];
}
function chooseNoun() {
    var nouns = document.getElementById("nouns").value.split(" ");
    return " " + nouns[Math.floor(Math.random()*nouns.length)];
}
function chooseVerb() {
    var verbs = document.getElementById("verbs").value.split(" ");
    return " " + verbs[Math.floor(Math.random()*verbs.length)];
}
function chooseAdverb() {
    var adverbs = document.getElementById("adverbs").value.split(" ");
    return " " + adverbs[Math.floor(Math.random()*adverbs.length)];
}

function generateSentence() {
    document.getElementById("poetry").innerHTML = "The" + chooseAdjective() + chooseNoun() + chooseVerb() + chooseAdverb() + ".";
}

document.addEventListener('DOMContentLoaded', function(){
    generateSentence();
    document.getElementById("update").addEventListener("click", function(){
        generateSentence();
    });
});