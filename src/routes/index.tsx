import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContactMe} from '../Pages/contact/index';

export function RoutesSite(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"/>
                <Route path="about"/>
                <Route path="skills"/>
                <Route path="contact" element={<ContactMe />}/>
            </Routes>
        </BrowserRouter>
    );
}