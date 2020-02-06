var countChange = function(money, coins) {
    return countChangeHelper(money, coins);
}

// Helper function to use in original function
var countChangeHelper = function(money, coins) {
    // For when it easily adds up to money
    if (money === 0) {
        return 1;
    }
    // If it goes over money or we have no more coins left
    if (money < 0 || coins.length === 0) {
        return 0;
    }
    // Can split up into two sets,
    //   First set that has the coin at the end of coins array
    //   Second set that does not contain the coin
    return countChangeHelper(money - coins[coins.length-1], coins) + countChangeHelper(money, coins.slice(0,-1))
}
