import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";
import { SiAddthis } from "react-icons/si";
import {
  Cart,
  Title,
  CartItem,
  CartItems,
  ProductImage,
  ProductInfosWrapper,
  ProductTitle,
  Icon,
  ProductAmount,
  ProductAmountWrapper,
  DeleteIcon,
  ProductPrice,
  ProductInfos,
  ProductRow,
  CoupounsAndTotalWrapper,
  HorizontalRow,
  CouponTitle,
  CouponInput,
  CouponAddButton,
  CouponRow,
  Totals,
  TotalsInfos,
  CouponDiscountValue,
  BuyButton,
} from "./styles";
import { useCart } from "../../contexts/CartContext";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

function CartPage() {
  const {
    cartItems,
    totalPrice,
    totalItems,
    coupon,
    isUsingCoupon,
    alterProductAmount,
    deleteProduct,
    addCoupon,
  } = useCart();

  const [couponField, setCouponField] = useState("");

  function handleCouponInsertion() {
    addCoupon(couponField);
  }

  return (
    <Layout>
      <Cart>
        <Title>MY CART</Title>
        {cartItems.lenght === 0 ? (
          <p>carrinho vazio!</p>
        ) : (
          <CartItems>
            {cartItems.map((item) => (
              <>
                <CartItem key={item.id}>
                  <ProductImage
                    src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
                    alt={item.title}
                  />
                  <ProductInfosWrapper>
                    <ProductInfos>
                      <ProductTitle>{item.title}</ProductTitle>
                      <DeleteIcon onClick={() => deleteProduct(item.id)}>
                        <AiOutlineDelete />
                      </DeleteIcon>
                    </ProductInfos>
                    <ProductRow>
                      <ProductAmountWrapper>
                        <Icon
                          onClick={() =>
                            alterProductAmount("decrease", item.id)
                          }
                        >
                          <GoDiffRemoved />
                        </Icon>
                        <ProductAmount>{item.amount}</ProductAmount>
                        <Icon
                          onClick={() =>
                            alterProductAmount("increase", item.id)
                          }
                        >
                          <GoDiffAdded />
                        </Icon>
                      </ProductAmountWrapper>
                      <ProductPrice>
                        ${(item.prices[0].price * item.amount).toFixed(2)}
                      </ProductPrice>
                    </ProductRow>
                  </ProductInfosWrapper>
                </CartItem>
              </>
            ))}
            <HorizontalRow />
            <CoupounsAndTotalWrapper>
              <CouponTitle>Promo Code</CouponTitle>
              <CouponRow>
                <CouponInput type="text" placeholder="Enter Promo Code" />
                <CouponAddButton>
                  <SiAddthis />
                </CouponAddButton>
              </CouponRow>
              <Totals>
                <TotalsInfos>Amount</TotalsInfos>
                <TotalsInfos>${totalPrice.toFixed(2)}</TotalsInfos>
              </Totals>
              <Totals>
                <TotalsInfos>Promo Code</TotalsInfos>
                <CouponDiscountValue>
                  -{(totalPrice * 0.1).toFixed(2)}
                </CouponDiscountValue>
              </Totals>
              <HorizontalRow />
              <Totals>
                <TotalsInfos>Total</TotalsInfos>
                <TotalsInfos>{(totalPrice * 0.9).toFixed(2)}</TotalsInfos>
              </Totals>
            </CoupounsAndTotalWrapper>
            <BuyButton>Buy</BuyButton>
          </CartItems>
        )}
      </Cart>
    </Layout>
  );
}
export default CartPage;
