import '../styles/pokemon.css';
import Col from 'react-bootstrap/Col'

const Pokemon = ({pokemon}) => {
    return (
        <Col>
            <h1>{pokemon.name}</h1>
        </Col>
      );
}
 
export default Pokemon;