import { CodeIcon, PersonIcon, ImageIcon, LinkedInLogoIcon, MobileIcon } from "@radix-ui/react-icons";
import Home from "../../assets/icons/home.svg";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Navigation: React.FC<{ paginaAtiva: string; onMenuClick: (pagina: string) => void }> = ({ paginaAtiva, onMenuClick }) => {
    const changePage = (pagina: string) => {
  
        onMenuClick(pagina);
    };

    const showSwal = () => {
        withReactContent(Swal).fire({
          title: <i>Função em desenvolvimento...</i>,
            text: "Em breve vai estar disponível para uso",
            icon: "warning",
        })
      }

    

    return (
        <div className="flex w-full lg:w-full">
            <ul className="flex flex-row items-center justify-start p-1 gap-1 w-full bg-bg-navigation rounded-full border shadow-nav backdrop-blur-lg lg:justify-center lg:flex-col lg:w-16">
                <li className={'home flex items-center justify-center w-14 h-14 overflow-hidden rounded-full :before ' + `${paginaAtiva === 'home' ? 'bg-bg-selected' : ''}`} onClick={() => changePage('home')}>
                    <a className="flex items-center justify-center relative w-14 h-14" href="#"> 
                        <img src={Home} alt="home" width={25} height={25}/>
                        <span className={'absolute bottom-0 contrast-50 ' + `${paginaAtiva === 'home' ? 'flex' : 'hidden'}`}>.</span>
                    </a>
                </li>
                <li className={'projects flex items-center justify-center w-14 h-14 overflow-hidden rounded-full ' + `${paginaAtiva === 'projects' ? 'bg-bg-selected' : ''}`} onClick={() => changePage('projects')}>
                    <a className="flex items-center justify-center relative w-14 h-14" href="#">
                        <CodeIcon className="contrast-50" width={25} height={25} />
                        <span className={'absolute bottom-0 contrast-50 ' + `${paginaAtiva === 'projects' ? 'flex' : 'hidden'}`}>.</span>
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full" onClick={showSwal}>
                    <a className="flex items-center justify-center relative w-14 h-14" href="#">
                        <PersonIcon className="contrast-50" width={25} height={25} />
                        <span className={'absolute bottom-0 contrast-50 ' + `${paginaAtiva === 'about' ? 'flex' : 'hidden'}`}>.</span>
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full" onClick={showSwal}>
                    <a className="flex items-center justify-center w-14 relative h-14" href="#">
                        <ImageIcon className="contrast-50" width={25} height={25} />
                        <span className={'absolute bottom-0 contrast-50 ' + `${paginaAtiva === 'gallery' ? 'flex' : 'hidden'}`}>.</span>
                    </a>
                </li>

                <span className="bg-border-separator w-8 h-0.5 rounded-full hidden lg:block"></span>

                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="https://www.linkedin.com/in/ggirardii">
                        <LinkedInLogoIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" href="https://github.com/GabrielGirardi">
                        <MobileIcon className="contrast-50" width={25} height={25} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;

