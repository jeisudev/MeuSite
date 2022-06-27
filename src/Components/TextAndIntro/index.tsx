import {PositionItens, SocialMedia, Title, Proff } from './style';
import {LinksIcons} from '../LinksBox/index';

interface Apresentation{
    name: string;
    profission:string;
}
export function IntroText(props:Apresentation){
    return(
        <PositionItens>
            <h3 className='styleIntro'>Ola eu sou</h3>
            <Title>{props.name}</Title>
            <Proff>{props.profission}</Proff>
            <SocialMedia>
                <LinksIcons />
                <LinksIcons />
                <LinksIcons />
            </SocialMedia>
        </PositionItens>
    );
}