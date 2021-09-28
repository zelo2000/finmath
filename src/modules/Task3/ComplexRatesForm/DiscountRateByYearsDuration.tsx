import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface DiscountRateByYearsDurationProps {
    currentDeposit: number;
    futureDeposit: number;
    frequency: number;
    yearsDuration: number;

    discountRate: number;
}

const DiscountRateByYearsDuration: FC = () => {
    const [form] = Form.useForm<DiscountRateByYearsDurationProps>();

    const handleChange = useCallback((_, allValues: DiscountRateByYearsDurationProps) => {
        if (allValues.futureDeposit && allValues.currentDeposit && allValues.yearsDuration && allValues.frequency) {

            const discountRate = allValues.frequency * (
                1 - Math.pow(allValues.currentDeposit / allValues.futureDeposit, 1 / (allValues.yearsDuration * allValues.frequency))
            );
            form.setFieldsValue({ discountRate: round(discountRate * 100, 2) });
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
                            name="currentDeposit"
                            label="Початкова сума депозиту (P)"
                        >
                            <InputNumber placeholder="75" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="futureDeposit"
                            label="Очікувана сума депозиту (S)"
                        >
                            <InputNumber placeholder="100" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="yearsDuration"
                            label="Тривалість періоду у роках (n)"
                        >
                            <InputNumber placeholder="3" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="frequency"
                            label="Частота нарахування відсотків"
                            initialValue={1}
                        >
                            <InputNumber placeholder="4" min={1} max={366} />
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

export default DiscountRateByYearsDuration;
