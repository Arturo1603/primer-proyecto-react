const Counter = (props) =>{
    // destructuraremos por temas de mejor legibilidad
    const {counter, increment, decrease} = props
    return(
        // *destructurando
        <div>
        <h2>Contador: {counter}</h2>
        {/* 2 botones uno para sumar y otro para restar */}
        <button onClick={increment}>+</button>
        <button onClick={decrease}>-</button>
    </div>


        // *Sin destructurar
        // <div>
        //     <h2>Contador: {props.counter}</h2>
        //     {/* 2 botones uno para sumar y otro para restar */}
        //     <button onClick={props.increment}>+</button>
        //     <button onClick={props.decrease}>-</button>
        // </div>
    )
}
export default Counter;