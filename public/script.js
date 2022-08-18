const submit = document.getElementById('submit')
const responseBox = document.getElementById('response')



const postRequest = async () => {
    const payload = {
         name: 'User 7',
        age: 30}


    const response = await fetch('http://localhost:3000/users', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(payload)
    })
    const output = await response.json()
    responseBox.innerText = JSON.stringify(output)

}

submit.addEventListener('click', postRequest)