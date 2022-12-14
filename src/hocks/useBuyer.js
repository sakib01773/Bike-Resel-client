import  { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false)

    const [isBuyerLoading, setIsBuyerLoadig] = useState(true)

    useEffect( () =>{
        if(email){
            fetch(`https://bike-resel-server.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setIsBuyer(data.isBuyer)
                setIsBuyerLoadig(false)
            })
        }
    },[email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;