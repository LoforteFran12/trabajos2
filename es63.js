const rotation=(letter,num)=>{

    let alf="abcdefghijklmnñopqrstuvwxyz"
    let res="";
    
    for (let i=0; i<letter.length; i++){
    
        let index =alf.indexOf (letter[i]);
        let index2= (index + num) % alf.length;
    
        if (index2 < 0){
        
        index2+=alf.length;
        
        }
        
        res+=alf[index2];
    }
    
    return res;
    }
    
    console.log(rotation("Gyro",1))