import Link from 'next/link';
const HomieLogo = '/HomieLogo.png';
const ConfigLogo = '/Config.png';
const CookLogo = '/Kitchen.webp';
const FinanceLogo = '/Finance.webp';

export const LeftNavBar = () => {
    return (
        <div className="left-nav-bar">
            <>
                <ul>
                    <li>
                        <Link href="/" passHref>
                            <img src={HomieLogo} alt="Homie" />
                            <div className="hide-mobil">
                                Cart
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/playground" passHref>
                            <img src={CookLogo} alt="Cook" />
                            <div className="hide-mobil">
                                Cook
                            </div>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/" passHref>
                            <img src={FinanceLogo} alt="Finance" />
                            <div className="hide-mobil">
                                $
                            </div>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/admin" passHref>
                            <img src={ConfigLogo} alt="Admin" />
                            <div className="hide-mobil">
                                Admin
                            </div>
                        </Link>
                    </li>
                </ul>
            </>
            <div className="bottom-bar hide-mobil">
                auth
            </div>
        </div>
    );
}