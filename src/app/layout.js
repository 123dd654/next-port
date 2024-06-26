
export const metadata = {
  title: "Next.js",
  description: "Next.js를 이용한 포트폴리오 사이트입니다.",
  keyword: ["포트폴리오","넥트스","넥스트제이에스","서연의포트폴리오"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
