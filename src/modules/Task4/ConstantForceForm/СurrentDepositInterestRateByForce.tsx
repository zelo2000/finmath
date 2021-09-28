import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface СurrentDepositInterestRateByForceProps {
    currentDeposit: number;
    growthForce: number;
    yearsDuration: number;

    futureDeposit: number;
    interestRate: number;
}

const СurrentDepositInterestRateByForce: FC = () => {
    const [form] = Form.useForm<СurrentDepositInterestRateByForceProps>();

    const handleChange = useCallback((_, allValues: СurrentDepositInterestRateByForceProps) => {
        if (allValues.yearsDuration && allValues.futureDeposit && allValues.growthForce) {
            const growthForce = allValues.growthForce / 100;
            const interestRate = Math.exp(growthForce) - 1;
            const currentDeposit = allValues.futureDeposit * Math.exp(-growthForce * allValues.yearsDuration);
            form.setFieldsValue({ interestRate: round(interestRate * 100, 2), currentDeposit: round(currentDeposit, 2) });
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
                    <Col span={5}>
                        <Form.Item
                            name="futureDeposit"
                            label="Очікувана сума депозиту (S)"
                        >
                            <InputNumber placeholder="200000" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="yearsDuration"
                            label="Тривалість періоду у роках (n)"
                        >
                            <InputNumber placeholder="7" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="growthForce"
                            label="Сила росту (δ) %"
                        >
                            <InputNumber placeholder="5" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    justify="start"
                    align="top"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={5}>
                        <Form.Item
                            name="currentDeposit"
                            label="Початкова сума депозиту (P)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="interestRate"
                            label="Відсоткова ставка (i) %"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default СurrentDepositInterestRateByForce;