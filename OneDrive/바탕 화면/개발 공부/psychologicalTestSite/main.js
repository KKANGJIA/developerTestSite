"use strict"

// 하나를 누를때마다 프로그래스바가 움직이고 다음 문항으로 넘어간다
// 프로그래스바가 꽉 차면 결과 화면으로 이동한다

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const questionsSection = document.querySelectorAll('.questionsSection');
const answers = document.querySelectorAll('.answer');
const lis = document.querySelectorAll('li');
const ul = document.querySelectorAll('ul');
const questionAnswer = document.querySelector('.questionAnswer');
const question = document.querySelector('.question');
const bar = document.querySelector('.progress_bar');
const choice_section = document.querySelector('.choice_section');

changeNextQnA();

function changeNextQnA(){
    answers.forEach(answer => {
        answer.addEventListener('click', function (){
            questionAnswer.removeChild(question);
            questionAnswer.removeChild(a);
            questionAnswer.removeChild(b);
            questionAnswer.removeChild(c);

            setTimeout(function (){
                const proBar = document.createElement("div");
                proBar.id = 'progress_bar'
                proBar.style.position = 'absolute';
                proBar.style.width = '100px';
                proBar.style.height = '30px';
                proBar.style.backgroundColor = 'black';
                proBar.style.borderRadius = '10px 0px 0px 10px';
                bar.appendChild(proBar);
            },500 );

        });
    });
}
createQnA();

function createQnA(){
    const sp0 = document.createElement("li");
    sp0.id = "newQ";
    const sp0_content = document.createTextNode("2. 연인이랑 싸웠을 때 어떻게 할래?");
    sp0.appendChild(sp0_content)
    questionAnswer.appendChild(sp0);
    

   const sp1 = document.createElement("li");
    sp1.id = "newA";
    const sp1_content = document.createTextNode("a. 연락할래. 사과해야지...");
    sp1.appendChild(sp1_content)
    questionAnswer.appendChild(sp1);


    const sp2 = document.createElement("li");
    sp2.id = "newA";
    const sp2_content = document.createTextNode("b. 연락안해! 내가 뭘 잘 못했어?");
    sp2.appendChild(sp2_content)
    questionAnswer.appendChild(sp2);

    const sp3 = document.createElement("li");
    sp3.id = "newA";
    const sp3_content = document.createTextNode("c. 난 잘 모르겠어...");
    sp3.appendChild(sp3_content)
    questionAnswer.appendChild(sp3);

    
    const sp4 = document.createElement("button");
    sp4.setAttribute.classList = "start_btn";
    const sp4_content = document.createTextNode("결과보기");
    const a = document.createElement("a");
    a.href = 'result.html';
    a.appendChild(sp4_content);
    sp4.appendChild(a);
    choice_section.appendChild(sp4);
};



