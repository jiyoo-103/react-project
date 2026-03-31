import React from 'react'

const ProductCard = ({ item }) => {
  if (!item) return null;

  return (
    <div>
        <img src={item.img} alt={item.title} />
        {item.choice === true ? <div>Conscious choice</div> : null}
        <div>{item.title}</div>
        <div>{item.price}원</div>
        {item.new === true ? <div>신제품</div> : null}
    </div>
  )
}

export default ProductCard