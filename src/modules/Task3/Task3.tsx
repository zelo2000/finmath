import React, { FC } from "react";
import { Tabs, Typography } from "antd";

import PageHeader from "../../components/PageHeader/PageHeader";
import DurationByInterestRate from './SimpleRatesForm/DurationByInterestRate';
import DurationByDiscountRate from './SimpleRatesForm/DurationByDiscountRate';
import RateByDaysDuration from './SimpleRatesForm/RateByDaysDuration';
import RateByYearsDuration from './SimpleRatesForm/RateByYearsDuration';

import YearsDurationByInterestRate from './ComplexRatesForm/YearsDurationByInterestRate';
import YearsDurationByDiscountRate from './ComplexRatesForm/YearsDurationByDiscountRate';

import InterestRateByYearsDuration from './ComplexRatesForm/InterestRateByYearsDuration';
import DiscountRateByYearsDuration from './ComplexRatesForm/DiscountRateByYearsDuration';

import './Task3.css';

const { Title } = Typography;
const { TabPane } = Tabs;

const Task3: FC = () => {
	return (
		<div>
			<PageHeader
				title="Тема 3."
				description="Визначення інших параметрів угод із відсотковими ставками"
			/>

			<div className="page-content">
				<Tabs defaultActiveKey="1">
					<TabPane tab="3.1. Визначення деяких параметрів фінансових угод з простими ставками" key="1">
						<Title level={5}>Тривалість періоду на основі відсоткової ставки</Title>
						<DurationByInterestRate />

						<Title level={5}>Тривалість періоду на основі облікової ставки</Title>
						<DurationByDiscountRate />

						<Title level={5}>Облікова та відсоткова ставка на основі тривалості періоду в роках</Title>
						<RateByYearsDuration />

						<Title level={5}>Облікова та відсоткова ставка на основі тривалості періоду в днях</Title>
						<RateByDaysDuration />
					</TabPane>

					<TabPane tab="3.2. Визначення деяких параметрів фінансових угод з складними ставками" key="2">
						<Title level={5}>Тривалість періоду в роках на основі відсоткової ставки</Title>
						<YearsDurationByInterestRate />

						<Title level={5}>Тривалість періоду в роках на основі облікової ставки</Title>
						<YearsDurationByDiscountRate />

						<Title level={5}>Відсоткова ставка на основі тривалість періоду в роках</Title>
						<InterestRateByYearsDuration />

						<Title level={5}>Облікова ставка на основі тривалість періоду в роках</Title>
						<DiscountRateByYearsDuration />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default Task3;