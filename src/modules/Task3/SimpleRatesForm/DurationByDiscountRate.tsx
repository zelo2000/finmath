import React, { FC, useCallback } from "react";
import { Col, Form, InputNumber, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface DurationByDiscountRateProps {
    currentDebt: number;
    futureDebt: number;
    discountRate: number;
    yearsDuration: number;
    daysDuration: number;
}

const DurationByDiscountRate: FC = () => {
    const [form] = Form.useForm<DurationByDiscountRateProps>();

    const handleChange = useCallback((_, allValues: DurationByDiscountRateProps) => {
        if (allValues.futureDebt && allValues.currentDebt && allValues.discountRate) {
            const yearsDuration = (1 - (allValues.currentDebt / allValues.futureDebt)) / (allValues.discountRate / 100);
            const daysDuration = yearsDuration * 360;
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
                    align="top"
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
                            name="discountRate"
                            label="Облікова ставка (d) %"
                        >
                            <InputNumber placeholder="25" min={0} max={100} />
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

export default DurationByDiscountRate;
