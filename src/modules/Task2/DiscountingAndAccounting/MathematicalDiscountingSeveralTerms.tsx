import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface MathematicalDiscountingSeveralTermsProps { // completely done
    initialLoan: number;
    rate: number;
    term: number;
    changeAmount: number;
    eventualLoan: number;
    discount: number;
}

const MathematicalDiscountingSeveralTerms: FC = () => {
    const [form] = Form.useForm<MathematicalDiscountingSeveralTermsProps>();

    const handleChange = useCallback((_, allValues: MathematicalDiscountingSeveralTermsProps) => {
        if (allValues.eventualLoan && allValues.rate && allValues.term && allValues.changeAmount) {
            const rate = allValues.rate / 100;
            const initialLoan = allValues.eventualLoan / Math.pow((1 + (rate / allValues.changeAmount)), (allValues.term * allValues.changeAmount));
            const discount = allValues.eventualLoan - initialLoan;
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
                    <Col span={8}>
                        <Form.Item
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber placeholder="10 000" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="rate"
                            label="Відсоткова ставка (і) %"
                        >
                            <InputNumber placeholder="30" />
                        </Form.Item>
                    </Col>

                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin year-select-block"
                >
                    <Col span={8}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="3" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="changeAmount"
                            label="Кількість нарахувань у році (m)"
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
                            name="initialLoan"
                            label="Cума грошей, яку дають в борг (P)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
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

export default MathematicalDiscountingSeveralTerms;
