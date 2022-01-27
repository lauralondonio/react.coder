import UserCard from "../UserCard"

const CardContainer = () => {
    const saludar=()=>{
        console.log("holuu");
    };
    const isAdult = (age) => {
        return age >=18;
    };
    return (
    <>
     {/*-- aca va el <NavBar> <span>mi ecommerce</span>
        tambien entra el <CartWidget/>
        dentro del mismo </Navbar> */}
    <UserCard name="laura" age="23" saludar={saludar} isAdult={isAdult(40)}/>
    <UserCard name="maria" 
    children='children'
    age="22" isHappy = {true} elemento={<p>Esto viene del comp padre</p>}/>
    esto es un children
    </>
   );
};
export default CardContainer;