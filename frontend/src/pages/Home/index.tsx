import Container from "../../components/Container"
import Filter from "./Filter"
import Hero from "./Hero"
import List from "./List"


const Home = () => {
  return (
   
      <Container>
        <Hero/>
        <div><Filter/></div>
        <div><List/></div>
      </Container>
  )
}

export default Home
