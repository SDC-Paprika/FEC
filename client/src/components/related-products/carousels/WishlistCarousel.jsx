import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import React, { useState, useEffect } from 'react';
import WishlistCard from './WishlistCard.jsx';
import AddButton from '../subcomponents/AddButton.jsx';

import {
  WishlistCarouselWrapper,
  WishlistCardsContainer,
  WishlistCardsWrapper,
  ContentWrapper,
  Content,
  WishlistContainer,
} from '../../../theme/carouselStyle.js';

import {
  ScaledLeftArrow,
  ScaledRightArrow,
  WishlistLeftChevron,
  RightChevron,
  DeactivatedLeftChevron,
  DeactivatedRightChevron,
  DefaultCard,
} from '../../../theme/buttonStyle.js';

export default function WishlistCarousel({
  currentProduct,
  products,
  handleProductChange,
  setWishlistProducts,
  wishlistProducts,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);

  // determines the initial number of product cards shown on page
  const maxDisplayCount = 3;

  // determines the total number of cards
  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const prev = () => {
    if (currentIndex < length - maxDisplayCount) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const next = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <WishlistCarouselWrapper>
      <DefaultCard>
        <AddButton
          product={currentProduct}
          wishlistProducts={wishlistProducts}
          setWishlistProducts={setWishlistProducts}
        />
      </DefaultCard>
      <WishlistContainer className='wishlist-container'>

        <WishlistCardsContainer className='wishlist-cards-container'>
          <WishlistCardsWrapper className='wishlist-cards-wrapper'>

            { length <= maxDisplayCount
              ? (<div></div>)
              : currentIndex < length - maxDisplayCount ? (
              <WishlistLeftChevron className="left-arrow" onClick={prev}>
                <ScaledLeftArrow />
              </WishlistLeftChevron>
            ) : (
              <DeactivatedLeftChevron className="left-arrow">
                <ScaledLeftArrow />
              </DeactivatedLeftChevron>
            )}

            <ContentWrapper>
              <Content
                style={{
                  transform: `translateX(-${currentIndex * (100 / maxDisplayCount)}%)`,
                }}
              >
                <WishlistCard
                  maxDisplayCount={maxDisplayCount}
                  products={products}
                  handleProductChange={handleProductChange}
                  wishlistProducts={wishlistProducts}
                  setWishlistProducts={setWishlistProducts}
                />
              </Content>
            </ContentWrapper>

            { length <= maxDisplayCount
              ? (<div></div>)
              : currentIndex > 0 ? (
              <RightChevron className="right-arrow" onClick={next}>
                <ScaledRightArrow />
              </RightChevron>
            ) : (
              <DeactivatedRightChevron className="right-arrow">
                <ScaledRightArrow />
              </DeactivatedRightChevron>
            )}

          </WishlistCardsWrapper>
        </WishlistCardsContainer>

      </WishlistContainer>
    </WishlistCarouselWrapper>
  );
}
