export interface Illustration {
  image: string;
  description: string;
  publishDate: string;
  url?: string;

}

export const illustrations: Illustration[] = [
  {
    image: "tsukinoyo_202505.png",
    description: "「バブル（Cover）」 MVイラスト - 月の夜、izu",
    publishDate: "2025.9.26",
    url: "https://www.nicovideo.jp/watch/sm45443011"
  },
  {
    image: "sou_202507.png",
    description: "「ブルースクリーン」 MVイラスト - Sou",
    publishDate: "2025.9.26",
    url: "https://www.nicovideo.jp/watch/sm45443011"
  }
]