import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface YearsDurationByInterestRateProps {
    currentDeposit: number;
    futureDeposit: number;
    interestRate: number;
    frequency: number;
    yearsDuration: number;
}

const YearsDurationByInterestRate: FC = () => {
    const [form] = Form.useForm<YearsDurationByInterestRateProps>();

    const handleChange = useCallback((_, allValues: YearsDurationByInterestRateProps) => {
        if (allValues.futureDeposit && allValues.currentDeposit && allValues.interestRate && allValues.frequency) {
            const interestRate = allValues.interestRate / 100;

            const yearsDuration = (Math.log(allValues.futureDeposit / allValues.currentDeposit))
                / (allValues.frequency * Math.log(1 + (interestRate / allValues.frequency)));

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
                            <InputNumber placeholder="10000" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="futureDeposit"
                            label="Очікувана сума депозиту (S)"
                        >
                            <InputNumber placeholder="30000" />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="interestRate"
                            label="Відсоткова ставка (i) %"
                        >
                            <InputNumber placeholder="25" min={0} max={100} />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item
                            name="frequency"
                            label="Частота нарахування відсотків"
                            initialValue={1}
                        >
                            <InputNumber placeholder="4" min={1} max={366} />
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

export default YearsDurationByInterestRate;
