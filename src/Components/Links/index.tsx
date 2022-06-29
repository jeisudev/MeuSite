import {NameLink} from './style';


interface NamesProps{
    nome: string;
}
export function NameMenu(props:NamesProps){
    return(
        <NameLink>
            <span>{props.nome}</span>
        </NameLink>
    );
}