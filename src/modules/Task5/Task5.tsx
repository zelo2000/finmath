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
import {SimpleNominalEqForm} from './SimpleAndNominalRateEquivalence/SimpleNominalEqForm';
import {NominalSimpleEqForm} from './SimpleAndNominalRateEquivalence/NominalAndSimpleEqForm';
import {AccountingComplexEqForm} from './SimpleAccountingAndComplexRatesEquivalence/AccountingComplexEq';
import {AccountingComplexEqDaysForm} from './SimpleAccountingAndComplexRatesEquivalence/AccountingComplexEqDays';
import {ComplexAccountingEqForm} from './SimpleAccountingAndComplexRatesEquivalence/ComplexAccountingEq';
import {ComplexAccountingEqDaysForm} from './SimpleAccountingAndComplexRatesEquivalence/ComplexAccountingEqDays';

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
              <TabPane tab="5.3 Еквівалентність простої та номінальної відсоткових ставок" key={3}>
                  <Title level={5}>Еквівалентна проста відсоткова ставка</Title>
                  <NominalSimpleEqForm/>
                  <Divider/>

                  <Title level={5}>Еквівалентна проста відсоткова ставка</Title>
                  <SimpleNominalEqForm/>
                  <Divider/>

              </TabPane>

              <TabPane tab="5.4 Еквівалентність простої облікової і складної ставки відсотка" key={4}>
                  <Title level={5}>Еквівалентна проста облікова ставка</Title>
                  <AccountingComplexEqForm/>
                  <Divider/>

                  <AccountingComplexEqDaysForm/>
                  <Divider/>

                  <Title level={5}>Еквівалентна складна відсоткова ставка</Title>
                  <ComplexAccountingEqForm/>
                  <Divider/>

                  <ComplexAccountingEqDaysForm/>
                  <Divider/>


              </TabPane>
          </Tabs>
      </div>
    </div>
  );
};

export default Task5;
