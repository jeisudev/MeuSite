import {ButtonStyle} from './style';

interface NameButton{
    name: string;
}
export function ButtonGlobal(props:NameButton){
    return(
        <ButtonStyle>
            <span>
                <a href="#">{props.name}</a>
            </span>
        </ButtonStyle>
    );
}