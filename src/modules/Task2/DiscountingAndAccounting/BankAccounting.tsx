import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface BankAccountingProps { // completely done
    initialLoan: number;
    rate: number;
    term: number;
    eventualLoan: number;
    discount: number;
}

const BankAccounting: FC = () => {
    const [form] = Form.useForm<BankAccountingProps>();

    const handleChange = useCallback((_, allValues: BankAccountingProps) => {
        if (allValues.eventualLoan && allValues.rate && allValues.term) {
            const initialLoan = allValues.eventualLoan * Math.pow((1 - (allValues.rate / 100)), allValues.term);
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
                            <InputNumber placeholder="100 000" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="rate"
                            label="Складна облікова ставка (і) %"
                        >
                            <InputNumber placeholder="20" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="2.5" />
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
                            label="Початкова сума (P)"
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

export default BankAccounting;
