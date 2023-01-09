export default async function login({email, password}){
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "email": email,
         "password": password
       });
       
       let response = await fetch("localhost:3005/user/login", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
}