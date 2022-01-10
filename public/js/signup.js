const form = document.querySelector('form'); 
form.addEventListener('submit', async (evt)=>{
    evt.preventDefault(); 

    const firstname = form.querySelector('input[name="firstname"]').value; 
    const lastname = form.querySelector('input[name="lastname"]').value; 
    const email = form.querySelector('input[name="email"]').value; 
    const body = JSON.stringify({firstname, lastname, email});

    const results = await fetch('/users', {headers: {'Content-Type': 'application/json'}, body, method: 'POST'})
        .then(resp => {
            if(!resp.ok){
                throw new Error("Error: Status", resp.status);
            }
            return resp.json(); 
        })
        .then(data => {
            return data; 
        })
        .catch(err => console.error(err));

    console.log(results);
    form.querySelector('input[name="firstname"]').value = ''
    form.querySelector('input[name="lastname"]').value = ''; 
    form.querySelector('input[name="email"]').value  = ''; 
});