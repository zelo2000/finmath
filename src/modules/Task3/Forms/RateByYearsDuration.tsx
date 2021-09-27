import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface RateByYearsDurationProps {
    currentDebt: number;
    futureDebt: number;
    discountRate: number;
    interestRate: number;
    yearsDuration: number;
}

const RateByYearsDuration: FC = () => {
    const [form] = Form.useForm<RateByYearsDurationProps>();

    const handleChange = useCallback((_, allValues: RateByYearsDurationProps) => {
        if (allValues.futureDebt && allValues.currentDebt && allValues.yearsDuration) {
            const interestRate = ((allValues.futureDebt / allValues.currentDebt) - 1) / allValues.yearsDuration;
            const discountRate = (1 - (allValues.currentDebt / allValues.futureDebt)) / allValues.yearsDuration;
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
                    align="top"
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
                            name="yearsDuration"
                            label="Тривалість періоду у роках (n)"
                        >
                            <InputNumber placeholder="2" />
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

export default RateByYearsDuration;
