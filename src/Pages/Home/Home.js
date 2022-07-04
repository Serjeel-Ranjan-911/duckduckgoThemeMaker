import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import style from "./Home.module.scss";

const Home = (props) => {
	return (
		<>
        <div className={style.container}>
            <img src="https://logos-marques.com/wp-content/uploads/2021/03/DuckDuckGo-Logo-2012-2048x1158.png" alt="duckduckgolog"></img>
            <h1 className={style.title}>Surf The WEB with privacy in your own style</h1> 

			<Button type="primary" class = "button">
				<Link to="/create-scheme">Create Your own theme</Link>
			</Button>

			<Button type="primary">
				<Link to="/popular">Popular Themes</Link>
			</Button>
        </div>
		</>
	);
};

export default Home;
