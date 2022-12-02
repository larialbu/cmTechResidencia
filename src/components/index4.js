import{Link} from 'react-router-dom'
import styles4 from './index4.module.css'
import { FaEnvelope, FaLock, FaUser} from 'react-icons/fa' ;

function CadastroUsuario(){{
    return(
        <div className={styles4.body4}>
        <div className={styles4.container4}>
        <div className={styles4.loginForm4}>
            <div className={styles4.title4}>Cadastre-se</div>
            <form action='#'>
                <div className={styles4.inputBox4}>
                   <FaUser className={styles4.icons4}/>
                   <input className={styles4.input4} type="text" placeholder='Nome' required/>
                </div>
                <div className={styles4.inputBox4}>
                   <FaEnvelope className={styles4.icons4}/>
                   <input  className={styles4.input4} type="text" placeholder='Email' required/>
                </div>
 
                <div className={styles4.inputBox4}>
                    <FaLock className={styles4.icons4}/>
                   <input  className={styles4.input4} type="password" placeholder='Senha' required/>
                </div> 

                <div className={styles4.inputBox4}>
                    <input className={styles4.input4} type="submit" vaule="Cadastrar"/>
                </div>
            </form>
        </div>

        <div className={styles4.loginImg4}>
            <img src="/fav.jpeg" width="100%"/>
        </div>
        </div>
        </div>
    );
}}

export default CadastroUsuario;