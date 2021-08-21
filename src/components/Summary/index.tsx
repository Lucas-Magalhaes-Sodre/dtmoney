import { Container } from "./styles";
import IncomeSvg from '../../assets/Entradas.svg';
import ExitsSvg from '../../assets/Saídas.svg';
import TotalSvg from '../../assets/Total.svg';

export function Summary() {
return(
<Container>
    <div>
        <header>
            <p>
                Entradas
            </p>
            <img src={IncomeSvg} alt="Simbolo Entradas" />
        </header>
        <strong>R$ 1000,00 </strong>
    </div>

    <div>
        <header>
            <p>
                Saídas
            </p>
            <img src={ExitsSvg} alt="Simbolo Saídas" />
        </header>
        <strong>- R$ 500,00 </strong>
    </div>

    <div className="mudar-cor" >
        <header>
            <p>
                Total
            </p>
            <img src={TotalSvg} alt="Simbolo Total" />
        </header>
        <strong>R$ 500,00 </strong>
    </div>
</Container>

);
}