import {Link} from "react-router-dom";
import Button from "../../ui/Button";

const Home = () => {
    return (
        <main className={'text-center flex flex-col items-center justify-center min-h-screen gap-4'}>
            <h1 className={'text-4xl font-bold'}>Welcome to El-Cafe</h1>
            <Link to={'/login'} >
                <Button>Login</Button>
            </Link>
        </main>
    )
}

export default Home