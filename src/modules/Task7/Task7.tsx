import React, { FC } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import {Divider, Tabs, Typography} from 'antd';
import {ContinuousPayments} from './FundCreation/ContinuousPayments';
import {NotConstantPayments} from './FundCreation/NotConstantPayments';
import {AmortizationEqual} from './Amortization/AmortizationEqual';
import {AllEqual} from './Amortization/AllEqual';
import {GrantElementForm} from './Privileges/GrantElementForm';
import {OneMorePrivilegeForm} from './Privileges/OneMorePrivilege';
import {MortgageForm} from './Privileges/Mortgage';


const { Title } = Typography;
const { TabPane } = Tabs;


const Task7: FC = () => {
    return (
        <div>
            <PageHeader
                title="Тема 7."
                description="Планування погашення заборгованості"
            />
            <div className="page-content">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="7.1 Створення фонду погашення заборгованості" key={1}>
                        <Title level={5}>Постійні внески у фонд</Title>
                        <ContinuousPayments/>
                        <Divider/>

                        <Title level={5}>Змінні внески у фонд</Title>
                        <NotConstantPayments/>
                        <Divider/>
                    </TabPane>
                    <TabPane tab="7.2 Амортизація заборгованості" key={2}>
                        <Title level={5}>Погашення основного боргу рівними терміновими випалатами</Title>
                        <AmortizationEqual/>
                        <Divider/>

                        <Title level={5}>Погашення всього боргу рівними терміновими випалатами</Title>
                        <AllEqual/>
                        <Divider/>
                    </TabPane>
                    <TabPane tab="7.3 Пільгові позики та кредити" key={3}>
                        <Title level={5}>Грант-елемент</Title>
                        <GrantElementForm/>
                        <Divider/>

                        <Title level={5}>Нарахування відсотків до основного боргу</Title>
                        <OneMorePrivilegeForm/>
                        <Divider/>

                        <Title level={5}>Іпотека</Title>
                        <MortgageForm/>
                        <Divider/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default Task7;
