window.addEventListener('DOMContentLoaded', () => {

    const startButton = document.querySelector('.start-button'),
          actors = document.querySelectorAll('.actor');

    startButton.addEventListener('click', (e) =>{
        e.preventDefault();

        startButton.remove();
        setInterval(showContent, 2000);
    });

    function hideContent() {
        actors.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showContent() {
        actors.forEach(item =>{
            item.classList.add('show');
            item.classList.remove('hide', 'fade');
        });
    }


});