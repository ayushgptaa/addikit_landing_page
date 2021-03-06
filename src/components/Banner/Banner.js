import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from 'components/misc/Headings.js';
import Birdimage from 'images/Bird.png';
import logo from 'images/logo.png';
import { PrimaryButton } from 'helpers/Buttons';

const Container = tw.div`relative bg-main`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-center max-w-screen-xl mx-auto py-10 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto w-10/12`;
const TextColumn = styled(Column)(props => [
	tw`md:w-5/12  md:mt-0`,
	props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div(props => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left `;

const Heading = tw(
	SectionHeading
)`mt-4 text-white text-left text-2xl sm:text-4xl lg:text-3xl text-center md:text-left leading-tight font-normal p-1 md:py-0`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const Button = tw(PrimaryButton)` ml-0 text-sm`;
const Logo = tw.img`w-4/12 lg:mx-0 mx-auto lg:w-auto`;

//eslint-disable-next-line
export default ({
	heading = 'The fastest, all-in-one bot.Supporting over 85 online retailers.',
	description = 'Follow our Twitter to stay in the loop for the latest Noble updates and news.',
	textOnLeft = true,
}) => {
	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={Birdimage} />
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						<Logo src={logo} alt="" />
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<Button>Follow on Twitter</Button>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
