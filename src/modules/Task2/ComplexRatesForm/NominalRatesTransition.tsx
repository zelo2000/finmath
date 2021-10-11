import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface NominalRatesTransitionProps { // completely done
    initialRate: number;
    eventualRate: number;
    initialChangeAmount: number;
    eventualChangeAmount: number;
}

const NominalRatesTransition: FC = () => {
    const [form] = Form.useForm<NominalRatesTransitionProps>();

    const handleChange = useCallback((_, allValues: NominalRatesTransitionProps) => {
        if (allValues.initialRate && allValues.initialChangeAmount && allValues.eventualChangeAmount) {
            const rate = allValues.initialRate / 100;
            const power = allValues.initialChangeAmount / allValues.eventualChangeAmount;
            const divider = rate / allValues.initialChangeAmount;
            const result = allValues.eventualChangeAmount * (Math.pow((1 + divider), (power)) - 1);
            form.setFieldsValue({ eventualRate: round(result * 100, 2) });
        }
    }, [form]);

    return (
        <div>
            <Form
                name="task1"
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
                    <Col span={8}>
                        <Form.Item
                            name="initialRate"
                            label="Задана номінальна ставка (j1) %"
                        >
                            <InputNumber placeholder="25" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="initialChangeAmount"
                            label="Кількість нарахувань в році для заданої ставки (m1)"
                        >
                            <InputNumber placeholder="12" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="eventualChangeAmount"
                            label="Кількість нарахувань в році для шуканої ставки (m2)"
                        >
                            <InputNumber placeholder="4" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={8}>
                        <Form.Item
                            name="eventualRate"
                            label="Шукана ставка (m2)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default NominalRatesTransition;
