import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar/navbar';
import Navseparator from './Components/Navseparator/navseparator';
import Customintro from './Components/Intro/intro';
import { Request } from './Components/Request/request';
import { Plumbingservice } from './Components/Plumbingservice/plumbingservice';

function App() {
  return (
    <body>
      <CustomNavbar/>
      <Navseparator/>
      <Customintro/>
      <Request/>
      <Plumbingservice/>
      </body>
  );
}

export default App;
