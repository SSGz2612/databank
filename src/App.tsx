import AddData from './components/AddData';
import ListTable from './components/ListTable';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={ store }>
      <ListTable />
      <AddData />
    </Provider>
  );
}

export default App;
