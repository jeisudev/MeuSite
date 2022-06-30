import {Conteudo, List} from './style';
import { Img } from 'react-image';
import linkedin from '../image/linkedin.png';
import github from '../image/github.png';
import twitter from '../../Components/image/twitter.png';

export function Catalogo(){
    return(
        <Conteudo>
            <List>
                <a className='ancora' href="#">
                    <Img className='img' src={linkedin} alt="linkedin" />
                </a>
            </List>
            <List>
                <a className='ancora' href="#">
                    <Img className='img' src={github} alt="github" />
                </a>
            </List>
            <List>
                <a className='ancora' href="#">
                    <Img className='img' src={twitter} alt="twitter" />
                </a>
            </List>
        </Conteudo>
    );
}