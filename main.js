document.addEventListener('DOMContentLoaded', () =>{
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.remove('hidden')
                entry.target.classList.add('in-view')
                return;
            }else{
                entry.target.classList.add('hidden')
                entry.target.classList.remove('in-view')
            
            }
        });
    });

    const getallanimateelement = document.querySelectorAll('.animate');

    getallanimateelement.forEach((element)=> obs.observe(element));

});

const onclickvideo = document.querySelector('squarediv');

onclickvideo.addEventListener('click', () => {
    console.log('pree')
})