const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");


const changeLanguage = async (language)=>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    
 for(const textToChange of textsToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML= texts[section][value];
 } 
}



flagsElement.addEventListener('click',(e)=>{

changeLanguage(e.target.parentElement.dataset.language);

});

const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

toggleTheme.addEventListener('click',()=>{

    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('sun.svg')){
        toggleIcon.src='./images/moon.svg';
        toggleText.textContent="Dark Mode";
    }else{
        toggleIcon.src='./images/sun.svg';
        toggleText.textContent="Light Mode";
    }

});
