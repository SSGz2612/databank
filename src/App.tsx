import ListTable from './components/ListTable';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={ store }>
      <ListTable />
    </Provider>
  );
}

export default App;
