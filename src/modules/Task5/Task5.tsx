import React, { FC } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import {Divider, Tabs, Typography} from 'antd';
import {
    SimpleAccountingRateEqForm,
    SimpleAccountingRateEqFormDays,
    SimpleRateEqForm,
    SimpleRateEqFormDays
} from './SimpleAndAccountingInterestRatesEquivalence/export';
import {SimpleComplexEqForm} from './SimpleAndComplexInterestRatesEquivalence/SimpleComplexEqForm';
import {ComplexSimpleEqForm} from './SimpleAndComplexInterestRatesEquivalence/ComplexSimpleEqForm';

const { Title } = Typography;
const { TabPane } = Tabs;


const Task5: FC = () => {
  return (
    <div>
      <PageHeader
        title="Тема 5."
        description="Еквівалентність відсоткових ставок та змінаг умов фінансових угод"
      />
      <div className="page-content">
          <Tabs defaultActiveKey="1">
              <TabPane tab="5.1 Еквівалентність простої ставки відсотків та простої облікової ставки" key={1}>
                  <Title level={5}>Еквівалентна проста відсоткова ставка</Title>
                  <SimpleRateEqForm/>
                  <Divider/>
                  <SimpleRateEqFormDays/>
                  <Divider/>

                  <Title level={5}>Еквівалентна проста облікова ставка</Title>
                  <SimpleAccountingRateEqForm/>
                  <Divider/>
                  <SimpleAccountingRateEqFormDays/>
                  <Divider/>
              </TabPane>
              <TabPane tab="5.2 Еквівалентність простої та складної відсоткових ставок" key={2}>
                  <Title level={5}>Еквівалентна проста відсоткова ставка</Title>
                  <SimpleComplexEqForm/>
                  <Divider/>

                  <Title level={5}>Еквівалентна складна відсоткова ставка</Title>
                  <ComplexSimpleEqForm/>
                  <Divider/>
              </TabPane>
          </Tabs>
      </div>
    </div>
  );
};

export default Task5;
