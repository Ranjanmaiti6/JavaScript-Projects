const salary = document.getElementById('salary');
const button = document.querySelector('button');
const output = document.getElementById('output');

let totalTax = 0;

button.addEventListener('click' , (e) => {
    e.preventDefault();

    let amount = parseInt(salary.value);

    if(amount<=1200000)
        totalTax=0;
    else if(amount<=1600000){
        totalTax= (amount-1200000)*0.15;
    }
    else if(amount<=2000000){
        totalTax= (amount-1600000)*0.20 + 60000;
    }
    else if(amount<=2400000){
        totalTax= (amount-2000000)*0.25 + 60000+ 80000;
    }
    else{
        totalTax = (amount-2400000)*0.30 + 60000+ 80000+ 100000;
    }

    output.textContent = `Your Tax: ${totalTax} INR`;

})