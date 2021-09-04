import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

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

	//js code
	const [themeCodeBox, setThemeCodeBox] = useState(null);

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

	const gotoBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	const generateThemeCode = () => {
		const code = `
	["ae=g","7=${convertHexToNum(background)}","8=${convertHexToNum(
			resultDesp
		)}","9=${convertHexToNum(resultTitle)}","j=${convertHexToNum(
			header
		)}","aa=${convertHexToNum(resultVisited)}","x=${convertHexToNum(
			resultURL
		)}"].forEach(e=>document.cookie=e);

        alert('Appearance settings have successfully been updated!');

        location.reload();
		`;
		console.log(code);

		setThemeCodeBox(
			<div className={style.containerCol}>
				<h4>simplest way to apply this color scheme </h4>
				<ul>
					<li>
						<p>
							go to <a href="https://duckduckgo.com">duckduckgo.com</a>
						</p>
					</li>
					<li>
						<p>
							open browser console and paste below code. (Ctrl-Shift-C or
							Right-Click Inspect)
						</p>
						<CopyToClipboard
							text={code}
							onCopy={() => alert('copied to clipboard')}
						>
							<span style={{ cursor: 'pointer', fontSize: '1.6rem' }}>
								<MdContentCopy />
							</span>
						</CopyToClipboard>
						<pre>{code}</pre>
					</li>
					<li>
						<p>done! Enjoy you colors with privacy</p>
					</li>
				</ul>
			</div>
		);
	};

	return (
		<>
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
					<button onClick={generateThemeCode}>
						<div onClick={gotoBottom}>Get This Theme</div>
					</button>
					<Link to="/popular">Select from popular themes</Link>
				</div>
			</div>

			{themeCodeBox}
		</>
	);
};

export default CreateScheme;
