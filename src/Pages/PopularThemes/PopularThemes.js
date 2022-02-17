import { useState, useEffect } from 'react';
import style from './PopularThemes.module.scss';
import Duckduckgo from '../createScheme/duckduckgo/duckduckgo';
import { Button, Modal } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

import Themes from './data/themes.json';

const PopularThemes = (props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [code, setCode] = useState('');

	useEffect(() => {
		//shuffle the Themes
		Themes.sort(() => Math.random() - 0.5);
	}, []);

	const convertHexToBrowser = (hex) => {
		return `%23${hex.slice(-6)}`;
	};

	const convertHexToNum = (hex) => {
		return hex.slice(-6);
	};

	function openInBrowser(theme) {
		const url = `https://duckduckgo.com/?q=India
        &k9=${convertHexToBrowser(theme.resultTitle)}
        &k8=${convertHexToBrowser(theme.resultDesp)}
        &k7=${convertHexToBrowser(theme.background)}
        &kj=${convertHexToBrowser(theme.header)}
        &kx=${convertHexToBrowser(theme.resultURL)}
        &kaa=${convertHexToBrowser(theme.resultVisited)}`;
		window.open(url);
	}

	function getThisTheme(theme) {
		const code = `
	["ae=g","7=${convertHexToNum(theme.background)}","8=${convertHexToNum(
			theme.resultDesp
		)}","9=${convertHexToNum(theme.resultTitle)}","j=${convertHexToNum(
			theme.header
		)}","aa=${convertHexToNum(theme.resultVisited)}","x=${convertHexToNum(
			theme.resultURL
		)}"].forEach(e=>document.cookie=e);

        alert('Appearance settings have successfully been updated!');

        location.reload();
		`;
		setCode(code);
		setIsModalVisible(true);
	}

	return (
		<>
			<Modal
				className={style.modal}
				title="Get your theme ☺️"
				visible={isModalVisible}
				onOk={() => setIsModalVisible(false)}
				onCancel={() => setIsModalVisible(false)}
			>
				<p>Simplest way to apply this color scheme </p>
				<ul>
					<li>
						<p>
							Go to <a href="https://duckduckgo.com">duckduckgo.com 😀</a>
						</p>
					</li>
					<li>
						<p>
							Open browser console and paste below code. (Ctrl-Shift-C or
							Right-Click Inspect) 🤔
						</p>
						<CopyToClipboard
							text={code}
							onCopy={() => alert('copied to clipboard')}
						>
							<span
								style={{
									cursor: 'pointer',
									fontSize: '1.6rem',
									color: '#722ed1',
								}}
							>
								<MdContentCopy />
							</span>
						</CopyToClipboard>
						<code className={style.codeSnippet}>{code}</code>
					</li>
					<li>
						<p>Done! Enjoy you colors with privacy 🕵️</p>
					</li>
				</ul>
			</Modal>

			<div className={style.pageContainer}>
				{Themes.map((theme) => (
					<div className={style.singleTheme}>
						<h2 style={{ color: '#fff',width: "10%" }}>{theme.name}</h2>

						<div className={style.duckContainer}
							style={{boxShadow: `-20px -20px 75px -22px #fff, 20px 20px 75px -22px #fff !important`}}
							>
							<Duckduckgo
								background={`${theme.background}`}
								header={`${theme.header}`}
								resultTitle={`${theme.resultTitle}`}
								resultVisited={`${theme.resultVisited}`}
								resultDesp={`${theme.resultDesp}`}
								resultURL={`${theme.resultURL}`}
								searchBarChanged={() => {}}
								showInBrowser={() => {}}
							></Duckduckgo>
						</div>

						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Button style={{marginBottom: "1rem"}} onClick={openInBrowser.bind(this, theme)} type="primary">
								See in browser
							</Button>
							<Button onClick={getThisTheme.bind(this, theme)}>
								Get This Theme
							</Button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default PopularThemes;
