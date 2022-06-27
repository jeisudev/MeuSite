import {Settings} from './style';


interface NamesSetting{
    name: string;
}
export function SettingsSite(props:NamesSetting){
    
    return(
        <Settings>
            <span>{props.name}</span>
        </Settings>
    );
}