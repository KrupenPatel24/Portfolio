const darkMode = ()=>{
    const themeToggleBtn = document.querySelectorAll('#theme_toggle');

    const theme = localStorage.getItem('theme');
    console.log(theme);
    //on mount
    theme && document.body.classList.add(theme);
    
    //handlers
    const eventHandleToggle = ()=>{
        document.body.classList.toggle('light_mode');
            if(document.body.classList.contains('light_mode')){
                localStorage.setItem('theme','light-mode');
            }
            else{
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
            }
    }
    themeToggleBtn.forEach(btn =>{
        btn.addEventListener('click',eventHandleToggle);
    });
};
export default darkMode;