import { MenuSite } from "../../Components/menu/index";
import {Catalogo} from '../../Components/LinkSite/index';
import {Container} from './style';


export function HomePage(){
    
    return(
        <div>
            <MenuSite />
            <Container>
                <Catalogo />
            </Container>
        </div>
    );
}