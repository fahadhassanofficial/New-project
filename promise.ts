const myPromise = new Promise<string>((resolve, reject) => {
    let makeToast = 'Toast is ready';
    if( makeToast === 'toast is ready'){
        resolve('your toast is ready');
    }else{
        reject('Toast is not ready');
    }
        
     
}

);