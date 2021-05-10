import style from './duckduckgo.module.scss';

import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiDuckduckgo } from 'react-icons/si';
import { RiToggleFill } from 'react-icons/ri';
import { CgChevronDown } from 'react-icons/cg';
import { ImWikipedia } from 'react-icons/im';

var Color = require('color');

const Duckduckgo = (props) => {
	return (
		<div
			className={style.container}
			style={{ backgroundColor: Color(props.background) }}
		>
			<div
				className={style.topbar}
				style={{
					backgroundColor: props.header,
					boxShadow: `0 0.1rem 0.2rem ${Color(props.header).lighten(0.3)}`,
				}}
			>
				<SiDuckduckgo
					className={style.duckduckgoIcon}
					style={{ color: Color(props.header).negate().grayscale() }}
				/>
				<BsSearch
					className={style.searchIcon}
					style={{ color: Color(props.header).negate().grayscale() }}
					onClick={props.showInBrowser}
				/>
				<input
					onChange={props.searchBarChanged}
					type="text"
					className={style.searchBar}
					placeholder="Style me up"
					style={{
						color: Color(props.header).negate().grayscale(),
						backgroundColor: Color(props.header).darken(0.2),
						border: `1px solid ${Color(props.header).darken(0.2)}`,
						boxShadow: `0 0.1rem 0.15rem ${Color(props.header).darken(0.4)}`,
					}}
				/>
				<GiHamburgerMenu
					className={style.burgerIcon}
					style={{ color: Color(props.header).negate().grayscale() }}
				/>

				<ul
					className={style.menuBar}
					style={{ color: Color(props.header).negate().grayscale() }}
				>
					<li>
						<p>
							<strong>All</strong>
						</p>
					</li>
					<li>
						<p>Images</p>
					</li>
					<li>
						<p>Videos</p>
					</li>
					<li>
						<p>News</p>
					</li>
					<li>
						<p>Maps</p>
					</li>
				</ul>
			</div>

			<div className={style.row}>
				<ul
					className={style.menuBar2}
					style={{ color: Color(props.background).negate().grayscale() }}
				>
					<li>
						<RiToggleFill />
						<p>India(en)</p>
						<CgChevronDown />
					</li>
					<li></li>
					<li>
						<p>Safe Search: moderate</p>
						<CgChevronDown />
					</li>
					<li>
						<p>Any time </p>
						<CgChevronDown />
					</li>
				</ul>
			</div>

			<div className={style.searchResult}>
				<p style={{ color: Color(props.resultTitle) }}>India - Wikipedia</p>
				<p
					className={style.searchResult__link}
					style={{ color: Color(props.resultURL) }}
				>
					<ImWikipedia /> https://en.wikipedia.org/wiki/India
				</p>
				<p
					style={{ color: Color(props.resultDesp) }}
					className={style.searchResult__desp}
				>
					India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat
					Gaṇarājya), is a country in South Asia.It is the second-most populous
					country, the seventh-largest country by land area, and the most
					populous democracy in the world. Bounded by the Indian Ocean on the
					south, the Arabian Sea on the southwest, and the Bay of Bengal...
				</p>
			</div>

			<div className={style.searchResult}>
				<p style={{ color: Color(props.resultTitle) }}>
					India - Simple English Wikipedia, the free encyclopedia
				</p>
				<p
					className={style.searchResult__link}
					style={{ color: Color(props.resultURL) }}
				>
					<ImWikipedia /> https://simple.wikipedia.org/wiki/India
				</p>
				<p
					style={{ color: Color(props.resultDesp) }}
					className={style.searchResult__desp}
				>
					India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat
					Gaṇarājya) is a country in South Asia.It is second largest country in
					population and seventh largest country by land area. It is also the
					most populous democracy in the world, bounded by the Indian Ocean on
					the south...
				</p>
			</div>

			<div className={style.searchResult}>
				<p style={{ color: Color(props.resultVisited) }}>
					History of India - Wikipedia
				</p>
				<p
					className={style.searchResult__link}
					style={{ color: Color(props.resultURL) }}
				>
					<ImWikipedia /> https://en.wikipedia.org/wiki/History_of_India
				</p>
				<p
					style={{ color: Color(props.resultDesp) }}
					className={style.searchResult__desp}
				>
					The Indian rebellion of 1857 was a large-scale rebellion by soldiers
					employed by the British East India Company in northern and central
					India against the company's rule. The spark that led to the mutiny was
					the issue of new gunpowder cartridges for the Enfield rifle...
				</p>
			</div>
		</div>
	);
};

export default Duckduckgo;
