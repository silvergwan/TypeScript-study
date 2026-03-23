// 은행 계좌(BankAccount) 인터페이스를 만들어라.
// 속성: accountNumber: string, owner: string, balance: number, status: "active" | "frozen" | "closed"
// 그리고 deposit(account: BankAccount, amount: number): BankAccount 함수를 만들어라. 잔액을 더한 새 계좌 객체를 반환해야 한다. (원본 변경 금지 - 불변성)
// 에러 처리: amount가 0 이하면 에러 던져라.

interface BankAccount {
  accountNumber: string; // 계좌번호
  owner: string; // 계좌주명
  balance: number; // 잔액
  status: "active" | "frozen" | "closed"; // 계좌 상태 active, 동결, 닫힘
}

const deposit = function (account: BankAccount, amount: number): BankAccount {
  // 함수 표현식, (account는 인터페이스에 따르고, 금액: 숫자) 반환 값은 인터페이스로
  if (amount <= 0) {
    throw new Error("에러 메시지");
  }
  // 에러처리
  return { ...account, balance: account.balance + amount };
  // 계좌(BankAccount 객체를 복사해 잔액: 계좌.잔액 + 금액)
};

const myAccount: BankAccount = {
  accountNumber: "110-123-456",
  owner: "최은관",
  balance: 1_000_000,
  status: "active",
};

const after = deposit(myAccount, 500_000);

console.log(myAccount.balance); // 1_000_000
console.log(after.balance); // 1_500_000

deposit(myAccount, -1000); // 에러 확인
