import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css3.png";
import jsLogo from "../assets/javascript.png";
import phpLogo from "../assets/php.png";
import mysqlLogo from "../assets/mysql.png";
import laravelLogo from "../assets/laravel.png";
import symfonyLogo from "../assets/symfony.png";
import bootstrapLogo from "../assets/bootstrap.png";
import reactLogo from "../assets/react.png";
import wpLogo from "../assets/wordpress.png";



const logos = [htmlLogo, cssLogo, jsLogo, reactLogo, bootstrapLogo, phpLogo, laravelLogo, symfonyLogo, mysqlLogo, wpLogo];
const LogoScroller = () => {
    return (
        <div className="logo-scroller-container">
            <div className="logo-scroller">
                {[...logos, ...logos].map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="Logo partenaire"
                        className="logo-scroller-img"
                    />
                ))}
            </div>
        </div>
    );
};

export default LogoScroller;