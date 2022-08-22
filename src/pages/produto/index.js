import { useParams } from 'react-router-dom';

function Produto() {

    const { id } = useParams();

    return (
        <div>
            Meu produto é { id }
        </div>
    )
}

export default Produto;