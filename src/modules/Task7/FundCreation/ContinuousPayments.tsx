import { FC, useCallback } from 'react';
import { Checkbox, Col, Form, InputNumber, Row } from 'antd';
import { round } from '../../../utils/helpers';

export interface ContinuousPaymentsProps {
    Y: number;
    D: number;
    g: number;
    I: number;
    n: number;
    isCapitalized: number;
}

export const ContinuousPayments: FC = () => {
    const [form] = Form.useForm<ContinuousPaymentsProps>();

    const handleChanges = useCallback((_, allValues: ContinuousPaymentsProps) => {
        const { D, g, I, n, isCapitalized } = allValues;
        if (!D || !g || !I || !n) return;

        const S = (Math.pow(1 + I / 100, n) - 1) / I * 100;
        const Y = !isCapitalized ? D * g / 100 + D / S : D * Math.pow((1 + g / 100), n) / S;
        form.setFieldsValue({ Y: round(Y, 2) });
    }, [form]);

    return (
        <div>
            <Form
                name="task2"
                form={form}
                onValuesChange={handleChanges}
                layout="vertical"
                className={"form-content"}
            >
                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className={"row-without-margin"}
                >
                    <Col span={5}>
                        <Form.Item
                            name={"isCapitalized"}
                            valuePropName="checked"
                        >
                            <Checkbox>Капіталізація?</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"D"}
                            label={"Величина заборгованості (D)"}
                        >
                            <InputNumber placeholder="5" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"g"}
                            label={"Відсоткова ставка за позикою (g) %"}
                        >
                            <InputNumber placeholder="5" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"I"}
                            label={"Проценти за позикою (I) %"}
                        >
                            <InputNumber placeholder="5" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"n"}
                            label={"Термін позики n"}
                        >
                            <InputNumber placeholder="5" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className={"row-without-margin"}
                >
                    <Col span={5}>
                        <Form.Item
                            name={"Y"}
                            label={"Термінова виплата (Y)"}
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
