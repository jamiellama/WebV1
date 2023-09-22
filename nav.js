console.log("nav.js loaded successfully");

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links');
const navBtns = document.querySelectorAll('.navbutton');
let activeSection;

const activeSectionHandler = (currentSectionId) => {{
    navLinks.forEach(link => {
        if(link.dataset.section === currentSectionId) {
            link.classList.add('active');
            return;
        };
        link.classList.remove('active');
    })

    navBtns.forEach(btn => {
        if(btn.dataset.section === currentSectionId) {
            btn.classList.add('active');
            return;
        };
        btn.classList.remove('active');
    })

}}

const sectionWatcherCallback = (section, sectionWatcher) => {
    section.forEach(section => {
        if(!section.isIntersecting){return};
        activeSectionHandler(section.target.id);
        setActiveSection(section.target);
        
    })
}

const sectionWatcherOptions = {
    threshold: .6

}
const sectionWatcher = new 
IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)

sections.forEach(section => {
    sectionWatcher.observe(section);
})

document.addEventListener("mousemove", logoMove);

function logoMove(e){
  document.querySelectorAll(".object").forEach(function(move){

    var move_axis = move.getAttribute("data-value");
    var x = (e.clientX * move_axis) / 200;
    var y = (e.clientY * move_axis) / 200;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}