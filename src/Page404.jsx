import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページ無いよ</h1>
      <Link to="/">Topに戻る</Link>
    </div>
  );
};
