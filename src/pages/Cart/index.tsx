
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Header } from '../../components/Header';
import {
  Container,
  HeaderCartGame,
  BodyCartGame,
  ContentCart,
  ResumeRequest,
  NotExistProductsInCart,
} from './styles';

import plus from '../../assets/icons/plus.svg';
import subtract from '../../assets/icons/subtract.svg';
import { useCart } from '../../hook/cart';
import { formatPrice } from '../../utils/format';
import { Product } from '../../hook/cart/types';

export function Cart() {
  const { cart, updateProductAmount, removeProduct } = useCart();

  const submitRemoveProductCart = (productId: number) => {
    confirmAlert({
      title: "Deseja remove-lo do carrinho?",
      message: "Confirmação de remoção de produto do carrinho",
      buttons: [
        {

          label: 'Sim',
          onClick: () => removeProduct(productId),
        },
        {
          label: 'Não',
          onClick: () => null,
        },
      ],
    });
  };

  const cartFormatted = cart.map((product) => ({
    ...product,
    pricePartialFormatted: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  }));

  const subTotal = useMemo(() => formatPrice(
    cart.reduce((sumTotal, product) => sumTotal += (product.price * product.amount), 0),
  ), [cart]);

  const shipping = useMemo(() => {
    const totalWithShipping = cart
      .reduce((sumTotal, product) => sumTotal += (product.price * product.amount), 0);

    const totalAmount = cart.reduce((sumTotal, product) => sumTotal += product.amount, 0);

    if (totalWithShipping >= 250) {
      return 0;
    }
    return totalAmount * 10;
  }, [cart]);

  const total = useMemo(() => {
    const totalWithShipping = cart.reduce(
      (sumTotal, product) => sumTotal += (product.price * product.amount), 0,
    );


    return formatPrice(totalWithShipping + shipping);
  }, [cart, shipping]);

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    if (product.amount - 1 > 0) {
      updateProductAmount({ productId: product.id, amount: product.amount - 1 });
    }
  }

  return (
    <Container>
      <Header />

      <ContentCart>
        <h1 className="title">Carrinhos de compras</h1>

        <div className="wrapper-content">

          {cart.length > 0 ? (
            <div className="wrapperScroll">
              <table>
                <thead>
                  <HeaderCartGame>
                    <td>Produto</td>
                    <td>Preço</td>
                    <td>Quantidade</td>
                    <td>Total</td>
                  </HeaderCartGame>
                </thead>
                <tbody>
                  {cartFormatted.map((product) => (
                    <BodyCartGame key={product.id}>
                      <th>
                        <div className="card">
                          <div className="container-image">
                            <img src={product.image} alt={product.name} />
                          </div>

                          <div className="infoProduct">
                            <span className="name">{product.name}</span>
                            <span className="description">
                              {product.description}
                            </span>
                            <button
                              type="button"
                              onClick={() => submitRemoveProductCart(product.id)}
                            >
                              Remover produto
                            </button>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div className="price">
                          <span>{product.priceFormatted}</span>
                        </div>
                      </th>
                      <th>
                        <div className="amount">
                          <button
                            type="button"
                            disabled={!!(product.amount === 1)}
                            className="button"
                            onClick={() => handleProductDecrement(product)}
                          >
                            <img src={subtract} alt="subtract" />
                          </button>
                          <span className="amount-value">
                            {product.amount}
                          </span>
                          <button
                            type="button"
                            className="button"
                            onClick={() => handleProductIncrement(product)}
                          >
                            <img src={plus} alt="plus" />
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="pricePartial">
                          <span>{product.pricePartialFormatted}</span>
                        </div>
                      </th>
                    </BodyCartGame>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <NotExistProductsInCart>
              <h2>Não tem nenhum produto no carrinho</h2>
              <Link to="/games">Clique aqui para começar as compras</Link>
            </NotExistProductsInCart>
          )}
          <ResumeRequest>
            <h2>Resumo do pedido</h2>


            <span className="value-request">
              Subtotal:
              {' '}
              {subTotal}
            </span>
            {(shipping === 0 && cart.length > 0) ? (
              <span className="value-request shippingFree">Frete: grátis</span>
            ) : (
              <span className="value-request">
                Frete:
                {' '}
                {formatPrice(shipping)}
              </span>
            )}

            <span className="total">
              Total:
              {' '}
              {total}
            </span>


            <button
              type="submit"
              className="finally-buy"
            >
              Finalizar compra
            </button>
          </ResumeRequest>
        </div>
      </ContentCart>
    </Container>
  );
}
