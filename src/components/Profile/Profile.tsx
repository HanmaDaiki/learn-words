import { Header, Footer } from "../";
import './Profile.css';

const Profile: React.FC = () => {
  return(
    <>
      <Header />
      <main className='profile'>
        МОЙ ПРОФИЛЬ
      </main>
      <Footer />
    </>
  );
} 

export { Profile }