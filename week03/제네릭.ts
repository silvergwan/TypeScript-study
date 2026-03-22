// 제네릭으로
function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstItem([1, 2, 3]); // T = number

const firstName = getFirstItem(["a", "b", "c"]); // T = string
// 타입 안전하게, 재사용 가능하게

// 금융 도메인 예시
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface Transaction {
  id: string;
  amount: number;
  createdAt: Date;
}

const response: ApiResponse<Transaction> = {
  data: { id: "txn_001", amount: 50000, createdAt: new Date() },
  status: 200,
  message: "success",
};
