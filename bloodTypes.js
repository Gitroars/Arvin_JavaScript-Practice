const isEligible = (donor,receiver)=>{
    const Op = ["AB+","A+","B+","O+"];
    const Bm = ["AB+","AB-","B+","B-"];
    const Bp = ["AB+","B+"];
    const Am = ["AB+","AB-","A+","A-"];
    const Ap = ["AB+","A+"];
    const ABm = ["AB+","AB-"];
    

  if (donor=="O-"){
   return true
  }
  else if (donor=="O+"){
      
      for (let i=0;i<Op.length;i++){
          if (receiver==Op[i]){
              return true;
          }
          
      }
      return false;
      
  }
  else if (donor=="B-"){
    for (let i=0;i<Bm.length;i++){
        if (receiver==Bm[i]){
            return true;
        }
        
    }
    return false;
  }
  else if(donor=="B+"){
    for (let i=0;i<Bp.length;i++){
        if (receiver==Bp[i]){
            return true;
        }
        
    }
    return false;
  }
  else if(donor=="A-"){
    for (let i=0;i<Am.length;i++){
        if (receiver==Am[i]){
            return true;
        }
        
    }
    return false;
  }
  else if(donor=="A+"){
    for (let i=0;i<Ap.length;i++){
        if (receiver==Ap[i]){
            return true;
        }
        
    }
    return false;
  }
  else if(donor=="AB-"){
    for (let i=0;i<ABm.length;i++){
        if (receiver==ABm[i]){
            return true;
        }
        
    }
    return false;
  }
  else if(donor=="AB+"){
      if(receiver==donor){
          return true;
      }
      return false;
  }

 }
 
 console.log(isEligible("O+", "A+")); 
 console.log(isEligible("A-", "B-")); 
 console.log(isEligible("A-", "AB+")); 