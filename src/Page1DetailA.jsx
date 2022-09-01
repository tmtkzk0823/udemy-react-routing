import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();

  const onClickBack = () => history.goBack();

  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>page1DetailAページ</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
