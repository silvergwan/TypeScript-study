// 원시 타입
const userId: string = "user_001";
const balance: number = 1_000_000;
const isActive: boolean = true;

// TypeScript는 추론한다
const userIdd = "user_001"; // string으로 자동 추론
const balancee = 1_000_000; // number로 자동 추론

// 타입 명시가 진짜 필요한 순간은 이때
function getBalance(userId: string): number {
  // 매개변수와 반환값 - 여기서 명시해야 계약이 생김
  return 1_000_000;
}
