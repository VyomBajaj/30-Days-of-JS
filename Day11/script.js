//Activity-1 (Understanding Promises)

//Task-1
const promiseOne = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        resolve("Promise Consumed");
    },2000)
} );

promiseOne.then( (msg)=>{
    console.log(msg);
} );
//Output
// Promise Consumed

//Task-2
const promiseTwo = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        reject("Error")
    },2000)
});
promiseTwo.catch((msg)=>{
    console.log(msg);
});
//Output
// Error


//Activity-2 - Chaining Promises

//Task-3
function data1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Fetch Data1");
        },1000)
    })
}
function data2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Fetch Data2");
        },2000)
    })
}

data1()
.then((msg)=>{
    console.log(msg);
    return data2();
})
.then((msg)=>{
    console.log(msg);
})
.catch(()=>{
    if(error){
        console.log("Its an error");
    }
})
//Output
// Fetch Data1
// Fetch Data2


//Activity-3 Using Async Await

//Task-4
const func = async()=>{
    const response = await promiseOne;
    console.log(response);
}
func();
//Output
// Promise Consumed

//Task-5
const func2 = async()=>{
    try{
        const response = await promiseTwo
        console.log(response);
    }
    catch{
        console.error("Error Occured");
    }
}
func2()
//Output
// Error Occured

//Activity-4 Fetching Data from an API

//Task-6
const url="https://randomuser.me/api/";
fetch(url)
.then( (response)=>{
    return response.json();
})
.then( (response)=>{
    const data = response;
    console.log(data);
})
.catch(()=>{
    console.log("Error!!");
})

//Task-7
const func3= async(url)=>{
    const response = await fetch(url);
    const data= await response.json();
    console.log(data); 
}
func3(url);
//Output for Task-6 and Task-7
//   {
//     results: [
//       {
//         gender: 'male',
//         name: [Object],
//         location: [Object],
//         email: 'calogero.heinisch@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '0659-3578231',
//         cell: '0179-5379512',
//         id: [Object],
//         picture: [Object],
//         nat: 'DE'
//       }
//     ],
//     info: { seed: '67b6b4cb1aaa2920', results: 1, page: 1, version: '1.4' }
//   }


//Activity 5- Concurrent Promises

//Task-8
const promises = [promiseOne,promiseTwo];
const result = Promise.all(promises);
result
.then( (data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error....")
})
//Output
// Error....

//Task-9
const result2 = Promise.race(promises);
result2.then((data)=>{
    console.log(data);
})
.catch( ()=>{
    console.log("Oh No! Error!!")
})
//Output
// Promise Consumed
