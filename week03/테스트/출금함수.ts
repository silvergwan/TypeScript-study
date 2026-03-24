// 출금함수 만들기
// 잔액 부족하면 에러
// amount 0 이하면 에러
// 원본 변경 금지

interface BankAccount {
  readonly accountNumber: string; // 계좌번호
  owner: string; // 계좌주명
  balance: number; // 잔액
  status: "active" | "frozen" | "closed"; // 계좌 상태 active, 동결, 닫힘
  closedAt?: Date; // 있을 수도 없을 수도 있음
}

const withdraw = function (account: BankAccount, amount: number): BankAccount {
  if (amount <= 0) {
    throw new Error("출금하려는 금액이 0보다 커야합니다.");
  }
  if (account.balance < amount) {
    throw new Error("출금하려는 금액이 현재 잔액보다 큽니다.");
  }

  return { ...account, balance: account.balance - amount };
};

myAccount.accountNumber = "999-999-999";
// accountNumber 속성이 read-only(읽기 전용)이기에 수정 불가

const myAccount: BankAccount = {
  accountNumber: "110-123-456",
  owner: "최은관",
  balance: 1_000_000,
  status: "active",
};

const closedAccount: BankAccount = {
  accountNumber: "110-123-456",
  owner: "최은관",
  balance: 0,
  status: "closed",
  closedAt: new Date(),
};

console.log(closedAccount.closedAt);
console.log(withdraw(myAccount, 500_000).balance); // 500_000

try {
  withdraw(myAccount, -1000);
} catch (e) {
  if (e instanceof Error) console.log(e.message);
}

try {
  withdraw(myAccount, 2_000_000);
} catch (e) {
  if (e instanceof Error) console.log(e.message);
}
