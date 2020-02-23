var haikuWords = [
    ["On", "In", "With", "Surrounded by", "Eating", "Examining", "Poking", "Impressing", "Empowering", "Visiting", "Resurrecting", "Singing to", "Hugging", "Worshipping", "Sniffing", "Squeezing", "Enjoying", "Flipping", "Grabbing", "Lubricating"],
    ["cricket", "branch", "river", "dog", "cat", "character from an anime", "cheese", "computer", "body pillow", "tree", "willow tree", "panda", "Shrek mug", "bonsai tree", "cherry blossom", "kimono", "samurai", "bathhouse", "shogun", "zen garden", "rock garden", "weeb", "basket", "weasel", "penguin", "bruh moment"],
    ["floating", "feeding", "imagining", "drifting", "snoozing", "crying", "singing", "flying", "sinking", "typing", "fading", "observing", "celebrating", "humming", "hurting", "wobbling", "hiding", "sneaking", "eating alone", "contemplating", "sailing"],
    ["westwards", "downstream", "quickly", "smoothly", "emotionally", "slowly", "pensively", "serenely", "lazily", "quietly", "softly", "begrudgingly", "intensely", "imaginatively", "cautiously", "spiritually", "gracefully", "sloppily", "in a roundabout manner", "hungrily", "clumsily"]
];

function chooseWord(n) {
    return haikuWords[n][Math.floor(Math.random()*haikuWords[n].length)];
}

function generateHaiku() {
    document.getElementById("ln-1").innerHTML = chooseWord(0) + " a " + chooseWord(1);
    document.getElementById("ln-2").innerHTML = chooseWord(2) + " " + chooseWord(3);
    document.getElementById("ln-3").innerHTML = "a " + chooseWord(1) + ", " + chooseWord(2) + ".";
}

document.addEventListener('DOMContentLoaded', function(){
    generateHaiku();
    document.getElementById("update").addEventListener("click", function(){
        generateHaiku();
    });
});

