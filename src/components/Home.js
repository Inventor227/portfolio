import { BrowserRouter, Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/achievements">achievements</Link>
                    </li>
                    <li>
                        <Link to="/Projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/SocialHandles">SocialHandles</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Home;