import{Link} from 'react-router-dom';
import styles5 from './index5.module.css';

function Listas(){
    return(

        <div className={styles5.body}>
            <h2>Listagem de Usuario</h2>
            <button className={styles5.button}> adicionar </button>
                <div class="container">
                    <div class="table-responsive">
                        <table class="table" width="1000px" text-align="center">
                            <tr className={styles5.button}>
                                <th>id </th>
                                <th>nome </th>
                                <th>email </th>
                                <th>senha </th>
                            </tr>

                            <tr className={styles5.button}>
                                <td>1 </td>
                                <td>marciel</td>
                                <td>CMTEHC@gmail.com</td>
                                <td>CMTech</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>2</td>
                                <td>luiza</td>
                                <td>CMTEHC@gmail.com</td>
                                <td>CMTech</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>3 </td>
                                <td>kleiton</td>
                                <td>CMTEHC@gmail.com</td>
                                <td>CMTech</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>3 </td>
                                <td>jose</td>
                                <td>CMTEHC@gmail.com</td>
                                <td>CMTech</td>
                            </tr>
                            <tr className={styles5.button}>
                                <td>4 </td>
                                <td>jussara</td>
                                <td>CMTEHC@gmail.com</td>
                                <td>CMTech</td>
                            </tr>
                        </table>

                    </div>
                </div>

                <h2>Listagem de Organização</h2>
            <button className={styles5.button}> adicionar </button>
                {/* <table>  */}
                <div class="container">
                    <div class="table-responsive">
                        <table class="table" width="1000px" text-align="center">
                            <tr className={styles5.button}>
                                <th>id </th>
                                <th>empresa </th>
                                <th>Segmento </th>
                                <th>contato </th>
                            </tr>

                            <tr className={styles5.button}>
                                <td>0 </td>
                                <td>CMTECH</td>
                                <td>Tecnologia da informação</td>
                                <td>810000-0000</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>1</td>
                                <td>CMTECH </td>
                                <td>Tecnologia da informação</td>
                                <td>810000-0000</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>2 </td>
                                <td>CMTECH</td>
                                <td>desenvolvimento</td>
                                <td>810000-0000</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>3 </td>
                                <td>CMTECH</td>
                                <td>desenvolvimento</td>
                                <td>810000-0000</td>
                            </tr>
                            <tr className={styles5.button}>
                                <td>4 </td>
                                <td>CMTECH</td>
                                <td>desenvolvimento</td>
                                <td>810000-0000</td>
                            </tr>
                        </table>

                    </div>
                </div>

                <h2>Listagem de Grupos</h2>
            <button className={styles5.button}> adicionar </button>
                {/* <table>  */}
                <div class="container">
                    <div class="table-responsive">
                        <table class="table" width="1000px" text-align="center">
                            <tr className={styles5.button}>
                                <th>id </th>
                                <th>nome </th>
                                <th>quantidade integrandes </th>
                                <th>custo </th>
                            </tr>

                            <tr className={styles5.button}>
                                <td>1 </td>
                                <td>a</td>
                                <td>3</td>
                                <td>R$10000.00</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>2</td>
                                <td>b </td>
                                <td>4</td>
                                <td>R$10000.00</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>3 </td>
                                <td>c</td>
                                <td>4</td>
                                <td>R$10000.00</td>
                            </tr>

                            <tr className={styles5.button}>
                                <td>4 </td>
                                <td>d</td>
                                <td>5</td>
                                <td>R$10000.00</td>
                            </tr>
                            <tr className={styles5.button}>
                                <td>5 </td>
                                <td>e</td>
                                <td>3</td>
                                <td>R$10000.00</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>

            
    );
}

export default Listas;
