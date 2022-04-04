import React, { useState } from 'react';
// import getData from '../../helper.js';

import { GlobalStyle } from '../theme/globalStyle.js';

import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

// an example with 6 related products --> id: 37318
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState({
    id: 37311,
    campus: 'hr-rfe',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: 140.00,
    created_at: '2021-08-13T14:37:33.145Z',
    updated_at: '2021-08-13T14:37:33.145Z',
    features: [
      {
        feature: 'Fabric',
        value: 'Canvas',
      },
      {
        feature: 'Buttons',
        value: 'Brass',
      },
    ],
  });

  return (
    <>
      <GlobalStyle />
      <ProductInfo product={selectedProduct} />
      <RelatedProducts product={selectedProduct} />
      <QA product={selectedProduct} />
      <RatingsReviews product={selectedProduct} />
    </>
  );
}