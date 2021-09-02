import './style.css'


const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {

   return(

    isLoggedIn ? 
        <div> 
            <h1>Bem-vinda {user}</h1> 
            <button className='buttonStyleLogout' onClick={Logout}>Logout</button> 
        </div> 
        : 
        <div> 
            <h1>Você não pode acessar essa página :(</h1> 
            <button className='buttonStyleLogin' onClick={Login}>Login</button> 
        </div>
    
       )
}

export default RestrictedPage