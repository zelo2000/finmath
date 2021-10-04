import React, { FC } from "react";
import { Tabs, Typography } from "antd";
import PageHeader from "../../components/PageHeader/PageHeader";
import ComplexRateFormula from "./ComplexRatesForm/ComplexRateFormula";
import MixedMethod from "./ComplexRatesForm/MixedMethod";
import NominaInterestRate from "./ComplexRatesForm/NominaInterestRate";

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
						<ComplexRateFormula/>

						<Title level={5}>Формула складних відсотків (змінні з часом складні відсоткові ставки)</Title> 
						{/* TODO */}

						<Title level={5}>Формула складних відсотків (змішаний метод)</Title>
						<MixedMethod/>

						<Title level={5}>Номінальна ставка відсотка</Title>
						<NominaInterestRate/>

						<Title level={5}>Ефективна відсоткова ставка</Title>
						<MixedMethod/>
					</TabPane>

					<TabPane tab="2.2. Математичне дисконтування та облік за складними ставками відсотка" key="2">
						<Title level={5}>Математичне дисконтування за складною відсотковою ставкою</Title>


						<Title level={5}>Облік за складною обліковою ставкою</Title>


						<Title level={5}>Відсоткова ставка на основі тривалість періоду в роках</Title>


						<Title level={5}>Облікова ставка на основі тривалість періоду в роках</Title>

					</TabPane>
				</Tabs>
			</div>

		</div>
	);
};

export default Task2;
