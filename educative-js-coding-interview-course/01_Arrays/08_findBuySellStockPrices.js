/*
  **** Statement ****
  We are given an array of daily stock prices (integers). Return the buying & selling
  prices for making maximum profit.

  Values in the array represent the cost of stock each day. As we can buy and sell
  the stock only once, we need to find the best buy and sell prices that maximize profit
  (or minimized loss) over a given span of time.

  We need to maximize the profit from a single buy and sell. If we can't make any profit,
  we will try to minimize the loss.

  Example:
  1) stockNums = [7,1,5,3,6,4]; output = 2,5 (buy at 1 and sell at 6)
  2) stockNums = [21,12,11,9,6,3]; output = 2,3 (buy at 12 and sell at 11)
*/

// ******************************************************************** //
//               First approach. TC = O(n * n), SC = O(1)               //
// ******************************************************************** //

/**
 * To maximize profit (naive approach)
 * @param {Array} stockNums
 * @returns {Array}
 */
function findBuySellStockPrices_1(stockNums) {
  const stockNumsLen = stockNums.length;
  let sellPrice, costPrice, grossProfit;

  if ((!stockNums) || (stockNumsLen < 2)) {
    return;
  }

  for (let i = 0; i < stockNumsLen - 1; i++) {
    for (let j = i + 1; j < stockNumsLen; j++) {
      const profit = stockNums[j] - stockNums[i];
      if ((grossProfit === undefined) || (profit > grossProfit)) {
        grossProfit = profit;
        sellPrice = stockNums[j];
        costPrice = stockNums[i];
      }
    }
  }

  return [costPrice, sellPrice];
}

console.log('-------- Soln_1 ---------');
console.log(findBuySellStockPrices_1([7,1,5,3,6,4]));
console.log(findBuySellStockPrices_1([21,12,11,9,6,3]));


// ******************************************************************** //
//             Second approach. TC = O(n), SC = O(1)                    //
// ******************************************************************** //

/**
 * To maximize profit (best approach)
 * @param {Array} stockNums
 * @returns {Array}
 */
function findBuySellStockPrices_2(stockNums) {
  if (!stockNums || (stockNums.length < 2)) {
    return;
  }

  let currentBuy = stockNums[0];
  let globalSell = stockNums[1];

  let globalProfit = globalSell - currentBuy;
  let currentProfit = 0;

  for (let i = 1; i < stockNums.length; i++) {
    currentProfit = stockNums[i] - currentBuy;
    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = stockNums[i];
    }
    if (currentBuy > stockNums[i]) {
      currentBuy = stockNums[i];
    }
  }

  return [globalSell - globalProfit, globalSell];
}

console.log('-------- Soln_2 ---------');
console.log(findBuySellStockPrices_2([7,1,5,3,6,4]));
console.log(findBuySellStockPrices_2([21,12,11,9,6,3]));
console.log(findBuySellStockPrices_2([12,30,40,90,110]));
