import axios from 'axios';
import './App.css';
import { INSTITUTIONS_API } from './config/constants';

function App() {
  const handleLogin = async (event) => {
    axios.defaults.baseURL = INSTITUTIONS_API
    const form_data = new FormData(event.target)
    const credentials = Object.fromEntries(form_data)
    const { data } = axios.post('login', credentials)
    console.log(data)
  }
  return (
    <div className="App">
      <form action="" onSubmit={handleLogin}>
        <input type="email" /><input type="password" />
        <button type='submit'>---</button>
      </form>
    </div>
  );
}

export default App;
