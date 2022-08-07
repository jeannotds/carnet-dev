



const NiveauLearner = ({niveau}) =>{
  

    if(niveau === 1){
        return (
            <div>Junior</div>
        )
    }
    else if(niveau === 2){
        return(
            <div>Intermediare</div>
        )
    }
    else{
        return (
            <div>Senoir</div>
        )
    }

}

export default NiveauLearner