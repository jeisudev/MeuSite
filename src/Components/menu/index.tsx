import {NameMenu} from '../Links/index';
import {Link} from 'react-router-dom';
import {CentralContainer, ListMenu} from './style';
import { useState } from 'react';

export function MenuSite(){
    const [active, setActive] = useState(false)
    function ToggleMenu(){
        setActive(!active)
    }
    return(
        <CentralContainer>
            <button type='button' onClick={ToggleMenu}>click</button>
            <ListMenu className={active ? 'active': ''}>
                <Link to="/">
                    <NameMenu name='Home'/>
                </Link>
                <Link to="/">
                    <NameMenu name='About Me'/>
                </Link>
                <Link to="/">
                    <NameMenu name='Skills'/>
                </Link>
                <Link to="/">
                    <NameMenu name='Contact'/>
                </Link>
            </ListMenu>
        </CentralContainer>
    );
}