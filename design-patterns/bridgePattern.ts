interface Idiscount {
    applyDiscount(cartTotal: number): number
}



class PercentageDiscount implements Idiscount {
    private percentage: number;
    constructor(percentage: number) {
        this.percentage = percentage;
    }


    applyDiscount(cartTotal: number) {
        const discountedAmount = (cartTotal * this.percentage) / 100
        const newTotal = cartTotal - discountedAmount
        return newTotal
    }
}





interface CartItem {
    itemName: string,
    itemCost: string
}



class ShoppingCart implements CartItem {
    itemCost!: string
    itemName!: string
    private strategy!: Idiscount;
    private cartTotal: number = 0;

    private cartItems: string[] = []


    addItem(itemName: string, itemCost: number) {
        this.cartItems.push(itemName)
        this.cartTotal = this.cartTotal + itemCost
    }

    setStrategy(strat: Idiscount): void {
        this.strategy = strat

    }
    getSubTotal() {
        const finalTotal = this.strategy.applyDiscount(this.cartTotal)
        console.log(finalTotal)
    }


}

const percentageDiscount = new PercentageDiscount(15)

const cart = new ShoppingCart()

cart.addItem('phone', 10000)

cart.addItem('cover', 500)

cart.setStrategy(percentageDiscount)

cart.getSubTotal()


