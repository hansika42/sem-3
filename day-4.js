//create one promises that will display user name and password 
//using resolve and if data will be rejected its display error message 

new Promise ((resolve, reject)=> {
    setTimeout(()=>{
        let err=false;
        if(!err){
            resolve("user:CSE21, password:123");
        }else {
            reject("ERROR...:data fail");
        }
    })
}).then((result)=>{
    console.log(result);
}).catch((error)=> {
    console.log(error);
})