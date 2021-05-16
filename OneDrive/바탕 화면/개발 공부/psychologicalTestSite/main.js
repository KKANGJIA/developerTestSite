const btn = document.querySelector('.start_btn');
const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
let qnaBox = document.querySelector('.qnaBox');
let answerBox = document.querySelector('.answerBox');
const status = document.querySelector('.status');

let idx = 0;

btn.addEventListener('click', clickStartBtn);

function clickStartBtn() {
    main.style.display='none';
    qna.style.display='block';

    goNext(idx);
    idx++; // 답 선택하면 다음 질문으로 넘어가기
}

function goNext(idx) {
    for(let i=0; i <= 10; i++){
        qnaBox.innerHTML = qnaList[idx].q    
    }
    addAnswer(idx);
    qnaBox.style.backgroundColor = "#fff";
    qnaBox.style.borderRadius = '10px';
    qnaBox.style.fontSize = '1.5em';

    excuteStatusBar();
}


function excuteStatusBar(){
    const answer = document.querySelector('.answer');
    answer.addEventListener('click', () => {
        setTimeout(() => {
            const status_bar = document.createElement('div');
            status_bar.style.backgroundColor = "red";
            status_bar.style.width = "10%";
        },100);
    });
        
}

function addAnswer(idx) {
    for(let j=0; j <= 2; j++){
        createAnswerBtn(idx);
    }

    
}

function createAnswerBtn(idx) {
    const answerBtn = document.createElement('button');
    answerBtn.textContent = qnaList[idx].a[idx].answer;
    answerBtn.setAttribute('class', 'answer');
    answerBox.appendChild(answerBtn);
    answerBtn.style.backgroundColor = '#fff';
    answerBtn.style.border = 'none';
    answerBtn.style.borderRadius = '10px';
    answerBtn.style.fontSize = '1.5em';
    answerBtn.style.marginTop = '10px';
    answerBtn.style.padding = '18px';
}
