
let climbingStairs = (array)=>{
    let costFront = 0;
    let costMid = 0;
    let costBack = 0;
    let x = -1;
    let y = array.length;
    let z = 0;
    while(x<array.length){
        
        step1 = array[x+1];
        step2 = array[x+2];
        if(step1 >=0 && step2 >= 0){
            if(step1<step2 ){
                costFront += step1;
                x +=1;
            }
            else if(step2<step1 ||step1==step2){
                costFront += step2;
                x+=2;
            }
            
        }
        else{
            break;
        }       
    }
    while(z<array.length){
        step1 = array[z+1];
        step2 = array[z+2];
        step3 = array[z+3];
        
        if(step1 >=0 && step2 >= 0){
            if(step1<step2 ){
                if(step2<step1+step3){
                    costMid += step2;
                    z+=2;
                }
                else{
                    costMid += step1;
                    z +=1;

                }
                
            }
            else if(step2<step1 ||step1==step2){
                costMid += step2;
                z+=2;
            }
           
        }
        else{
            break;
        } 

    }  
    
    while(y>=0){
        step1 = array[y-1];
        step2 = array[y-2];
        if(step1 >=0 && step2 >= 0){
            if(step1<step2 ){
                costBack += step1;
                y-=1;
            }
            else if(step2<step1 ||step1==step2){
                costBack += step2;
                y-=2;
            }
            
        } 
        else{
            break;
        }    
    }
    
    return Math.min(costFront,costMid,costBack);

}


console.log(climbingStairs([0, 2, 2, 1])); //➞ 2
console.log(climbingStairs([0, 2, 3, 2])); //➞ 3
console.log(climbingStairs([10, 15, 20])); //➞ 15
console.log(climbingStairs([0, 0, 0, 0, 0, 0])); //➞ 0

