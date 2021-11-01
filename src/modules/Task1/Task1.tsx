import React, { FC } from 'react';
import { Divider, Tabs, Typography } from 'antd';

import CustomCredit from './СustomСredit/CustomCredit';
import DifferentRates from './SimpleRatesForm/DifferentRates';
import PageHeader from '../../components/PageHeader/PageHeader';
import SimpleRateFormula from './SimpleRatesForm/SimpleRateFormula';
import BankAccounting from './DiscountingAndAccounting/BankAccounting';
import ReinvestmentOfFunds from './SimpleRatesForm/ReinvestmentOfFunds';
import RateCalulationMethods from './SimpleRatesForm/RateCalulationMethods';
import SimpleRatesChangedTime from './SimpleRatesChangedTime/SimpleRatesChangedTime';
import MathematicalDiscounting from './DiscountingAndAccounting/MathematicalDiscounting';

const { Title } = Typography;
const { TabPane } = Tabs;

const Task1: FC = () => {
	return (
		<div>
			<PageHeader title='Тема 1.' description='Прості відсотки' />

			<div className='page-content'>
				<Tabs defaultActiveKey='1'>
					<TabPane tab='1.1. Нарощення за простими відсотковими ставками' key='1'>
						<Title level={5}>Формула простих відсотків</Title>
						<SimpleRateFormula />
						<Divider />

						<Title level={5}>Методи нарахування простих відсотків</Title>
						<RateCalulationMethods />
						<Divider />

						<Title level={5}>Формула простих відсотків (різні відсоткові ставки для різних періодів)</Title>
						<DifferentRates />
						<Divider />

						<Title level={5}>Повторне інвестування коштів</Title>
						<ReinvestmentOfFunds />

					</TabPane>

					<TabPane tab='1.2. Нарахування простих відсотків на змінні в часі суми депозиту' key='2'>
						<Title level={5}>Нарахування простих відсотків на змінні в часі суми депозиту</Title>
						<SimpleRatesChangedTime />
					</TabPane>

					<TabPane tab='1.3. Нарахування відсотків у користувацькому кредиті' key='3'>
						<CustomCredit />
					</TabPane>

					<TabPane tab='1.4. Дисконтування та облік за простими відсотковими ставками' key='4'>
						<Title level={5}>Математичне дисконтування</Title>
						<MathematicalDiscounting />
						<Divider />

						<Title level={5}>Банківський облік</Title>
						<BankAccounting />
					</TabPane>
				</Tabs>
			</div>

		</div>
	);
};

export default Task1;
