var haikuWords = [["On", "In", "With", "Surrounded by", "Eating", "Examining", "Poking", "Impressing", "Empowering"],
                    ["cricket", "branch", "river", "dog", "cat", "character from an anime", "cheese", "computer", "body pillow", "tree", "willow tree", "panda"],
                    ["floating", "feeding", "imagining", "drifting", "snoozing", "crying", "singing", "flying", "sinking", "typing"],
                    ["westwards", "downstream", "eastwards", "quickly", "smoothly", "emotionally", "slowly", "pensively", "serenely", "lazily", "quietly"]];

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

