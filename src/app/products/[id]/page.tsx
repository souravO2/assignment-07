import ProductContent from '@/components/shared/ProductContent';
import React, { Suspense } from 'react';

const ProductPage = ({params} : {params : Promise<{id : string}>}) => {
  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
      <ProductContent params={params}/>
    </Suspense>
  );
};

export default ProductPage;