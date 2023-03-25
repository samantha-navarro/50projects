// DOM ELEMENTS
// get all counters and output into an array
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    // will show 0 in the webpage
    counter.innerText = '0';

    const updateCounter = () => {
        // getting the data-target in html = + makes the attribute into a typeof number
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            // Math.ceil will round the number
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target
        }
    };

    updateCounter()
})