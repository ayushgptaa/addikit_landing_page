import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import EmailIllustrationSrc from 'images/Giftcard.png';
import Gift from 'images/Gift.png';
import { PrimaryButton } from 'helpers/Buttons';

const Container = tw.div`relative bg-bg2`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-center max-w-screen-xl mx-auto py-10 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto w-10/12`;
const TextColumn = styled(Column)(props => [
	tw`md:w-5/12 mt-16 md:mt-0`,
	props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div(props => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left `;

const Subheading = tw(SubheadingBase)`text-center md:text-left font-light text-textlight mt-4`;
const Heading = tw(
	SectionHeading
)`mt-4 text-white text-left text-3xl sm:text-4xl lg:text-3xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 text-textlight`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row items-center`;
const Input = styled.input`
	outline: none;
	background: #44356a;
	border: none;
	${tw`border-2 px-5 md:w-full rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500 text-black h-10`};
`;
const Description2 = tw(Description)`lg:text-base mx-0 w-full `;
const Flex = styled.div`
	.icon {
		height: 30px;
	}
	border-top: 1px solid rgba(226, 216, 255, 0.33);
	${tw`flex justify-between items-center lg:gap-5 gap-2 pt-2 mt-4 p-6 lg:p-2 `}
`;
const Button = tw(PrimaryButton)`md:mt-0 px-10 py-2 text-sm h-10  `;

//eslint-disable-next-line
export default ({
	subheading = 'Gift Cards are used as alternatives to credit cards in your profiles for processing payments.',
	heading = 'Gift Cards',
	description = 'Gift Card Groups allow you to organize your Gift Cards into folders.',
	formAction = '#',
	formMethod = 'get',
	textOnLeft = true,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={EmailIllustrationSrc} />
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						<Heading>{heading}</Heading>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Flex>
							<img className="icon" src={Gift} alt="" />
							<Description2>{description}</Description2>
						</Flex>
						<Form action={formAction} method={formMethod}>
							<Input type="email" name="email" placeholder="Your Email Address" />
							<Button>SEND</Button>
						</Form>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
