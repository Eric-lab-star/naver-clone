export interface IWebtoon {
  id: number;
  img: string;
  title: string;
  author: string;
  uploadDate:
    | "수요일"
    | "월요일"
    | "금요일"
    | "목요일"
    | "토요일"
    | "일요일"
    | "화요일";
  category: "웹툰" | "시리즈 장르소설" | "시리즈 만화" | "웹소설";
  ranking: number;
}

export const WebToonDB: IWebtoon[] = [
  {
    id: 0,
    img: "/",
    title: "내 남편과 결혼해줘",
    author: "LICO",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 1,
  },
  {
    id: 1,
    img: "/",
    title: "전지적 독자 시점",
    author: "UMI, 슬리피-C",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 2,
  },
  {
    id: 2,
    img: "/",
    title: "나쁜 사람",
    author: "둠스",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 3,
  },
  {
    id: 3,
    img: "/",
    title: "튜토리얼 탑의 고인물",
    author: "토프",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 4,
  },
  {
    id: 4,
    img: "/",
    title: "일렉시드",
    author: "손제호, 제나",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 5,
  },
  {
    id: 5,
    img: "/",
    title: "급식아빠",
    author: "김재한",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 6,
  },
  {
    id: 6,
    img: "/",
    title: "빌드업",
    author: "911",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 7,
  },
  {
    id: 7,
    img: "/",
    title: "먹는 인생",
    author: "홍끼",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 8,
  },
  {
    id: 8,
    img: "/",
    title: "내가 죽기로 결심한 것은",
    author: "YUJU",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 9,
  },
  {
    id: 9,
    img: "/",
    title: "연놈",
    author: "상하",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 10,
  },
  {
    id: 10,
    img: "/",
    title: "내 남편과 결혼해줘",
    author: "LICO",
    uploadDate: "수요일",
    category: "웹툰",
    ranking: 11,
  },
];
