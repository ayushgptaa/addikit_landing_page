import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import { ReactComponent as PlusIcon } from 'feather-icons/dist/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'feather-icons/dist/icons/minus.svg';
import Faqimage from '../../images/faq.png';

const Container = tw.div`relative`;
const Content = tw.div`w-full mx-auto py-16 lg:py-20  `;
const TwoColumn = tw.div`flex justify-center gap-10 content-center`;
const Image = tw.img` w-4/12 h-72 `;
const FAQContent = tw.div`max-w-lg`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left text-white text-3xl`;
const FAQSContainer = tw.dl`mt-12 w-2/3`;
const FAQ = tw.div`cursor-pointer mt-8 select-none  px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex items-center`;
const QuestionText = tw.span`text-lg lg:text-sm font-semibold text-textlight pl-4`;
const QuestionToggleIcon = styled.span`
	${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300 `}
	svg {
		${tw`w-4 h-4`}
	}
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed text-textlight pl-4 `);

//eslint-disable-next-line
export default ({ subheading = '', heading = 'FAQ', faqs = null }) => {
	/*
	 * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
	 * the faqs prop
	 */
	const defaultFaqs = [
		{
			question: 'Is the bot easy to set up?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'Do you have 2 Bedroom suites ?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'Are Wi-Fi costs included in the price ?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'Where can I reach you for support ?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
	];

	if (!faqs || faqs.length === 0) faqs = defaultFaqs;

	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

	const toggleQuestion = questionIndex => {
		if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
		else setActiveQuestionIndex(questionIndex);
	};

	return (
		<Container>
			<Content>
				<TwoColumn>
					<Image src={Faqimage} />
					<FAQContent>
						{subheading ? <Subheading>{subheading}</Subheading> : null}
						<Heading>{heading}</Heading>
						<FAQSContainer>
							{faqs.map((faq, index) => (
								<FAQ
									key={index}
									onClick={() => {
										toggleQuestion(index);
									}}
									className="group">
									<Question>
										<QuestionToggleIcon>
											{activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
										</QuestionToggleIcon>
										<QuestionText>{faq.question}</QuestionText>
									</Question>
									<Answer
										variants={{
											open: { opacity: 1, height: 'auto', marginTop: '16px' },
											collapsed: { opacity: 0, height: 0, marginTop: '0px' },
										}}
										initial="collapsed"
										animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
										transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}>
										{faq.answer}
									</Answer>
								</FAQ>
							))}
						</FAQSContainer>
					</FAQContent>
				</TwoColumn>
			</Content>
		</Container>
	);
};
