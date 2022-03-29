import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: "Ненужная вещь"}, 
        {id:1, value: 4, name: "Ложка"}, 
        {id:2, value: 0, name: "Вилка"},
        {id:3, value: 0, name: "Тарелка"},
        {id:4, value: 0, name: "Набор минималиста"},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id != id);
        setCounters(newCounters);
    }

    const handleReset = () => {
        setCounters(initialState);
    }

    const handleIncrement = (id) => {
        const elementIndex = counters.findIndex(c => c.id === id);
        const updatedCounters = [...counters];
        updatedCounters[elementIndex].value++;
        setCounters(updatedCounters);
    }
    
    const handleDecrement = (id) => {
        const elementIndex = counters.findIndex(c => c.id === id);
        const updatedCounters = [...counters];
        updatedCounters[elementIndex].value--;
        setCounters(updatedCounters);
    }

    return (
        <>
            {counters.map(count => (
                <Counter 
                    {...count}
                    key={count.id} 
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}/>
            ))}
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={handleReset}>
                Сброс
            </button>
        </>
    );
};

export default CountersList;