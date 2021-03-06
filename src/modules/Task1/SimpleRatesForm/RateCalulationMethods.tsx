import React, { FC, useCallback } from 'react';
import { Checkbox, Col, DatePicker, Form, InputNumber, Radio, Row } from 'antd';

import { round } from '../../../utils/helpers';
import moment from 'moment';

export interface SimpleRateFormulaProps { // completely done
    initialLoan: number;
    rate: number;
    startOfTerm: Date;
    endOfTerm: Date;
    isLeapYear: boolean;
    method: number;
    daysAmount: number;
    yearDaysAmount: number;
    eventualLoan: number;
}

const RateCalulationMethods: FC = () => {
    const [form] = Form.useForm<SimpleRateFormulaProps>();

    const handleChange = useCallback((_, allValues: SimpleRateFormulaProps) => {
        if (allValues.initialLoan && allValues.rate && allValues.startOfTerm && allValues.endOfTerm && allValues.method) {
            let yearDaysAmount = 360;
            let daysAmount = moment(allValues.endOfTerm).diff(moment(allValues.startOfTerm), 'days');
            if (allValues.method === 1) {
                yearDaysAmount = allValues.isLeapYear ? 366 : 365;
            }
            else if (allValues.method === 3) {
                const startOfTerm = moment(allValues.startOfTerm);
                const endOfTerm = moment(allValues.endOfTerm);
                const startMonthDaysAmount = startOfTerm.daysInMonth() - startOfTerm.date();         
                const monthAmount = endOfTerm.diff(moment(allValues.startOfTerm), 'months');
                daysAmount = startMonthDaysAmount + (monthAmount * 30) + endOfTerm.date() - 1;
            }
            const eventualLoan = allValues.initialLoan * (1 + (daysAmount / yearDaysAmount) * (allValues.rate / 100));
            form.setFieldsValue({ eventualLoan: round(eventualLoan, 2), daysAmount: round(daysAmount, 2), yearDaysAmount: round(yearDaysAmount, 2) });
        }
    }, [form]);

    return (
        <div>
            <Form
                name='task1'
                form={form}
                onValuesChange={handleChange}
                layout='vertical'
                className='form-content'
            >
                <Row
                    justify='start'
                    align='bottom'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Col span={8}>
                        <Form.Item
                            name='initialLoan'
                            label='?????????????????? ???????? (P)'
                        >
                            <InputNumber placeholder='100000' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name='rate'
                            label='???????????????????? ???????????? (??) %'
                        >
                            <InputNumber placeholder='25' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    justify='start'
                    align='bottom'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Col span={8}>
                        <Form.Item
                            name='startOfTerm'
                            label='?????????????? ?????????? (????????)'
                        >
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name='endOfTerm'
                            label='???????????? ?????????? (????????)'
                        >
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name='isLeapYear'
                            valuePropName='checked'
                        >
                            <Checkbox >???????????????????? ??????</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    justify='start'
                    align='bottom'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Form.Item
                        name='method'
                        label='??????????'
                    >
                        <Radio.Group>
                            <Radio value={1}>??????/??????</Radio>
                            <Radio value={2}>??????/360</Radio>
                            <Radio value={3}>360/360</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Row>

                <Row
                    justify='start'
                    align='top'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Col span={8}>
                        <Form.Item
                            name='daysAmount'
                            label='?????????????????? ???????? ???????????? (t)'
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name='yearDaysAmount'
                            label='?????????????????? ???????? ?? ???????? (??)'
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name='eventualLoan'
                            label='???????????????? ???????? (S)'
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default RateCalulationMethods;
