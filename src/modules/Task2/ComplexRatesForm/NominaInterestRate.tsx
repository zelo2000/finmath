import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface NominaInterestRateProps { // completely done
    initialLoan: number;
    rate: number;
    completeTerms: number;    
    incompleteTerms: number;
    changeAmount: number;
    eventualLoanMixed: number;
    eventualLoanGeneral: number;
}

const NominaInterestRate: FC = () => {
    const [form] = Form.useForm<NominaInterestRateProps>();

    const handleChange = useCallback((_, allValues: NominaInterestRateProps) => {
        if (allValues.initialLoan && allValues.rate && allValues.changeAmount && (allValues.completeTerms || allValues.incompleteTerms)) {
            let rate = allValues.rate / 100 / allValues.changeAmount;
            const eventualLoanGeneral = allValues.initialLoan * Math.pow((1 + rate), (allValues.completeTerms + allValues.incompleteTerms));
            const eventualLoanMixed = allValues.initialLoan * Math.pow((1 + rate), allValues.completeTerms) * (1 + (allValues.incompleteTerms * rate));
            form.setFieldsValue({ eventualLoanGeneral: round(eventualLoanGeneral, 2), eventualLoanMixed: round(eventualLoanMixed, 2) });
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
                            <InputNumber placeholder="100000" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="rate"
                            label="Відсоткова ставка (і) %"
                        >
                            <InputNumber placeholder="22" />
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
                            label="Кількість повних періодів"
                        >
                            <InputNumber placeholder="10" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="incompleteTerms"
                            label="Тривалість неповного періоду"
                        >
                            <InputNumber placeholder="0.33" />
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
                            name="eventualLoanGeneral"
                            label="Нарощена сума (загальний метод) (S)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="eventualLoanMixed"
                            label="Нарощена сума (змішаний метод) (S)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default NominaInterestRate;
