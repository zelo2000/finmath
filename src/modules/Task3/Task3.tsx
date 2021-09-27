import React, { FC } from "react";
import { Typography } from "antd";

import PageHeader from "../../components/PageHeader/PageHeader";
import DurationByInterestRate from './Forms/DurationByInterestRate';
import DurationByDiscountRate from './Forms/DurationByDiscountRate';
import RateByDaysDuration from './Forms/RateByDaysDuration';
import RateByYearsDuration from './Forms/RateByYearsDuration';

import './Task3.css';

const { Title } = Typography;

const Task3: FC = () => {
	return (
		<div>
			<PageHeader
				title="Тема 3."
				description="Визначення інших параметрів угод із відсотковими ставками"
			/>

			<div className="page-content">
				<Title level={5}>Тривалість періоду на основі простої відсоткової ставки</Title>
				<DurationByInterestRate />

				<Title level={5}>Тривалість періоду на основі облікової ставки</Title>
				<DurationByDiscountRate />

				<Title level={5}>Облікова та проста відсоткова ставка на основі тривалості періоду в роках</Title>
				<RateByYearsDuration />

				<Title level={5}>Облікова та проста відсоткова ставка на основі тривалості періоду в днях</Title>
				<RateByDaysDuration />
			</div>
		</div>
	);
};

export default Task3;