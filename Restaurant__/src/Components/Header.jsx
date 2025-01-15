import '../styles/header.css';

function Header() {

    return (
        <>
            <header className="header">
                <h1>❁ G@L@XY Restaurant ❁</h1>
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#menu">MENU</a></li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Header;