import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import style from "./Home.module.scss";

const Home = (props) => {
	return (
		<>
        <div className={style.container}>
            
            <h1 className={style.title}>Surf The WEB with privacy in your own style</h1> 

			<Button type="primary">
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
