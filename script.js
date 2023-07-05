function threeSum(arr, target) {
// write your code here
	let arr2 = [];
        let count = 0;
        for(let i=0;i<arr.length-2;i++){
            for(let j=i+1;j<arr.length-1;j++){
                for(let k=j+1;k<arr.length;k++){
                    arr2[count] = arr[i]+arr[j]+arr[k];
                    count++;
                }
            }
        }

        

        
        
        for(let i=0;i<arr2.length;i++){
            if(arr2[i]<0){
                let temp = arr2[i];
                arr2[i] = (-1) * temp;
                arr2[i] = arr2[i]+target;
            }
        }
        arr2.sort();
        console.log(arr2[0]);
       
  
}

module.exports = threeSum;
