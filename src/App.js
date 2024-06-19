import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar/navbar';
import Navseparator from './Components/Navseparator/navseparator';
import Customintro from './Components/Intro/intro';
import { Request } from './Components/Request/request';
import { Plumbingservice } from './Components/Plumbingservice/plumbingservice';
import { Quotebanner } from './Components/Quotebanner/quotebanner';
import { Deliversection } from './Components/Deliversection/deliversection';
import { Repairsection } from './Components/Repairsection/repairsection';
import { Faqsection } from './Components/Faqsection/faqsection';
import { Joinplumbing } from './Components/Joinplumbing/joinplumbing';
import { Clients } from './Components/Clients/clients';
import { Footer } from './Components/Footer/footer';

function App() {
  return (
    <body>
      <CustomNavbar/>
      <Navseparator/>
      <Customintro/>
      <Request/>
      <Plumbingservice/>
      <Quotebanner/>
      <Navseparator/>
      <Deliversection/>
      <Repairsection/>
      <Faqsection/>
      <Joinplumbing/>
      <Clients />
      <Footer/>
      </body>
  );
}

export default App;
