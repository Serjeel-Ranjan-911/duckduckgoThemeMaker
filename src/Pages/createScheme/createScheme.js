import { useState } from 'react';

import Duckduckgo from './duckduckgo/duckduckgo';

import style from './createScheme.module.scss';

const CreateScheme = (props) => {
	//maintaining colors
	const [background, setBackground] = useState('#ffffff');
	const [header, setHeader] = useState('#262626');
	const [resultTitle, setResultTitle] = useState('#1a0dab');
	const [resultVisited, setResultVisited] = useState('#5500a3');
	const [resultDesp, setResultDesp] = useState('#444444');
	const [resultURL, setResultURL] = useState('#006621');

	//input
	const [searchBox, setSearchBox] = useState('india wiki');

	const convertHexToBrowser = (hex) => {
		return `%23${hex.slice(-6)}`;
	};

	const convertHexToNum = (hex) => {
		return hex.slice(-6);
	};

	const showInBrowser = () => {
		const url = `https://duckduckgo.com/?q=${searchBox.replace(' ', '+')}
        &k9=${convertHexToBrowser(resultTitle)}
        &k8=${convertHexToBrowser(resultDesp)}
        &k7=${convertHexToBrowser(background)}
        &kj=${convertHexToBrowser(header)}
        &kx=${convertHexToBrowser(resultURL)}
        &kaa=${convertHexToBrowser(resultVisited)}`;
		window.open(url);
	};

	const generateThemeCode = () => {
		const code = `["ae=-1","7=${convertHexToNum(background)}","8=${convertHexToNum(
			resultDesp
		)}","9=${convertHexToNum(resultTitle)}","j=${convertHexToNum(
			header
		)}","aa=${convertHexToNum(resultVisited)}","x=${convertHexToNum(
			resultURL
		)}"].forEach(e=>document.cookie=e);
        alert('Appearance settings have successfully been updated!');
        location.reload();`;
		console.log(code);
	};

	return (
		<div className={style.container}>
			<Duckduckgo
				background={background}
				header={header}
				resultTitle={resultTitle}
				resultVisited={resultVisited}
				resultDesp={resultDesp}
				resultURL={resultURL}
				searchBarChanged={(e) => setSearchBox(e.target.value)}
				showInBrowser={showInBrowser}
			></Duckduckgo>

			<div className={style.colorMenu}>
				<div className={style.colorMenu__picker}>
					<label>Background Color</label>
					<input
						type="color"
						onChange={(e) => setBackground(e.target.value)}
						value={background}
					/>
				</div>

				<div className={style.colorMenu__picker}>
					<label>Header Color</label>
					<input
						type="color"
						onChange={(e) => setHeader(e.target.value)}
						value={header}
					/>
				</div>

				<div className={style.colorMenu__picker}>
					<label>Result Title Color</label>
					<input
						type="color"
						onChange={(e) => setResultTitle(e.target.value)}
						value={resultTitle}
					/>
				</div>

				<div className={style.colorMenu__picker}>
					<label>Result Visited Color</label>
					<input
						type="color"
						onChange={(e) => setResultVisited(e.target.value)}
						value={resultVisited}
					/>
				</div>

				<div className={style.colorMenu__picker}>
					<label>Result Description Color</label>
					<input
						type="color"
						onChange={(e) => setResultDesp(e.target.value)}
						value={resultDesp}
					/>
				</div>

				<div className={style.colorMenu__picker}>
					<label>Result URL Color</label>
					<input
						type="color"
						onChange={(e) => setResultURL(e.target.value)}
						value={resultURL}
					/>
				</div>
				<button onClick={showInBrowser}>See in browser</button>
				<button onClick={generateThemeCode}>Get This Theme</button>
				<button>Select from popular themes</button>
			</div>
		</div>
	);
};

export default CreateScheme;
