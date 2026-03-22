// JavaScript
function transferr(from, to, amount) {
  return from.balance - amount;
}

transferr("계좌", { id: 1 }, "천원");
// 런타임에서 터짐.
