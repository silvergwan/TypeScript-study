interface Account {
  id: string;
  balance: number;
}

function transfer(from: Account, to: Account, amount: number): number {
  return from.balance - amount;
}

// 당연히 이렇게 써야함
const accountA: Account = { id: "acc_001", balance: 1_000_000 };
const accountB: Account = { id: "acc_002", balance: 500_000 };

console.log(transfer(accountA, accountB, 100_000)); // 900000
