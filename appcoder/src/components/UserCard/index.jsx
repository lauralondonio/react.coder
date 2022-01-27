import "./styles.css";

function UserCard ({name, age, isHappy, saludar, elemento, isAdult}) {
    return (
    <div className="card">
        <p>Nombre: {name}</p>
        <p>Edad: {age}</p>
        <p>Esta feliz?: {`${isHappy}`}</p>
        <button onClick={saludar}>Decir hola</button>
        {elemento}
    </div>
    );
}
export default UserCard;