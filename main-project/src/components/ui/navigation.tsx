import { CodeIcon, PersonIcon, ImageIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Home from "../../assets/icons/home.svg";

function Navigation() {
    return (
        <div className="flex">
            <ul className="flex flex-col items-center justify-center p-1 gap-1 w-16 bg-bg-navigation rounded-full border shadow-nav backdrop-blur-lg">
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full bg-bg-selected :before">
                    <a className="flex items-center justify-center relative w-14 h-14" href="#"> 
                        <img src={Home} alt="home" width={25} height={25}/>
                        <span className="absolute bottom-0 contrast-50">.</span>
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="#">
                        <CodeIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="#">
                        <PersonIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="#">
                        <ImageIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>

                <span className="bg-border-separator w-8 h-0.5 rounded-full"></span>

                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="https://www.linkedin.com/in/ggirardii">
                        <LinkedInLogoIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="https://github.com/GabrielGirardi">
                        <GitHubLogoIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;

