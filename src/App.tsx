import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  interface User  {
    name: string,
    age: number,
    email: string
  }
  const u1 :User = {
    name:'rohit',
    age:26,
    email:"<EMAIL>"
  }
  console.log(u1)
  return (
    <div className='App'>
      hello world
    </div>
  );
}

export default App;
