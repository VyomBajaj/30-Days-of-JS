// Ques-1

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis)},millis);
        
    });
}

//Ques-2
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {

        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result)=>{
                resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };
};


