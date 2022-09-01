import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページ</h1>
      <Link to="/page2/１２３">UrlPrameter</Link>
      <br />
      <Link to="/page2/999?name=うひょ">QueryPrameter</Link>
    </div>
  );
};
