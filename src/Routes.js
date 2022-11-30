import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './components/index1';
import RecuperarSenha from './components/index2';
import Home from './components/index3';
import CadastroUsuario from './components/index4';
import Listas from './components/index5';
import Chat from './components/index6';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/RecuperarSenha' element={<RecuperarSenha/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/CadastroUsuario' element={<CadastroUsuario/>}/>
                <Route path='/Listas' element={<Listas/>}/>
                <Route path='/Chat' element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp; 