import Layout from "../../components/Layout";
import "./Home.scss";
import Button from "../../components/Button";

const Home = () => {
    return (
        <Layout>
            <section className="hero-section">
                <div className="hero-section__text">
                    <h1 className="hero-section__text--heading">Find the perfect hotel.</h1>
                    <p className="hero-section__text--para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
                <Button url="hotels" text="Book Now" />
            </section>
        </Layout>
    )
}

export default Home;