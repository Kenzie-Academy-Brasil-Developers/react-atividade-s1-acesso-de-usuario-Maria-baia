import './style.css'

function RestrictedPage({isLoggedIn, user, Login, Logout}){
    return(
        <>
            {isLoggedIn ?(
                <>
                    <p>Bem-vindo(a) {user}</p>
                    <button onClick={() => Logout()}>Logout</button>
                </>
            ):(
                <>
                    <p>Você não pode acessar essa página</p>
                    <button onClick={() => Login()}>Login</button>
                </>
            )}
        </>
    )
}

export default RestrictedPage