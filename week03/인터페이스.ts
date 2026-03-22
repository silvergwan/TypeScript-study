// interface - 객체 구조 정의, 확장에 열려있음
interface User {
  id: string;
  name: string;
  balance: number;
}

// extends로 확장 가능 User 인터페이스를 기반으로 creditLimit 속성을 추가하여 PremiumUser 인터페이스를 선언
interface PremiumUser extends User {
  creditLimit: number;
}

// type - 더 유연함, 유니온/인터섹션 가능
type TransactionStatus = "pending" | "completed" | "failed"; // 유니온 타입
type AdminUser = User & { adminLevel: number }; // 인터섹션 타입

// 실전에서 언제?
// 객체 모양 → interface
// 유니온, 조합, 별칭 → type
