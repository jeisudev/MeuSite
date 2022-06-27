import {HeaderSite} from './style';
import {SettingsSite} from '../Names/index';

export function MenuSite(){
    return(
        <HeaderSite>
            <SettingsSite name='About Me' />
            <SettingsSite name='Skills' />
            <SettingsSite name='Portifoleo' />
            <SettingsSite name='Contato' />
        </HeaderSite>
    );
}