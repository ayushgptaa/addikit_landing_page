import 'tailwindcss/dist/base.css';
import './App.css';
import Hero from 'components/hero/TwoColumnWithPrimaryBackground';
import Pricing from 'components/pricing/TwoPlansWithDurationSwitcher';
import Features from 'components/Features/TwoColSingleFeatureWithStats';
import Faqs from 'components/faqs/SimpleWithSideImage';
import Form from 'components/forms/TwoColContactUsWithIllustration';
import Banner from 'components/Banner/Banner';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Footer from 'components/Footer/FiveColumnDark';
import arrowright from './images/arrow-right-icon.svg';
import clock from './images/clock-icon.svg';
import Checkout from './images/Checkouts.png';
import Automation from './images/Automation.png';

const style = {
	color: '#704EA7',
};

function App() {
	return (
		<AnimationRevealPage disabled>
			<Hero />
			<Features
				bg="bg2"
				textOnLeft={true}
				heading="Global Feed"
				description="The Global Feed tracks checkouts across different users."
				icon={arrowright}
				description2="Best-in-class automation for dominating every release."
				image={Checkout}
			/>
			<Pricing />
			<Features
				textOnLeft={false}
				heading="Automation"
				description={
					<>
						Whenever a product restocks that matches a SKU in your SKU List,
						<span style={style}> Automation will automatically start </span> any existing Monitors in all of
						your Task Groups.
					</>
				}
				icon={clock}
				description2="Easily create Monitors for that product in all your Task Groups."
				image={Automation}
			/>
			<Faqs />
			<Form />
			<Banner />
			<Footer />
		</AnimationRevealPage>
	);
}

export default App;
