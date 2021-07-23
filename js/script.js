function getRandomInt(max = 100) {
    return Math.floor(Math.random() * max);
}


function close (){
    let arr = [];

    function secFunc(){
        if(arr.length === 100) return arr;

        const randomInt = getRandomInt();

        if(arr.includes(randomInt)){
            return secFunc();
        }

        arr.push(randomInt)

        return{
            num:randomInt ,
            arr
        };
    }

    return secFunc;
}

let cl = close();

for(let i = 1; i <= 101; i++) {
    console.log(cl())
}