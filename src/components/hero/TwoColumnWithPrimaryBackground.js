import React from 'react';
import tw from 'twin.macro';
import HeaderBase, {
	LogoLink as LogoLinkBase,
	NavLinks,
	NavLink as NavLinkBase,
	PrimaryLink as PrimaryLinkBase,
} from '../headers/light.js';
import { Container as ContainerBase, ContentWithVerticalPadding } from 'components/misc/Layouts.js';
import { SectionHeading } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import logoImageSrc from 'images/logo.png';
import Dashboard from 'images/Dashboard.png';
import { PrimaryButton, SecondaryButton } from 'helpers/Buttons.js';

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-main text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-4 -mx-8 px-16 md:px-20 `;
const NavLink = tw(
	NavLinkBase
)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100 lg:text-xs font-normal md:text-textlight border `;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(
	PrimaryLinkBase
)`shadow-raised md:bg-main lg:hocus:bg-primary-100 border border-primary-100 lg:text-xs font-normal md:text-textlight bg-primary-100 `;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col mx-auto `;
const Column = tw.div`pt-0`;
const TextColumn = tw.div`text-center mx-auto z-10`;
const IllustrationColumn = tw(Column)`lg:mt-16 lg:mt-0 mx-auto lg:-mt-32 z-0 relative `;
const Heading = tw(
	SectionHeading
)`max-w-3xl lg:max-w-xl lg:text-center leading-normal tracking-normal font-medium lg:text-3xl text-lg p-4 md:p-0`;
const Description = tw(
	SectionDescription
)`lg:mt-4 max-w-2xl lg:text-base mx-auto lg:mx-0 text-textlight font-medium mt-0 p-3 lg:p-0`;

const Image = tw.img`w-full `;

//eslint-disable-next-line
export default ({
	heading = 'The fastest, all-in-one bot. Supporting over 85 online retailers.',
	description = 'Best-in-class automation for dominating every release.',
	primaryButtonText = 'Learn more',
	secondaryButtonText = 'Sold out',
	primaryButtonUrl = '#',
	imageSrc = Dashboard,
}) => {
	const logoLink = (
		<LogoLink href="/">
			<img src={logoImageSrc} alt="Logo" />
		</LogoLink>
	);
	const navLinks = [
		<NavLinks key={1}>
			<NavLink href="/#">Wallet</NavLink>
			<NavLink href="/#">Product</NavLink>
			<NavLink href="/#">Dashboard</NavLink>
			<PrimaryLink href="#">Signup</PrimaryLink>
		</NavLinks>,
	];
	return (
		<PrimaryBackgroundContainer>
			<Header logoLink={logoLink} links={navLinks} />
			<Container>
				<ContentWithVerticalPadding>
					<Row>
						<TextColumn>
							<Heading>{heading}</Heading>
							<Description>{description}</Description>
							<PrimaryButton as="a" href={primaryButtonUrl}>
								{primaryButtonText}
							</PrimaryButton>
							<SecondaryButton as="a" href={primaryButtonUrl}>
								{secondaryButtonText}
							</SecondaryButton>
						</TextColumn>
						<IllustrationColumn>
							<Image src={imageSrc} />
						</IllustrationColumn>
					</Row>
				</ContentWithVerticalPadding>
			</Container>
		</PrimaryBackgroundContainer>
	);
};
