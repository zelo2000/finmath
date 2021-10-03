import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface CustomCreditProps { // completely done
    initialLoan: number;
    rate: number;
    term: number;    
    paymentCount: number;
    eventualLoan: number;
    oneTimePayment: number;
}

const CustomCredit: FC = () => {
    const [form] = Form.useForm<CustomCreditProps>();

    const handleChange = useCallback((_, allValues: CustomCreditProps) => {
        if (allValues.initialLoan && allValues.rate && allValues.term && allValues.paymentCount) {
            const eventualLoan = allValues.initialLoan * (1 + allValues.term * (allValues.rate / 100));
            const oneTimePayment = eventualLoan / (allValues.term * allValues.paymentCount);
            form.setFieldsValue({ eventualLoan: round(eventualLoan, 2), oneTimePayment: round(oneTimePayment, 2) });
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
                    <Col span={6}>
                        <Form.Item
                            name="initialLoan"
                            label="Cума грошей, що даються в борг (P)"
                        >
                            <InputNumber placeholder="100000" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="rate"
                            label="Відсоткова ставка (і) %"
                        >
                            <InputNumber placeholder="15" />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="3" />
                        </Form.Item>
                    </Col>                    

                    <Col span={6}>
                        <Form.Item
                            name="paymentCount"
                            label="Кількість виплат у році (m)"
                        >
                            <InputNumber placeholder="12" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    justify="start"
                    align="top"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={6}>
                        <Form.Item
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="oneTimePayment"
                            label="Величина разової виплати (R)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default CustomCredit;
