

    const login=(credentials)=>{
        console.log(credentials)
        fetch("http://localhost:3000/api/login",{
        
            method: 'post',
            headers:{
                'content-Type':'application/json'
              },
              body:JSON.stringify(credentials)
        })
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data)
        })
    }
export default login