import logo from '/src/assets/logo.png'

export default function Header(){
    return (
        <>
            <nav>
                <img src={logo} alt="logo"></img>
                <h1>Chef Claude</h1>
            </nav>
            <div className='div-ingredient'>
                <input></input>
                <button>+ Ajouter un ingrédient</button>
            </div>
            

        </>
        
    )
}