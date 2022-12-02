import {Link} from 'react-router-dom';
import styles6 from './index6.module.css';

function Chat(){
    return(
        <div className={styles6.body6}>
          <div className={styles6.container6}>
            <div className={styles6.header6}>
              <h1>WebChat</h1>
            </div>
            <div className={styles6.body6}>
              <p className={styles6.message6}>Hello</p>
              <p className={styles6.user_message6}>Hi</p>
            </div>
            <div className={styles6.fooder}>
              <form className={styles6.form6}>
                <input type="text" name="" placeholder="Digite aqui"/>
                <button>Enviar</button>
              </form>
            </div>
          </div>
		  </div>

    );

}

export default Chat;