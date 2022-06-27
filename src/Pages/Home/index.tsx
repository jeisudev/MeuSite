import {ElementPosiition} from './style';
import {IntroText} from '../../Components/TextAndIntro/index';
import {ImageBack} from '../../Components/FrontPage/index'

export function HomePage(){
    return(
        <div>
            <ElementPosiition>
                <IntroText name='Jeison Rothmund' profission='Dev Front-end'/>
                <ImageBack />
            </ElementPosiition>
        </div>
    );
}