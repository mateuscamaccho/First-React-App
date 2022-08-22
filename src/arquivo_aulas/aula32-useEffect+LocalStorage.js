import { useState, useEffect } from 'react';

function App() {


    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Aprender Inglês!",
        "Aprender ReactJS!"
    ]);

    // useEffect when page load
    useEffect(() => {
        // on load tarefasStorage receive de content of local storage- key @tarefa
        const tarefasStorage = localStorage.getItem('@tarefa');

        // if tarefasStorage is not empty, add data on useState tarefas
        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])

    //useEffect when hava any change on useState tarefas
    useEffect(() => {

        //to save an item on local storage needs to set a key, in this case @tarefa
        // and send data like a string, so use JSON.stringify()
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleRegister(e) {
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <h1> Digite uma tarefa:</h1>
            <form onSubmit={handleRegister}>
                <label>Nome:</label><br />
                <input type="text" id="input1"
                    placeholder="Digite uma tarefa...."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />
                <button type="submit">Registrar</button>
            </form>

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

