import {ElementPosiition} from './style';
import {IntroText} from '../../Components/TextAndIntro/index';
import {ButtonSite} from '../../Components/Button/index'

export function HomePage(){
    return(
        <div>
            <ButtonSite name='Bts'/>
            <ElementPosiition>
                <IntroText name='Jeison Rothmund' profission='Dev Front-end'/>
            </ElementPosiition>
        </div>
    );
}