import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  // console.log(process.env.REACT_APP_TMBD_KEY);
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}
export default App;
