import { Link } from "react-router-dom"
import Container from "../Container"


const Header = () => {
  return (
    <header className='border-b'>
   <Container designs="p-5 flex justify-between">
  
  <div className="flex gap-10">
    <h1 className="font-bold text-xl">Tripster</h1>
    <nav className="flex gap-5 items-center">
      <Link to="/" >Oteller</Link>
      <Link to="/" className="max-md:hidden" >Popüler</Link>
      <Link to="/admin/create" >Oluştur</Link>
    </nav>
  </div>
  <div className="items-center gap-2 flex">
    <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">Kayıt Ol</button>
    <button className="texr-white rounded-full bg-blue-500 py-1 px-5">Giriş Yap</button>
  </div>
  
   </Container>
    </header>
  )
}

export default Header
