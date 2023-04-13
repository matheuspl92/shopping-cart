const sumPrices = (cart) => {
    let initialValue = 0;
    return cart.reduce(
        (accumulator, order) => accumulator + order.price * order.orderQtd,
        initialValue
      );
} 

export default sumPrices;