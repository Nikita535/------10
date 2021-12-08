const counters = document.querySelectorAll('.benefits__number');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 500;

        if(c < target){
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 10);
        }
        else{
            counter.innerText = target;
        }
    }

    updateCounter();
});