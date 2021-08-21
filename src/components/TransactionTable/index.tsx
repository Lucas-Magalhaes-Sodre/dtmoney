import { Container } from "./styles";




export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                        <td>Desenvolvimento Website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Trabalho</td>
                        <td>26/08/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$ 1.000</td>
                        <td>conta</td>
                        <td>26/08/2021</td>
                    </tr>
                </tbody>

            </table>

        </Container>
            
    );
}