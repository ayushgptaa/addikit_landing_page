import React from 'react';
import tw, { styled } from 'twin.macro';

import LogoImage from 'images/logo.png';

const Container = tw.div`relative text-white -mx-8 -mb-8 md:px-8 pb-4 bg-black`;
const Content = tw.div`max-w-screen-xl mx-auto pb-8`;
const FiveColumns = styled.div`
	${tw`flex flex-wrap justify-evenly p-16`}
`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoImg = tw.img`w-24 mx-auto md:mx-0`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-evenly items-center`;
const CopyrightNotice = tw.div``;
const CompanyInfo = tw.div``;

const Divider = tw.div`my-8 border-b-2 border-gray-800`;

//eslint-disable-next-line
export default () => {
	return (
		<Container>
			<Content>
				<FiveColumns>
					<CompanyColumn>
						<LogoImg src={LogoImage} />
					</CompanyColumn>
					<Column>
						<ColumnHeading tw="text-textlight">Resources</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href="#" tw="text-textlight">
									FAQs
								</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#" tw="text-textlight">
									Contact
								</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<Column>
						<ColumnHeading>Features</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href="#">Monitars & Tasks</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Global Checkout Feed</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Automation</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href="#">Gift Card suport</Link>
							</LinkListItem>
						</LinkList>
					</Column>
				</FiveColumns>
				<Divider />
				<CopyrightAndCompanyInfoRow>
					<CopyrightNotice>© 2021 Aristo Software</CopyrightNotice>
					<CompanyInfo>Terms and Conditions</CompanyInfo>
					<CompanyInfo>Privacy Policy</CompanyInfo>
				</CopyrightAndCompanyInfoRow>
			</Content>
		</Container>
	);
};
