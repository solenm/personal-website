const sections= document.querySelectorAll('.section'); 
const secBtns= document.querySelectorAll('.controls');
const secBtn= document.querySelectorAll('.control');
const allSec= document.querySelector('.main-content');


function transitions(){
    for(let i= 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn= document.querySelectorAll('.active-btn');
            currentBtn[0].className= currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    allSec.addEventListener('click', (e) =>{
        const id= e.target.dataset.id;
        if(id){
            secBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element= document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn= document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element= document.body;
        element.classList.toggle('light-mode');

        let themeIcon = document.getElementById('theme-icon');
        if(themeIcon.classList.contains("fa-sun")){
            themeIcon.classList.add("fa-moon")
            themeIcon.classList.remove("fa-sun");
        }
        else{
            themeIcon.classList.add("fa-sun")
            themeIcon.classList.remove("fa-moon");
        }
        
       
    });

}

transitions(); 