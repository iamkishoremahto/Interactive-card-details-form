
const cardholderNameHandler = () =>{
    const cardholderInputField = document.querySelector('#cardholder_name');
    const cardholderShowName = document.querySelector('#cardholder');
    cardholderInputField.addEventListener('input',()=>{
       
        cardholderShowName.innerHTML = cardholderInputField.value;
    });
}

const MM_DD_handler = () =>{
    const mmInput = document.querySelector('#mm')
    const yyInput = document.querySelector('#yy')

    const mmShow = document.querySelector('#mmShow')
    const yyShow = document.querySelector('#yyShow')

    mmInput.addEventListener('input',() =>{
        mmShow.innerHTML = mmInput.value;
    });

    yyInput.addEventListener('input',() =>{
        yyShow.innerHTML = yyInput.value;
    });
}


const cvcHandler = () =>{
    const cvcInput = document.querySelector('#cvc');
    const cvcShow = document.querySelector('#cvcShow');

    

    cvcInput.addEventListener('input',() =>{
        cvcShow.innerHTML = cvcInput.value;

        const cvcNumberError = document.querySelector('#cvcNumberError');



    if(hasAlphabetCharacters(cvcInput.value)){
        cvcNumberError.innerHTML = "Wrong format, numbers only"
        cvcNumberError.style.display = 'block';
        cvcInput.classList.add('errorInput');
    }
    else{
        cvcInput.classList.remove('errorInput');
        cvcNumberError.style.display = 'none';
    }
    });
}

function hasAlphabetCharacters(str) {
    return /[a-zA-Z]/.test(str);
  }

const cardNumberHandler = () => {
    const cardNumberInput = document.querySelector('#card_number');
    const cardNumberShow = document.querySelector('#c_number');
    const number_1 = document.querySelector('#number_1');
    const number_2 = document.querySelector('#number_2');
    const number_3 = document.querySelector('#number_3');
    const number_4 = document.querySelector('#number_4');

    cardNumberInput.addEventListener('input',() =>{
     
        let cardValue = cardNumberInput.value.replace(/\s/g, '');

        const cardInvalid = document.querySelector('#cardInvalidError');

        // if(cardValue === '' || cardValue ===' ' || cardValue === null){
        //     cardInvalid.style.display = 'block';
        //     cardInvalid.innerHTML = "Can't be blank";
        // }
        // else{
        //     cardInvalid.style.display = 'none'; 
        // }
        if(hasAlphabetCharacters(cardValue)){
            console.log(cardInvalid);
            cardInvalid.style.display = 'block';
            cardInvalid.innerHTML = "Wrong format, numbers only";
            cardNumberInput.classList.add('errorInput');
            
        }
        else{
            
            cardInvalid.style.display = 'none';
            cardNumberInput.classList.remove('errorInput');
        }
        number_1.innerHTML = cardValue.slice(0,4);
        number_2.innerHTML = cardValue.slice(4,8);
        number_3.innerHTML = cardValue.slice(8,12);
        number_4.innerHTML = cardValue.slice(12,16);
    });

}

const confirmCardDetailsHandler = () => {
    const confirmBtnBtn = document.querySelector('#confirmBtn');

    confirmBtnBtn.addEventListener('click', () => {
    
    const cardholderInputField = document.querySelector('#cardholder_name');
    const cardNumberInput = document.querySelector('#card_number');
    const mmInput = document.querySelector('#mm')
    const yyInput = document.querySelector('#yy')
    const cvcInput = document.querySelector('#cvc');

    const nameError = document.querySelector('#nameEmptyErr');
    const cvcNumberError = document.querySelector('#cardInvalidError');
    const cvcError = document.querySelector('#cvcNumberError');

    if(cardholderInputField.value === '' || cardholderInputField.value === null){
        nameError.innerHTML = "Can't be blank";
        nameError.style.display = 'block';
    }
    else{
        nameError.style.display = 'none';
    }

    if(cardNumberInput.value === '' || cardNumberInput.value === null){
        cvcNumberError.innerHTML = "Can't be blank";
        cvcNumberError.style.display = 'block';

    }
    else{
        cvcNumberError.style.display = 'none';
    }

    if(mmInput.value === '' || mmInput.value === null || yyInput.value === '' || yyInput.value === null){
        const mmYYError = document.querySelector('#mmYYError');
        mmYYError.innerHTML = "Can't be blank";
        mmYYError.style.display = 'block';
    }
    else{
        mmYYError.style.display = 'none';
    }

    if(cvcInput.value === '' || cvcInput.value === null){
        cvcError.innerHTML = "Can't be blank";
        cvcError.style.display = 'block';
        
    }
    else{
        cvcError.style.display = 'none';
    }


    if(cardholderInputField.value !== '' && cardNumberInput.value !== '' && mmInput.value !== '' && yyInput.value !== '' && cvcInput.value !== ''){
        const form  = document.querySelector('form');
        const completed = document.querySelector('.completed');
        form.style.display = 'none';
        completed.style.display = 'flex';
    }

    });

    
   


    

}


cardholderNameHandler();
MM_DD_handler();
cvcHandler();
cardNumberHandler()
confirmCardDetailsHandler();
