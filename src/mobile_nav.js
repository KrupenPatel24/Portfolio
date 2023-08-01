const mobilenav = ()=>{
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile__nav');
    const mobileLists = document.querySelectorAll('.mobile__nav_link');
    let isMobileNavOpen =false;
    
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    })
    mobileLists.forEach(link =>{
        link.addEventListener('click',()=>{
            isMobileNavOpen =false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
}
export default mobilenav;