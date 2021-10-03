import tw from 'twin.macro';
import { PrimaryLink as PrimaryButtonBase } from 'components/headers/light.js';

export const PrimaryButton = tw(
	PrimaryButtonBase
)`mt-4 font-normal sm:text-xs py-5 sm:px-6 sm:py-3 mx-3 bg-primary-100 inline-block hocus:bg-primary-200 `;

export const SecondaryButton = tw(PrimaryButton)`
bg-main border border-primary-100 hocus:bg-primary-100
`;
