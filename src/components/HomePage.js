import Navbar from './Navbar';
import Konvertor from './Konvertor';


function HomePage() {

    const natpis = "ITEH - React - Treći domaći zadatak";

    return (
        <div className="homepage">
            <Navbar />
            <Konvertor natpis={natpis} />
        </div>
    );
}

export default HomePage;