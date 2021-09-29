import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface YearsDurationByVariableForceProps {
    currentDeposit: number;
    futureDeposit: number;
    growthForce: number;
    growthForceIncrease: number;

    yearsDuration: number;
}

const YearsDurationByVariableForce: FC = () => {
    const [form] = Form.useForm<YearsDurationByVariableForceProps>();

    const handleChange = useCallback((_, allValues: YearsDurationByVariableForceProps) => {
        if (allValues.currentDeposit && allValues.futureDeposit && allValues.growthForce && allValues.growthForceIncrease) {
            const growthForce = allValues.growthForce / 100;
            const yearsDuration = Math.log(1 + ((1 + Math.log(allValues.growthForceIncrease) * Math.log(allValues.futureDeposit / allValues.currentDeposit)) / growthForce)) / Math.log(allValues.growthForceIncrease);
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

                    <Col span={5}>
                        <Form.Item
                            name="growthForceIncrease"
                            label="Приріст сили росту (a) %"
                        >
                            <InputNumber placeholder="3" min={0} max={100} />
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

export default YearsDurationByVariableForce;