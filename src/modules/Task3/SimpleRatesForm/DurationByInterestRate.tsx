import React, { FC, useCallback } from "react";
import { Checkbox, Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface DurationByInterestRateProps {
    currentDebt: number;
    futureDebt: number;
    interestRate: number;
    leapYear: boolean;
    yearsDuration: number;
    daysDuration: number;
}

const DurationByInterestRate: FC = () => {
    const [form] = Form.useForm<DurationByInterestRateProps>();

    const handleChange = useCallback((_, allValues: DurationByInterestRateProps) => {
        if (allValues.futureDebt && allValues.currentDebt && allValues.interestRate) {
            const yearsDuration = ((allValues.futureDebt / allValues.currentDebt) - 1) / (allValues.interestRate / 100);
            const daysDuration = yearsDuration * (allValues.leapYear ? 366 : 365);
            form.setFieldsValue({ yearsDuration: round(yearsDuration, 1), daysDuration: round(daysDuration, 1) });
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
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={5}>
                        <Form.Item
                            name="currentDebt"
                            label="Сучасна сума боргу (P)"
                        >
                            <InputNumber placeholder="10000" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name="futureDebt"
                            label="Майбутня сума боргу (S)"
                        >
                            <InputNumber placeholder="15000" />
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
                        <Form.Item name="leapYear" valuePropName="checked">
                            <Checkbox>Високосний рік</Checkbox>
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
                    <Col span={5}>
                        <Form.Item
                            name="daysDuration"
                            label="Тривалість періоду у днях (t)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default DurationByInterestRate;
