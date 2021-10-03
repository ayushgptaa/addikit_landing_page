import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from 'components/misc/Headings.js';

const Container = styled.div`
	${({ bg }) => (bg === 'bg2' ? tw`relative bg-bg2` : tw`relative bg-black`)}
`;

const TwoColumn = styled.div`
	${tw`flex flex-col md:flex-row justify-evenly items-center max-w-screen-xl mx-auto lg:py-20  py-10 md:py-16 md:w-7/12`}
`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const Image = tw.img` md:w-6/12 w-10/12  `;
const TextColumn = styled(Column)(props => [
	tw`md:w-6/12 mt-8 md:mt-0`,
	props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8`;

const Heading = tw(
	SectionHeading
)`text-left text-2xl sm:text-4xl lg:text-3xl text-center md:text-left leading-tight font-extrabold text-white`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-base font-medium leading-relaxed text-textlight mt-4 w-10/12 mx-auto`;
const Description2 = tw(Description)`lg:text-base mx-0 w-full`;
const Flex = styled.div`
	.icon {
		height: 30px;
	}
	border-top: 1px solid rgba(226, 216, 255, 0.33);
	${tw`flex justify-between items-center lg:gap-5 gap-2 pt-2 mt-4 p-2 `}
`;
//eslint-disable-next-line
export default ({ bg, textOnLeft = false, heading, description, icon, description2, image }) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
	//Change the statistics variable as you like, add or delete objects

	return (
		<Container bg={bg}>
			<TwoColumn>
				<Image src={image} />
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<Flex>
							<img className="icon" src={icon} alt="" />
							<Description2>{description2}</Description2>
						</Flex>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
