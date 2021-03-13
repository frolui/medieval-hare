window.addEventListener('DOMContentLoaded', () => {

    const startButton = document.querySelector('.start-button'),
          actors = document.querySelectorAll('.actor'),
          question = document.querySelectorAll('.question-box'),
          boxTwo = document.querySelectorAll('.box-2');

    startButton.addEventListener('click', (e) =>{
        e.preventDefault();

        startButton.remove();
        setInterval(showContent(question), 0);
        setInterval(showContent(boxTwo), 0);

        // add animation class to owl
        // document.querySelector('.owl').classList.add('.owl-animation');
    });

    function hideContent() {
        actors.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showContent(items) {
        items.forEach(item =>{
            item.classList.add('show');
            item.classList.remove('hide', 'fade');
        });
    }


});