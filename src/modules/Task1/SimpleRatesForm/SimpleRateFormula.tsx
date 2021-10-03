import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface SimpleRateFormulaProps { // completely done
    initialLoan: number;
    rate: number;
    term: number;
    eventualLoan: number;
    eventualRate: number;
}

const SimpleRateFormula: FC = () => {
    const [form] = Form.useForm<SimpleRateFormulaProps>();

    const handleChange = useCallback((_, allValues: SimpleRateFormulaProps) => {
        if (allValues.initialLoan && allValues.rate && allValues.term) {
            const eventualRate = allValues.term * allValues.initialLoan * (allValues.rate / 100);
            const eventualLoan = allValues.initialLoan * (1 + allValues.term * (allValues.rate / 100));
            form.setFieldsValue({ eventualLoan: round(eventualLoan, 1), eventualRate: round(eventualRate, 1) });
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
                            label="Cума грошей, що даються в борг (P)"
                        >
                            <InputNumber placeholder="100000" />
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

                    <Col span={8}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у періодах (n)"
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
                    <Col span={8}>
                        <Form.Item
                            name="eventualRate"
                            label="Сума процентів за період (I)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SimpleRateFormula;
