import React from 'react'
import { useFetch,useCounter } from '../hooks'
import { LoadingQuote,Quote } from '../03-examples';

export const Layout = () => {


    const {counter,increment,decrement,reset} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const{author,quote}=!!data && data[0]

  
    // console.log({ data, isLoading, hasError })

    // if (isLoading)
    //     return (<h1>Loading...</h1>)
    return (
        <>
            <h1>BreakingBad Quotes</h1>

            <hr />

            {
                isLoading
                    ?<LoadingQuote/>
                    :<Quote author={author} quote={quote} />

            }

            <button 
                className='btn btn-primary' 
                disabled={isLoading}
                onClick={()=>increment()}>
                Next quote

            </button>



        </>
    )
}
