import React, { FC } from "react";
import { Divider, Tabs, Typography } from "antd";
import MixedMethod from "./ComplexRatesForm/MixedMethod";
import PageHeader from "../../components/PageHeader/PageHeader";
import ComplexRateFormula from "./ComplexRatesForm/ComplexRateFormula";
import NominaInterestRate from "./ComplexRatesForm/NominaInterestRate";
import EffectiveInterestRate from "./ComplexRatesForm/EffectiveInterestRate";
import NominalRatesTransition from "./ComplexRatesForm/NominalRatesTransition";
import NominalEffectiveTransition from "./ComplexRatesForm/NominalEffectiveTransition";
import MathematicalDiscounting from "./DiscountingAndAccounting/MathematicalDiscounting";
import MathematicalDiscountingSeveralTerms from "./DiscountingAndAccounting/MathematicalDiscountingSeveralTerms";

const { Title } = Typography;
const { TabPane } = Tabs;

const Task2: FC = () => {
	return (
		<div>
			<PageHeader
				title="Тема 2."
				description="Нарощення та дисконтування за складними відсотковими ставками"
			/>

			<div className="page-content">
				<Tabs defaultActiveKey="1">
					<TabPane tab="2.1. Нарощення за складними відсотковими ставками" key="1">
						<Title level={5}>Формула складних відсотків (загальний метод)</Title>
						<ComplexRateFormula />
						<Divider />

						<Title level={5}>Формула складних відсотків (змінні з часом складні відсоткові ставки)</Title>
						{/* TODO */}
						<Divider />

						<Title level={5}>Формула складних відсотків (змішаний метод)</Title>
						<MixedMethod />
						<Divider />

						<Title level={5}>Номінальна ставка відсотка</Title>
						<NominaInterestRate />
						<Divider />

						<Title level={5}>Множники нарощення</Title>
						<EffectiveInterestRate />
						<Divider />

						<Title level={5}>Перехід від ефективної до номінальної відсоткової ставки і навпаки</Title>
						<NominalEffectiveTransition />
						<Divider />
						
						<Title level={5}>Перехід між номінальними ставками</Title>
						<NominalRatesTransition />
					</TabPane>

					<TabPane tab="2.2. Математичне дисконтування та облік за складними ставками відсотка" key="2">
						<Title level={5}>Математичне дисконтування за складною відсотковою ставкою</Title>
						<MathematicalDiscounting />
						<Divider />

						<Title level={5}>Математичне дисконтування за складною відсотковою ставкою (нарахування відсотків m разів на рік)</Title>
						<MathematicalDiscountingSeveralTerms />
						<Divider />

						<Title level={5}>Відсоткова ставка на основі тривалість періоду в роках</Title>
						<Divider />

						<Title level={5}>Облікова ставка на основі тривалість періоду в роках</Title>
						
					</TabPane>
				</Tabs>
			</div>

		</div>
	);
};

export default Task2;
