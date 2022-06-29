import {NameLink} from './style';


interface NamesProps{
    name: string;
}
export function NameMenu(props:NamesProps){
    return(
        <NameLink>
            <span>{props.name}</span>
        </NameLink>
    );
}