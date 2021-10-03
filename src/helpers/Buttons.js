import tw from 'twin.macro';
import { PrimaryLink as PrimaryButtonBase } from 'components/headers/light.js';

export const PrimaryButton = tw(
	PrimaryButtonBase
)`mt-4 font-normal text-xs py-2 px-4 mx-2 md:py-3 lg:px-6 sm:py-3 lg:mx-3 bg-primary-100 inline-block hocus:bg-primary-200 z-50`;

export const SecondaryButton = tw(PrimaryButton)`
bg-main border border-primary-100 hocus:bg-primary-100 z-50
`;
