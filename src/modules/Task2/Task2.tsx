import React, { FC } from "react";
import { Tabs, Typography } from "antd";
import PageHeader from "../../components/PageHeader/PageHeader";

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
						<Title level={5}>Тривалість періоду на основі відсоткової ставки</Title>


						<Title level={5}>Тривалість періоду на основі облікової ставки</Title>


						<Title level={5}>Облікова та відсоткова ставка на основі тривалості періоду в роках</Title>


						<Title level={5}>Облікова та відсоткова ставка на основі тривалості періоду в днях</Title>

					</TabPane>

					<TabPane tab="2.2. Математичне дисконтування та облік за складними ставками відсотка" key="2">
						<Title level={5}>Тривалість періоду в роках на основі відсоткової ставки</Title>


						<Title level={5}>Тривалість періоду в роках на основі облікової ставки</Title>


						<Title level={5}>Відсоткова ставка на основі тривалість періоду в роках</Title>


						<Title level={5}>Облікова ставка на основі тривалість періоду в роках</Title>

					</TabPane>
				</Tabs>
			</div>

		</div>
	);
};

export default Task2;
