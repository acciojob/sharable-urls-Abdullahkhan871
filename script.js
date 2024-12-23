let form = document.querySelector('form');
let nameUser = document.querySelector('#name');
let yearUser = document.querySelector('#year');
let h3 = document.querySelector('h3');
let nameInput = ''
let year = ''


nameUser.addEventListener('change', handleChange);
yearUser.addEventListener('change', handleChange);

function handleChange(e){
    if(e.target.id == 'name'){
        nameInput = e.target.value
    }else{
        year = e.target.value;
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(nameInput);
    
    if (nameInput !== "" && year !== "") {
      h3.innerText = `https://localhost:8080/?name=${nameInput}&year=${year}`;
    } else if (nameInput != "") {
      h3.innerText = `https://localhost:8080/?name=${nameInput}`;
    } else if (year != "") {
      h3.innerText = `https://localhost:8080/?year=${year}`;
    }
})

