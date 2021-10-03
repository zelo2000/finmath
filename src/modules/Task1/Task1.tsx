import React, { FC } from "react";
import { Tabs, Typography } from "antd";
import PageHeader from "../../components/PageHeader/PageHeader";
import SimpleRateFormula from "./SimpleRatesForm/SimpleRateFormula";
import RateCalulationMethods from "./SimpleRatesForm/RateCalulationMethods";
import CustomCredit from "./СustomСredit/CustomCredit";
import MathematicalDiscounting from "./DiscountingAndAccounting/MathematicalDiscounting";
import BankAccounting from "./DiscountingAndAccounting/BankAccounting";

const { Title } = Typography;
const { TabPane } = Tabs;

const Task1: FC = () => {
	return (
		<div>
			<PageHeader title="Тема 1." description="Прості відсотки" />

			<div className="page-content">
				<Tabs defaultActiveKey="1">
					<TabPane tab="1.1. Нарощення за простими відсотковими ставками" key="1">
						<Title level={5}>Формула простих відсотків</Title>
						<SimpleRateFormula />

						<Title level={5}>Методи нарахування простих відсотків</Title>
						<RateCalulationMethods />

						<Title level={5}>Облікова та відсоткова ставка на основі тривалості періоду в роках</Title>
						<SimpleRateFormula />

						<Title level={5}>Облікова та відсоткова ставка на основі тривалості періоду в днях</Title>
						<SimpleRateFormula />
					</TabPane>

					<TabPane tab="1.2. Нарахування простих відсотків на змінні в часі суми депозиту" key="2">
						<Title level={5}>Тривалість періоду в роках на основі відсоткової ставки</Title>

					</TabPane>

					<TabPane tab="1.3. Нарахування відсотків у користувацькому кредиті" key="3">
						<CustomCredit />
					</TabPane>

					<TabPane tab="1.4. Дисконтування та облік за простими відсотковими ставками" key="4">
						<Title level={5}>Математичне дисконтування</Title>
						<MathematicalDiscounting />

						<Title level={5}>Банківський облік</Title>
						<BankAccounting />
					</TabPane>
				</Tabs>
			</div>

		</div>
	);
};

export default Task1;
