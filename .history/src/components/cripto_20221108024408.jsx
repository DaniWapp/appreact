const  Cripto = (props) =>{

    const [state, setState] = useState({
        num1: 0,
        num2: 0,
    })

    const myRef = useRef()
    //#1 construido
    //#2 
    //Array estados disparadores
    useEffect(() => {
        console.log("Bienvenido");
        return () => {
            console.log("Desmontado");
        }
    }, [])

    return (
        <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
    )
}

export default Cripto