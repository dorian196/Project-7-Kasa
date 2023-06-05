import Card from '../../components/Card/index'
import Banner from '../../components/Banner/index'
import falaise from '../../assets/falaise.png';

function Home() {
  return (
    <div>
      <Banner backgroundImage={falaise} text="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  );
}

export default Home;
