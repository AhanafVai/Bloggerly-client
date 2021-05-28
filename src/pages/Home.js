const { default: Carousel } = require("../components/Carousel/Carousel");
const { default: NavBar } = require("../components/NavBar/NavBar");

function Home() {
  return (
    <section className="homepage">
      <NavBar></NavBar>
      <Carousel></Carousel>
    </section>
  )
}

export default Home
