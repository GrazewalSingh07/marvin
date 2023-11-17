 
import './App.css';
import { Header } from './component/Header';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div style={{background:'url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm428-0019b-krfvx8vh.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=840a9c653f399bbed671d123caf77883)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
      <div className="p-10 m-auto max-w-[90%]">
      <Navbar/>
      <Header/>
      </div>
    </div>
  );
}

export default App;
