;
(function () {

    const accordItems = document.querySelectorAll('.block__title'),
        active = document.getElementsByClassName('block__title--active');

    Array.from(accordItems).forEach(item => {
        item.addEventListener('click', function () {
            if (active.length > 0 && active[0] !== this)
                active[0].classList.remove('block__title--active');

            this.classList.toggle('block__title--active');
        });
    });

})();