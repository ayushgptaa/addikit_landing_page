import tw from 'twin.macro';
import styled from 'styled-components';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import Monitors from '../../images/Monitors.png';
import Monitorsicon from '../../images/Monitors.svg';
import Tasks from '../../images/Tasks.png';
import Tasksicon from '../../images/Tasks.svg';

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative m-6 md:m-0  `;
const Plan = tw.div`
	w-full max-w-96 md:mr-12 lg:pb-10 pb-6  md:last:mr-0 mb-10 px-16 rounded-lg relative text-textlight bg-main flex flex-col border border-primary-100`;

const PlanHeader = styled.div`
	${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-main rounded-t-lg`}
	.iconcontainer {
		${tw`flex items-center `}
		.icon {
			height: 18px;
		}
	}
	.name {
		${tw`font-bold text-2xl text-white ml-2 `}
	}
	.desciption {
		${tw`text-textlight text-sm font-medium tracking-wide `}
	}
	.image {
		${tw`lg:w-full mt-8  `}
	}
`;

const plans = [
	{
		name: 'Monitors',
		description: 'Monitors watch products and communicate with Tasks once they have been found.',
		image: Monitors,
		icon: Monitorsicon,
	},
	{
		name: 'Tasks',
		description: 'Tasks receive product information from Monitors and attempt to check out products.',
		image: Tasks,
		icon: Tasksicon,
	},
];

//eslint-disable-next-line
export default () => {
	return (
		<Container>
			<ContentWithPaddingXl>
				<PlansContainer>
					{plans.map((plan, index) => (
						<Plan key={index} featured={plan.featured}>
							<PlanHeader>
								<span className="iconcontainer">
									<img className="icon" src={plan.icon} alt="" />
									<span className="name">{plan.name}</span>
								</span>
								<span className="description">{plan.description}</span>
								<img className="image" src={plan.image} alt="" />
							</PlanHeader>
						</Plan>
					))}
				</PlansContainer>
			</ContentWithPaddingXl>
		</Container>
	);
};
