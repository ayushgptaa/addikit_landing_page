import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
// import { ReactComponent as PlusIcon } from 'feather-icons/dist/icons/plus.svg';
// import { ReactComponent as MinusIcon } from 'feather-icons/dist/icons/minus.svg';
import Plus from 'images/Plus.svg';
import Minus from 'images/Minus.svg';
import Faqimage from '../../images/faq.png';
const PlusIcon = () => {
	return <img src={Plus} alt="plus" tw="w-4" />;
};
const MinusIcon = () => {
	return <img src={Minus} alt="plus" tw="w-4" />;
};
const Container = tw.div`relative`;
const Content = tw.div`w-full mx-auto py-16 lg:py-24  `;
const TwoColumn = tw.div`flex justify-center md:flex-row flex-col items-end gap-10 content-center`;
const Image = tw.img` lg:w-4/12 lg:h-72 w-10/12 mx-auto lg:mx-0`;
const FAQContent = tw.div`max-w-lg`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = styled(SectionHeading)`
	text-decoration: underline;
	text-decoration-color: red;
	${tw`lg:text-left text-white text-3xl `}
`;
const Heading2 = tw(SectionHeading)`lg:text-left hidden lg:block text-white text-3xl font-medium ml-64`;
const FAQSContainer = tw.dl`lg:mt-12 lg:w-2/3 w-full`;
const FAQ = tw.div`cursor-pointer lg:mt-8 select-none px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex items-center`;
const QuestionText = tw.span`text-lg lg:text-sm font-semibold text-textlight pl-4`;
const QuestionToggleIcon = styled.span`
	${tw`ml-2 `}
	svg {
		${tw`w-4 h-4`}
	}
`;
const Answer = motion(
	tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed text-textlight lg:pl-4 pl-10 w-10/12`
);

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
			question: 'How often do you update Addikt?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'What is Addikt?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'What countries does Addikt support?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'What stores do you support?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			question: 'Does Addikt have renewals?',
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
				<Heading2>Frequently Asked Questions.</Heading2>
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
