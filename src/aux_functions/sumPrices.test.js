import sumPrices from "./sumPrices";

describe('sumPrice function', () => {

    const cart1 = [
        {
            price: 20.00,
            orderQtd: 2
        },
        {
            price: 10.00,
            orderQtd: 1
        },
        {
            price: 100.00,
            orderQtd: 3
        }
    ]

    test('empty cart returns 0', () => {
        expect(sumPrices([])).toEqual(0);
    })

    test('sum of order in cart 1 returns 350.00', () => {
        expect(sumPrices(cart1)).toEqual(350.00);
    })

});