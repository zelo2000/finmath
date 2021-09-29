import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface IncreaseMultiplierProps {
    growthForceIncrease: number;
    growthForce: number;
    yearsDuration: number;

    increaseMultiplierLinear: number;
    increaseMultiplierExponential: number;
}

const IncreaseMultiplier: FC = () => {
    const [form] = Form.useForm<IncreaseMultiplierProps>();

    const handleChange = useCallback((_, allValues: IncreaseMultiplierProps) => {
        if (allValues.growthForceIncrease && allValues.growthForce && allValues.yearsDuration) {
            const growthForceIncrease = allValues.growthForceIncrease / 100;
            const growthForce = allValues.growthForce / 100;

            const increaseMultiplierLinear = Math.exp(growthForce * allValues.yearsDuration
                + (growthForceIncrease * Math.pow(allValues.yearsDuration, 2) / 2));

            const increaseMultiplierExponential = Math.exp((growthForce / Math.log(growthForceIncrease))
                * (Math.pow(growthForceIncrease, allValues.yearsDuration) - 1));

            form.setFieldsValue({ increaseMultiplierLinear: round(increaseMultiplierLinear, 3), increaseMultiplierExponential: round(increaseMultiplierExponential, 3) });
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
                            name="growthForce"
                            label="Сила росту (δ) %"
                        >
                            <InputNumber placeholder="3" min={0} max={100} />
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

                    <Col span={5}>
                        <Form.Item
                            name="yearsDuration"
                            label="Тривалість періоду у роках (n)"
                        >
                            <InputNumber placeholder="7" />
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
                            name="increaseMultiplierLinear"
                            label="Множник нарощення для лінійної залежності"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="increaseMultiplierExponential"
                            label="Множник нарощення для експонентної залежності"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default IncreaseMultiplier;