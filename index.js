const alloadings = document.querySelectorAll('.loading');
const toggler = document.getElementById('toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save the theme preference to localstorage
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkmode', isDarkModeEnabled);
}

toggler.addEventListener('click', toggleDarkMode);

window.addEventListener('load', () => {
    const isDarkModeEnabled = localStorage.getItem('darkmode');

    //Set the theme based on the saved preference
    if(isDarkModeEnabled == 'true') {
        document.body.classList.add('dark-mode'); 
    }else{
        document.body.classList.remove('dark-mode');
    }

    setInterval(() =>{
        alloadings.forEach(item =>{
            item.classList.remove('loading');
        });
    }, 2000);
});


