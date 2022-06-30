import {NameMenu} from '../Links/index';
import {CentralContainer, ListMenu, PositionButton, PositionButtonHam} from './style';
import { useState } from 'react';
import {Equals, X} from 'phosphor-react';

export function MenuSite(){
    const [active, setActive] = useState(false)
    function ToggleMenu(){
        setActive(!active)
    }
    return(
        <div>
            <PositionButtonHam>
                 <Equals size={40} weight="bold" onClick={ToggleMenu} className="buttonActive" />
            </PositionButtonHam>
            <CentralContainer className={active ? 'active': ''}>
                <ListMenu >
                    <PositionButton>
                        <X size={40} weight="bold" onClick={ToggleMenu} className="buttonClose"/>
                    </PositionButton>
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