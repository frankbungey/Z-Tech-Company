const inputOne = document.querySelector('.inputs');
const inputTwo = document.querySelector('.inputs1');
const outlet = document.querySelector('.outlet');
const message = document.querySelector('.message');

const userInfo =[
    {
        name: inputOne.value, 
        email: inputTwo.value,
        message : message.value
    }
]
const submitData = ()=>{

    if(inputOne.value == ''){
        alert('Inputs cant be empty');
    }

localStorage.setItem('user-Info',JSON.stringify(userInfo));
alert('Thank You....');
outlet.style.display = "block"
outlet.innerHTML=
    ` <p>Redirecting...</p> `
setTimeout(()=>{
location.href="/Z-Tech-Company/AboutUs/index4.html"
},3000)


};