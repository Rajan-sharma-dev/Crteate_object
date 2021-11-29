function CreateObject(arr) {
    let Cars = {}
    
    for( let i=0;i<arr.length;i+=2){
        Cars[arr[i]]=arr[i+1];
    }
    return Cars
    // Write your code here
}

module.exports = CreateObject;
