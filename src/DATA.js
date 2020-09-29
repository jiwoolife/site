export const DATA = [
  {
    no: 1,
    category: "장례지도사",
    products: [{ product: "장례지도사 + 입관상례사(필수)", price: 47 }],
    explain: "국가공인 1급 장례지도사",
  },
  {
    no: 2,
    category: "장례복지사(도우미)",
    products: [{ product: "인원수 선택(0~10)", price: 8 }],
    explain: "1인 1일 8시간 기준",
  },
  {
    no: 3,
    category: "장례용품",
    products: [{ product: "입관, 빈소, 위생용품 일체(필수)", price: 0 }],
    explain:
      "관보, 명정, 결관보, 한지, 안치대, 입관부속, 알코올, 탈지면, 위생티슈 파우다, 소취제, 수시포, 수시매트. 수시배게 등",
  },
  {
    no: 4,
    category: "관",
    products: [
      { product: "탈관 및 화장용 (필수)", price: 0 },
      { product: "매장용 일반", price: 25 },
      { product: "매장용 고급", price: 50 },
    ],
    explain: "장법에 따라 화장용, 매장용 구분",
  },
  {
    no: 5,
    category: "횡대(매장)",
    products: [
      { product: "선택안함(매장시에만 필요)", price: 0 },
      { product: "집성목", price: 9 },
      { product: "통판목", price: 19 },
    ],
    explain: "매장시 관 위에 덮는 널빤지",
  },
  {
    no: 6,
    category: "수의",
    products: [
      { product: "화장용 일반수의 (필수)", price: 0 },
      { product: "화장용 고급수의", price: 25 },
      { product: "화장용 최고급수의", price: 60 },
      { product: "매장용 일반수의", price: 15 },
      { product: "매장용 고급수의", price: 35 },
      { product: "매장용 최고급수의", price: 60 },
    ],
    explain: "고인께 입혀드리는 옷: 대마 / 저마 / 기계직 / 수제직",
  },
  {
    no: 7,
    category: "유골함",
    products: [
      { product: "산골함(목함)", price: 2 },
      { product: "도자기 유골함", price: 20 },
      { product: "고급 도자기 유골함", price: 50 },
    ],
    explain: "화장 후 유골을 담는 함: 장묘방법(자연장, 봉안당)에 맞춰 선택",
  },
  {
    no: 8,
    category: "남자상복",
    products: [{ product: "수량선택(0~10)", price: 3 }],
    explain: "검정색 정장 대여",
  },
  {
    no: 9,
    category: "여자상복",
    products: [{ product: "수량선택(0~10)", price: 2 }],
    explain: "검정색 개량한복 대여",
  },
  {
    no: 10,
    category: "앰뷸런스 운구이송",
    products: [
      { product: "선택안함", price: 0 },
      { product: "관내운구(사전상담혜택)", price: 0 },
      { product: "관외운구", price: 0 },
    ],
    explain: "사망지 -> 장례식장 까지 운구: 지역상이, 거리비례 요금(상담필요)",
  },
  {
    no: 11,
    category: "장의버스",
    products: [
      { product: "왕복 200km 이내 (필수)", price: 40 },
      { product: "왕복 300km 이내", price: 60 },
    ],
    explain: "장례식장 -> 1차장지(화장장/매장지)",
  },
  {
    no: 12,
    category: "고인 리무진",
    products: [
      { product: "선택안함", price: 0 },
      { product: "왕복 100km 이내", price: 40 },
      { product: "왕복 200km 이내", price: 60 },
    ],
    explain: "고인전용 리무진: 장례식장 -> 1차장지(화장장/매장지)",
  },
  {
    no: 13,
    category: "제단 꽃장식",
    products: [
      { product: "선택안함", price: 0 },
      { product: "기본형", price: 19 },
      { product: "고급형", price: 49 },
      { product: "VIP", price: 99 },
    ],
    explain: "빈소 제단장식: 지역, 장례식장별 구성 상이(상담필요)",
  },
  {
    no: 14,
    category: "기타 제공서비스",
    products: [
      { product: "행정서비스", price: 0 },
      { product: "영정사진", price: 0 },
      { product: "일회용품 / 세면도구", price: 0 },
    ],
    explain: "장지안내, 화장장 예약, 각종 증명서류 발급 등",
  },
];

export const PREORDER = [
  { title: "전국 협약장례식장 할인", content: "지역별 상이, 유선안내" },
  { title: "장지 동행답사", content: "납골당, 수목장, 공원묘지 등" },
  { title: "임종시 긴급이송(관내)", content: "앰뷸런스 운구이송" },
  { title: "임관시 꽃관장식 서비스", content: "생화, 한지 꽃장식" },
  { title: "발인시 운구인원 지원", content: "" },
];
