import{Link} from 'react-router-dom'
import styles2 from './index2.module.css'
import { FaEnvelope } from 'react-icons/fa' ;
 
function RecuperarSenha(){
    return(
        <div className={styles2.body2}>
        <div className={styles2.container2}>
        <div className={styles2.loginForm2}>
            <div className={styles2.title2}>Recuperar Senha</div>
                <form action='#'>
                    <div className={styles2.inputBox2}>
                    <FaEnvelope className={styles2.icons2}/>
                    <input  className={styles2.input2} type="text" placeholder='Enter your email' required/>
                    </div>
                    <div className={styles2.inputBox2}>
                        <input className={styles2.input2} type="submit" vaule="Enviar"/>
                    </div>
                    <div className={styles2.sigupText2}>
                        Não tenho uma conta? <a className={styles2.a2} href='#'>Crie uma agora</a>
                    </div>
                </form>
            </div>

            <div className={styles2.loginImg2}>
                <img src="/fav.jpeg" width="100%"/>
            </div>
        </div>
        </div>
    ); 
}

export default RecuperarSenha;