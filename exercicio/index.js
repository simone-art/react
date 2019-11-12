const Header = props =>{
    return (
    <header>
    <p>{props.titulo}</p>

    </header>
    )
}

function App (props){
    return (
        <header
        titulo = "Reprograma"
        nome = "Mell"
        idade = "27" 
        />
    )
}