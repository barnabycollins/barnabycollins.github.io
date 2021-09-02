
// If the navbar is visible
if (!window.matchMedia("screen and (max-width: 800px)").matches) {
    console.log("yes");

    let previouslyFocussed = 'welcome';
    
    function checkScroll() {
        const viewportX = document.documentElement.clientWidth;
        const viewportY = document.documentElement.clientHeight;
    
        const currentlyFocussed = document.elementsFromPoint(viewportX/2, viewportY/2);
    
        for (let i = 0; i < currentlyFocussed.length; i++) {
            const id = currentlyFocussed[i].id;
            if (id in sectionsToNavs && id !== previouslyFocussed) {
                document.getElementById(sectionsToNavs[previouslyFocussed]).style.fontWeight = 300;
                document.getElementById(sectionsToNavs[id]).style.fontWeight = 400;
                previouslyFocussed = id;
                break;
            }
        }
    }
    
    document.addEventListener('scroll', checkScroll);
    
    checkScroll();
}