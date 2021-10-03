import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface MathematicalDiscountingProps {
    initialLoan: number;
    rate: number;
    term: number;
    paymentCount: number;
    eventualLoan: number;
    discount: number;
}

const MathematicalDiscounting: FC = () => {
    const [form] = Form.useForm<MathematicalDiscountingProps>();

    const handleChange = useCallback((_, allValues: MathematicalDiscountingProps) => { //TODO : calculate years by date
        if (allValues.eventualLoan && allValues.rate && allValues.term) {
            const initialLoan = allValues.eventualLoan / (1 + allValues.term * (allValues.rate / 100));
            const discount = initialLoan * allValues.term * (allValues.rate / 100);
            form.setFieldsValue({ initialLoan: round(initialLoan, 2), discount: round(discount, 2) });
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
                    <Col span={5}>
                        <Form.Item
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber placeholder="100" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="rate"
                            label="Відсоткова ставка (і) %"
                        >
                            <InputNumber placeholder="20" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="0.2486" /> 
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
                            name="initialLoan"
                            label="Cума грошей, що даються в борг (P)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="discount"
                            label="Дисконт (D)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default MathematicalDiscounting;
