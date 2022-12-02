import styles3 from './index3.module.css'
import{Link} from 'react-router-dom';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub,FaWhatsapp,FaUserCircle,FaRegUserCircle } from 'react-icons/fa' ;

function Home(){
    return(
        <div className={styles3.container3}> 

            <nav className={styles3.nav3}>
                <div className={styles3.logo3}>
                    <a href="index.html">CMTECH</a>
                </div>
                <ul className={styles3.ul3}>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Home</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Serviços</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Team</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Blog</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">nos contacte</a></li>
                    <li className={styles3.li3}><a className={styles3.a3} href="#">Login</a></li>
                    <a className={styles3.a3}><FaUserCircle className={styles3.icons3}/></a>    
                </ul>
                <div className={styles3.menuIcon3}>
                    <img src='/fav.jpeg'/>
                </div>
            </nav>

            <main className={styles3.main3}>
                <div className={styles3.textBx3}>
                    <h1 className={styles3.h13}> Preparados para o mundo digital? <br /> <b> Transforme seu negócio com a gente. </b> </h1><br /><br />
                    <p className={styles3.p3}>
                    Conte com a nossa inteligência humana em soluções digitais. A CMTECH se renova e inova. 
                            Evolui e está pronta para fazer sua empresa evoluir. Para isso, desenvolve soluções 
                            completas para transformar seu negócio, levá-lo numa viagem sem volta para o mundo digital. 
                            Prontos para o futuro agora? Vem com a CMTECH!
                    </p>
                    <br /><br />
                    <div className={styles3.input3}>
                        <input className={styles3.input3} type="email" placeholder="Endereço de email"/>
                        <button className={styles3.button3}>Ver Mais</button>
                    </div>
<br /><br /><br /><br />
                    <div className={styles3.t3}>
                            <a><FaFacebook className={styles3.icons3}/></a>
                            <a><FaGoogle className={styles3.icons3}/></a>
                            <a><FaGithub className={styles3.icons3}/></a>
                            <a><FaInstagram className={styles3.icons3}/></a>
                            <a><FaWhatsapp className={styles3.icons3}/></a>     

                    </div>
                </div>


                <div className={styles3.imgBX3}>
                    <img src='./fav.jpeg' />
                </div>
            </main>
    </div>
    );
    
} 

export default Home;