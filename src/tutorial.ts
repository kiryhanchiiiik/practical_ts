function calculateDiscount(price: number) {
  const hasDiscount = false;

  if (hasDiscount) {
    return "Discount Applied";
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
