import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface ConstantForceByYearsDurationProps {
    currentDeposit: number;
    futureDeposit: number;
    yearsDuration: number;

    growthForce: number;
}

const ConstantForceByYearsDuration: FC = () => {
    const [form] = Form.useForm<ConstantForceByYearsDurationProps>();

    const handleChange = useCallback((_, allValues: ConstantForceByYearsDurationProps) => {
        if (allValues.currentDeposit && allValues.futureDeposit && allValues.yearsDuration) {
            const growthForce = Math.log(allValues.futureDeposit / allValues.currentDeposit) / allValues.yearsDuration;
            form.setFieldsValue({ growthForce: round(growthForce * 100, 2) });
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
                            <InputNumber placeholder="1000" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="futureDeposit"
                            label="Очікувана сума депозиту (S)"
                        >
                            <InputNumber placeholder="2117" />
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
                </Row>

                <Row
                    justify="start"
                    align="top"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
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

export default ConstantForceByYearsDuration;