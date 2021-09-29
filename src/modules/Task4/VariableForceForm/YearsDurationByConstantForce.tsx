import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface YearsDurationByConstantForceProps {
    currentDeposit: number;
    futureDeposit: number;
    growthForce: number;

    yearsDuration: number;
}

const YearsDurationByConstantForce: FC = () => {
    const [form] = Form.useForm<YearsDurationByConstantForceProps>();

    const handleChange = useCallback((_, allValues: YearsDurationByConstantForceProps) => {
        if (allValues.currentDeposit && allValues.futureDeposit && allValues.growthForce) {
            const growthForce = allValues.growthForce / 100;
            const yearsDuration = Math.log(allValues.futureDeposit / allValues.currentDeposit) / growthForce;
            form.setFieldsValue({ yearsDuration: round(yearsDuration, 2) });
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
                            name="growthForce"
                            label="Сила росту (δ) %"
                        >
                            <InputNumber placeholder="25" min={0} max={100} />
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
                            name="yearsDuration"
                            label="Тривалість періоду у роках (n)"
                        >
                            <InputNumber disabled />
                        </Form.Item>

                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default YearsDurationByConstantForce;