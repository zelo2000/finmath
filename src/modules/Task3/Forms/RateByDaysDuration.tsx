import React, { FC, useCallback } from "react";
import { Checkbox, Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface RateByDaysDurationProps {
    currentDebt: number;
    futureDebt: number;
    discountRate: number;
    leapYear: boolean,
    interestRate: number;
    daysDuration: number;
}

const RateByDaysDuration: FC = () => {
    const [form] = Form.useForm<RateByDaysDurationProps>();

    const handleChange = useCallback((_, allValues: RateByDaysDurationProps) => {
        if (allValues.futureDebt && allValues.currentDebt && allValues.daysDuration) {
            const interestRate = ((allValues.futureDebt / allValues.currentDebt) - 1) * (allValues.leapYear ? 366 : 365) / allValues.daysDuration;
            const discountRate = (1 - (allValues.currentDebt / allValues.futureDebt)) * 360 / allValues.daysDuration;
            form.setFieldsValue({ interestRate: round(interestRate * 100, 1), discountRate: round(discountRate * 100, 1) });
        }
    }, [form]);

    return (
        <div>
            <Form
                name="task3"
                form={form}
                onValuesChange={handleChange}
                layout="vertical"
                className="form-content"
            >
                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={4}>
                        <Form.Item
                            name="currentDebt"
                            label="Сучасна сума боргу (P)"
                        >
                            <InputNumber placeholder="10000" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item
                            name="futureDebt"
                            label="Майбутня сума боргу (S)"
                        >
                            <InputNumber placeholder="15000" />
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <Form.Item
                            name="daysDuration"
                            label="Тривалість періоду у днях (t)"
                        >
                            <InputNumber placeholder="365" />
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <Form.Item name="leapYear" valuePropName="checked">
                            <Checkbox>Високосний рік</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    justify="start"
                    align="top"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={4}>
                        <Form.Item
                            name="interestRate"
                            label="Проста відсоткова ставка (i) %"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item
                            name="discountRate"
                            label="Облікова ставка (d) %"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default RateByDaysDuration;
