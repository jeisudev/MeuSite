import {ButtonStyle} from './style';

interface NameButton{
    name: string;
}
export function ButtonGlobal(props:NameButton){
    return(
        <ButtonStyle>
            <span>{props.name}</span>
        </ButtonStyle>
    );
}