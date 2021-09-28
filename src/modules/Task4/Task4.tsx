import React, { FC } from "react";
import { Tabs, Typography } from "antd";

import PageHeader from "../../components/PageHeader/PageHeader";

import FutureDepositInterestRateByForce from './ConstantForceForm/FutureDepositInterestRateByForce';
import FutureDepositForceByInterestRate from './ConstantForceForm/FutureDepositForceByInterestRate';
import СurrentDepositInterestRateByForce from './ConstantForceForm/СurrentDepositInterestRateByForce';
import СurrentDepositForceByInterestRate from './ConstantForceForm/СurrentDepositForceByInterestRate';

const { Title } = Typography;
const { TabPane } = Tabs;

const Task4: FC = () => {
  return (
    <div>
      <PageHeader
        title="Тема 4."
        description="Неперервні відсотки. Неперервне нарощення та дисконтування"
      />
      <div className="page-content">
        <Tabs defaultActiveKey="1">
          <TabPane tab="4.1. Постійна сила росту" key="1">
            <Title level={5}>Очікувана сума депозиту та відсоткова ставка на основі сили росту</Title>
            <FutureDepositInterestRateByForce />

            <Title level={5}>Очікувана сума депозиту та сила росту на основі відсоткової ставки</Title>
            <FutureDepositForceByInterestRate />

            <Title level={5}>Поточна сума депозиту та відсоткова ставка на основі сили росту</Title>
            <СurrentDepositInterestRateByForce />

            <Title level={5}>Поточна сума депозиту та сила росту на основі відсоткової ставки</Title>
            <СurrentDepositForceByInterestRate />
          </TabPane>

          <TabPane tab="4.2. Змінна сила росту" key="2">
            <Title level={5}>Множник нарощення для лінійної та експонентної залежності</Title>

            <Title level={5}>Тривалість періоду в роках для нарощення з постійною силою росту</Title>

            <Title level={5}>Постійна сила росту на основі тривалості періоду в роках</Title>

            <Title level={5}>Тривалість періоду в роках для нарощення зі змінною силою росту та постійним темпом зростання</Title>

            <Title level={5}>Змінна сила росту з постійним темпом зростання на основі тривалості періоду в роках</Title>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Task4;
