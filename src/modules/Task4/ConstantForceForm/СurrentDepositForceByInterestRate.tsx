import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface СurrentDepositForceByInterestRateProps {
    currentDeposit: number;
    growthForce: number;
    yearsDuration: number;

    futureDeposit: number;
    interestRate: number;
}

const СurrentDepositForceByInterestRate: FC = () => {
    const [form] = Form.useForm<СurrentDepositForceByInterestRateProps>();

    const handleChange = useCallback((_, allValues: СurrentDepositForceByInterestRateProps) => {
        if (allValues.interestRate && allValues.futureDeposit && allValues.yearsDuration) {
            const interestRate = allValues.interestRate / 100;
            const growthForce = Math.log(1 + interestRate);
            const currentDeposit = allValues.futureDeposit * Math.exp(-growthForce * allValues.yearsDuration);
            form.setFieldsValue({ growthForce: round(growthForce * 100, 2), currentDeposit: round(currentDeposit, 2) });
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
                            name="interestRate"
                            label="Відсоткова ставка (i) %"
                        >
                            <InputNumber placeholder="5" min={0} max={100} />
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
                            name="growthForce"
                            label="Сила росту (δ) %"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default СurrentDepositForceByInterestRate;