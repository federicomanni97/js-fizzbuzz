// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let i;

 for ( i = 1; i <= 100; i++) {
    let box = document.createElement('div');
    // facciamo console dei cento numeri 
    if (i % 3 === 0 && i % 5 === 0){
        box.classList.add('bg-danger');
        box.innerText = `fizzbuzz`;
    }
    else if(i % 3 === 0){
        box.classList.add('bg-success', 'text-light');
        box.innerText = `fizz`;
    }
    else if(i % 5 === 0){
        box.classList.add('bg-warning', 'text-light');
        box.innerText = `buzz`;
    }  
    else{
        box.classList.add('bg-primary');
        box.innerHTML = `${i}`;
    }
    document.getElementById('boxContainer').appendChild(box);
    box.classList.add('square-dimension', 'fs-5', 'd-flex', 'justify-content-center', 'align-items-center');

}
