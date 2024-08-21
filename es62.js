    const number = [12,53,37,66,44,128,88]
    
    function copypairs(){

        const acum = number.filter(b => b % 2 === 0);

        console.log(acum)
    }

    copypairs();