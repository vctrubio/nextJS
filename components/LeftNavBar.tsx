const HomieLogo = '/HomieLogo.png';
const ConfigLogo = '/Config.png';

export const LeftNavBar = () => {
    return (
        <div className="left-nav-bar">
            <>
                <ul>
                    <li>
                        <a href="/">
                            <img src={HomieLogo} alt="Homie" />
                            <div className="hide-mobil">
                                Cart
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin">
                            <img src={ConfigLogo} alt="Admin" />
                            <div className="hide-mobil">
                                Admin
                            </div>
                        </a>
                    </li>
                </ul>
            </>
            <div className="bottom-bar hide-mobil">
                auth
            </div>
        </div>
    );
}