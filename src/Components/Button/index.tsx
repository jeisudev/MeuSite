import {SideBtn} from './style';

interface NameButton{
    name: string;
}
export function ButtonSite(props:NameButton){
    return(
        <SideBtn>
            <span>{props.name}</span>
        </SideBtn>
    );
}