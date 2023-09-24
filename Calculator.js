//javascriptpro_
let btns = document.querySelectorAll('.container .btns-box .btn');
let input = document.querySelector('.container .input-box input');
let evalBtn = document.querySelector('.container .btns-box .eval-btn');
let deleteBtn = document.querySelector('.container .btns-box .delete-btn');
let AcBtn = document.querySelector('.container .btns-box .ac-btn');

btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
                let btnText = e.target.innerHTML;
                if (btnText == '×') {
                        btnText = '*';
                }
                if (btnText == '÷') {
                        btnText = '/';
                }
                input.value += btnText;
                e.target.classList.add('active');
                setTimeout(() => {
                        e.target.classList.remove('active');
                }, 300)
        })
})

evalBtn.addEventListener('click', () => {
        try {
                input.value = eval(input.value);
                evalBtn.classList.add('active');
                setTimeout(() => {
                        evalBtn.classList.remove('active');
                }, 300)
        } catch (err) {
                input.value = 'Error';
        }
})

deleteBtn.addEventListener('click', () => {
        input.value = input.value.substr(0, input.value.length - 1);
        deleteBtn.classList.add('active');
        setTimeout(() => {
                deleteBtn.classList.remove('active');
        }, 300)
})

AcBtn.addEventListener('click', () => {
        input.value = '';
        AcBtn.classList.add('active');
        setTimeout(() => {
                AcBtn.classList.remove('active');
        }, 300)
})
