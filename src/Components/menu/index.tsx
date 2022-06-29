import {NameMenu} from '../Links/index';
import {CentralContainer, ListMenu} from './style';
import { useState } from 'react';

export function MenuSite(){
    const [active, setActive] = useState(false)
    function ToggleMenu(){
        setActive(!active)
    }
    return(
        <div>
        <button type='button' onClick={ToggleMenu}>active</button>
            <CentralContainer className={!active ? 'active': ''}>
                <ListMenu >
                    <span>
                        <NameMenu name='Home'/>
                    </span>
                    <span>
                        <NameMenu name='About Me'/>
                    </span>
                    <span>
                        <NameMenu name='Skills'/>
                    </span>
                    <span>
                        <NameMenu name='Contact'/>
                    </span>
                </ListMenu>
            </CentralContainer>
        </div>
    );
}