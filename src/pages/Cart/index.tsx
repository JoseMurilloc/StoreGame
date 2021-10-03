import { Header } from '../../components/Header'
import { 
  Container, CartOfGames, 
  HeaderCartGame, BodyCartGame,
  ContentCart, ResumeRequest
} from './styles'

import plus from '../../assets/icons/plus.svg'
import subtract from '../../assets/icons/subtract.svg'

export function Cart() {
  return (
    <Container>
      <Header />

      <ContentCart>
        <h1 className="title">Carrinhos de compras</h1>

        <div className="wrapper-content">
          <CartOfGames>
            <thead>
              <HeaderCartGame>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
              </HeaderCartGame>
            </thead>
            <tbody>
              <BodyCartGame>
                <th>
                  <div className="card">
                    <img 
                      src="https://static.cdn.pleno.news/2019/07/FUT-19-768x768.jpg" 
                      alt="fifa" 
                    />
                    <div className="infoProduct">
                      <span className="name">FIFA 18</span>
                      <span className="description">
                        FIFA 18 é um jogo eletrónico de futebol desenvolvido e publicado pela EA Sports, que foi lançado mundialmente em 1 de Novembro de 2017. 
                      </span>
                      <button>Remover produto</button>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="amount">
                    <button className="button">
                      <img src={subtract} alt="subtract" />
                    </button>
                    <span className="amount-value">1</span>
                    <button className="button">
                      <img src={plus} alt="plus" />
                    </button>
                  </div>
                
                </th>
                <th>
                  <div className="price">
                    <span>R$ 195.39</span>
                  </div>
                </th>
              </BodyCartGame>
            </tbody>
          </CartOfGames>
          <ResumeRequest>
            <h2>Resumo do pedido</h2>

            <span className="value-request">Subtotal: R$ 200</span>
            <span className="value-request">Frete: R$ 20</span>

            <span className="total">Total: R$ 220</span>

            <button className="finally-buy">
              Finalizar compra
            </button>
          </ResumeRequest>
        </div>
      </ContentCart>
    </Container>
  )
}