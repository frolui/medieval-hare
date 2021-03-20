window.addEventListener('DOMContentLoaded', () => {

    const startButton = document.querySelector('.start-button'),
          actors = document.querySelectorAll('.actor'),
          question = document.querySelector('.question-box'),
          boxTwo = document.querySelector('.box-2'),
          newQuestions = document.querySelector('.new-questions'),
          btnSlice = document.querySelector('.btn-slice'),
          footerImg = document.querySelector('.a-footer'),
          collapse = document.querySelectorAll('.div-wrapper'),
          arrItems = [question, boxTwo, btnSlice, newQuestions, footerImg],
          openAnswerButton = document.querySelector('.collapse-processed').firstElementChild;

    startButton.addEventListener('click', (e) =>{
        e.preventDefault();

        startButton.remove();
        setInterval(showContent(arrItems), 0);
        setInterval(hideContent(collapse), 0);
        // setInterval(showContent(boxTwo), 0);
        // add animation class to owl
        // document.querySelector('.owl').classList.add('.owl-animation');
    });

    function hideContent(items) {
        items.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'active');
        });
    }

    function showContent(items) {
        items.forEach(item =>{
            item.classList.add('show', 'active');
            item.classList.remove('hide');
        });
    }

    openAnswerButton.addEventListener('click', (e) =>{
        e.preventDefault();

        if(collapse[0].classList.contains('active')) {
            collapse[0].classList.add('hide');
            collapse[0].classList.remove('show', 'active');
        } else {
            collapse[0].classList.add('show', 'active');
            collapse[0].classList.remove('hide');
        }        
    });    

    // newQuestions.addEventListener('click', (e) =>{
    //     e.preventDefault();    
    //     fetch('https://engine.lifeis.porn/api/millionaire.php?qType=1&count=1')
    //         .then(response => response.text())
    //         .then(data => console.log(data));       
    // });     
    // const parser = new DOMParser();
    // let doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
    
    footerImg.addEventListener('click', (e) =>{
        e.preventDefault();

        if (footerImg.classList.contains('active')) {            
            setInterval(hideContent(arrItems), 0);
            footerImg.classList.remove('active');
        } else {
            setInterval(showContent(arrItems), 0);
            footerImg.classList.add('active');
        }

        footerImg.classList.add('show'); 
        footerImg.classList.remove('hide');
    });

});