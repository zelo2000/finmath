import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface MixedMethodProps { // completely done
    initialLoan: number;
    rate: number;
    completeTerms: number;
    daysAmount: number;
    yearDaysAmount: number;
    eventualLoan: number;
    eventualRate: number;
}

const MixedMethod: FC = () => {
    const [form] = Form.useForm<MixedMethodProps>();

    const handleChange = useCallback((_, allValues: MixedMethodProps) => {
        if (allValues.initialLoan && allValues.rate && (allValues.completeTerms || (allValues.daysAmount && allValues.yearDaysAmount))) {
            let rate = allValues.rate / 100;
            const eventualLoan = allValues.initialLoan * Math.pow((1 + rate), allValues.completeTerms) * (1 + (allValues.daysAmount / allValues.yearDaysAmount * rate));
            const eventualRate = eventualLoan - allValues.initialLoan;
            form.setFieldsValue({ eventualLoan: round(eventualLoan, 2), eventualRate: round(eventualRate, 2) });
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
                            name="initialLoan"
                            label="Початкова сума (P)"
                        >
                            <InputNumber placeholder="300000" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="rate"
                            label="Відсоткова ставка (і) %"
                        >
                            <InputNumber placeholder="25" />
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
                            name="completeTerms"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="2" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="daysAmount"
                            label="Кількість днів позики (t)"
                        >
                            <InputNumber placeholder="155" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="yearDaysAmount"
                            label="Кількість днів у році (K)"
                        >
                            <InputNumber placeholder="365" />
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
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="eventualRate"
                            label="Сума процентів за період (I)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default MixedMethod;
