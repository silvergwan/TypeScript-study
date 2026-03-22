// TypeScript - 코드가 계약서
interface Account {
  id: string;
  balance: number;
}

function transfer(from: Account, to: Account, amount: number): number {
  return from.balance - amount;
}

transfer("계좌", { id: 1 }, "천원");
//'string' 형식의 인수는 'Account' 형식의 매개 변수에 할당될 수 없습니다.
