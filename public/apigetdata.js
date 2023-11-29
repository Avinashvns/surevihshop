

function apiGetData(url){
    // alert("Hello");
    console.log(url);
    fetch(url)

    // promise
    .then(res=>{
        if(res.ok){
            var x=res.json()
            return x;
        }
        else {
            throw new Error('Network res was not ok.');
        }
    })

    // request
    .then(result=>{
        console.log(result)
 
        // parsing
    })
}

function f(){
    alert("hi");
}
