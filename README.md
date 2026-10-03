# A's SAT Words — 배포 가이드

딸의 SAT를 위해 엄마가 만든 단어 앱. Digital SAT 핵심 350단어, 하루 15분, 부모 리포트, Paddle 결제.

## 구성
```
public/                 정적 웹사이트 (Vercel, Netlify, Cloudflare Pages 어디든 그대로 업로드)
  index.html            랜딩 페이지 (스토리텔링, 가격, FAQ, 한/영 전환)
  app/index.html        학습 웹앱 (350단어 데이터 내장, 무료 1~3유닛, 부모 PIN 영역, Paddle 결제)
  config.js             Supabase·Paddle 키 설정 (비워두면 데모 모드)
  manifest.webmanifest  홈 화면 추가용 (PWA)
  legal/                이용약관·개인정보처리방침·환불정책 자리 (법률 검토본으로 교체)
supabase/
  schema.sql            DB 테이블 + 행 수준 보안(RLS)
  functions/paddle-webhook  결제 완료 → 이용권 부여, 환불 → 이용권 회수
  functions/guarantee       44일 완주 약속 판정 → 조건 충족 시 1개월 자동 연장
```

## 동작 원리
- **계정**: 부모 이메일로 로그인(비밀번호 없는 이메일 링크). 자녀는 같은 계정으로 공부하고, 리포트·결제·설정은 부모 PIN(4자리) 뒤에 있습니다. 자녀 개인정보(이메일 등)를 받지 않는 구조입니다.
- **무료 체험**: 1~3유닛(30단어). 4유닛부터 잠금.
- **3개월 프로그램**: 결제 시 90일 이용권. 활성 기간 중 재구매하면 기간이 뒤에 더해집니다.
- **44일 완주 약속**: 15분 플랜은 하루 10단어(하루 1유닛, 35일 완주). 결제일부터 44일 동안 35일 이상 공부했는데 350단어를 모두 시작하지 못했으면 1회, 30일 무료 연장 (서버에서 판정).
- **복습 연장권**: 30일 추가. 만료 후 구매하면 구매일부터 30일.
- **이용권은 서버만 기록**: 앱(사용자)은 entitlements를 읽기만 가능하고, Paddle 웹훅(서명 검증)과 guarantee 함수만 쓸 수 있습니다.

## 설정 순서 (약 반나절)
1. **Supabase** (supabase.com) 프로젝트 생성
   - SQL Editor에서 `supabase/schema.sql` 실행
   - Authentication > URL Configuration: Site URL에 배포 도메인, Redirect URLs에 `https://도메인/app/` 추가
   - Authentication > Email: 발신 메일을 회사 도메인으로 설정(SMTP) 권장
2. **Paddle** (paddle.com) 가입: 주식회사 위누(사업자등록번호 119-81-98826)로 신청, 한국 사업자 가입·정산 방식 확인
   - Catalog > Products: "3-month program"(가격 $39, 출시가는 할인 코드나 가격 $29로 운영), "30-day review pass"($7.99)
   - 각 가격에 **KRW 가격 지정(price override)**: 49,000원(또는 출시가 39,000원), 9,900원
   - Developer tools > Authentication: **client-side token** 발급
   - Developer tools > Notifications: 새 destination → URL `https://<프로젝트>.supabase.co/functions/v1/paddle-webhook`, 이벤트 `transaction.completed`, `adjustment.created`, `adjustment.updated` → **secret key** 복사
   - Checkout settings: 기본 결제 링크(default payment link)에 배포 도메인 등록, 도메인 승인 요청
3. **함수 배포** (Supabase CLI)
   ```
   supabase link --project-ref <ref>
   supabase secrets set PADDLE_WEBHOOK_SECRET=... PADDLE_PRICE_PROGRAM=pri_... PADDLE_PRICE_EXTENSION=pri_...
   supabase functions deploy paddle-webhook --no-verify-jwt
   supabase functions deploy guarantee
   ```
4. **config.js** 채우기: supabaseUrl, supabaseAnonKey, paddleClientToken, priceProgram, priceExtension, paddleEnv
5. **public/ 폴더 배포** (예: Vercel에 드래그 앤 드롭) → 도메인 연결
6. **샌드박스 테스트** → Paddle 테스트 카드로 결제 → 앱에서 4유닛 이상이 열리는지, 부모 영역에 "Full program active"가 뜨는지 확인 → 환불 테스트 → `paddleEnv: "production"`으로 전환

## 출시 전 체크리스트
- [ ] 이용약관·개인정보처리방침·환불정책 (법률 검토) → `public/legal/` 교체
- [x] 랜딩 푸터 사업자 정보: 주식회사 위누 (통신판매업 제2016-서울성동-00123호), 문의 admin@weenu.com 반영 완료
- [x] 랜딩 페이지 3개 언어(영어·한국어·중국어 간체) 지원, 시리즈 안내(Basic 350 · Challenge 300 · Extra 450) 섹션
- [ ] Challenge·Extra "출시 알림" 버튼은 현재 admin@weenu.com 메일 링크: 대기자 명단 폼(예: Supabase 테이블)으로 교체 권장
- [ ] 사이트 운영 주체 변경 시 통신판매업 신고 사항(인터넷 도메인 등) 변경신고 여부 성동구청에 확인
- [ ] 원어민 강사 예문 표본 검토 (5~10%)
- [ ] 라이선스 고지 유지: NAWL(CC BY-SA 4.0), WordNet 3.0 저작권 문구 (앱 Progress > Sources and licenses)
- [ ] SAT 상표 고지 유지 (College Board 비제휴 문구)
- [ ] 국내 매출 세무 처리 방식 세무사 확인

## 알려진 한계
- 완주 약속의 학습일은 앱이 기록한 학습 로그로 판정합니다. 기술적으로 조작이 불가능하지는 않지만, 약속의 비용(1개월 무료)이 작아 MVP에서는 허용 가능한 수준으로 판단했습니다.
- 데모 모드(config 비움)에서는 결제가 기기 안에서만 시뮬레이션됩니다.
