import React, { createContext }  from 'react';

const ResultsContext = createContext({});

const results = {
    won: 'Congratulations You Won The Game',
    lose: 'Sorry, you lose game, better luck next time!',
    Total: '5000',
    Dice: '5',
    player:'3',
    points: {win:'1660', lost:'100'}
}
    

export function ResultsProvider ({children}){
    return (
        <ResultsContext.Provider value ={{results}} >
            {children}
        </ResultsContext.Provider>
    )
};

export default ResultsContext