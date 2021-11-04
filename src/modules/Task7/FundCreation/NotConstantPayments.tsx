import { FC, useCallback } from 'react';
import { Col, Form, InputNumber, Row } from 'antd';
import { round } from '../../../utils/helpers';

export interface NotConstantPaymentsProps {
    Y: number;
    D: number;
    g: number;
    I: number;
    n: number;
    t: number;
    a: number;
}

export const NotConstantPayments: FC = () => {
    const [form] = Form.useForm<NotConstantPaymentsProps>();

    const handleChanges = useCallback((_, allValues: NotConstantPaymentsProps) => {
        const { D, g, I, n, t, a } = allValues;
        if (!D || !g || !I || !n || !t || !a) return;

        const S = (Math.pow(1 + I / 100, n) - 1) / I * 100;
        const R1 = 1 / (S) * (D - a * (Math.pow(1 + I / 100, n) - (1 + n * I / 100)) / (I / 100 * I / 100));
        const Rt = R1 + a * (t - 1);
        const Y = D * g / 100 + Rt;

        console.log(R1)
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
                    <Col span={5}>
                        <Form.Item
                            name={"t"}
                            label={"Номер платежа (t)"}
                        >
                            <InputNumber placeholder="5" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"a"}
                            label={"Різниця прогресії (a)"}
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
                            label={"Термінова виплата (Y_t)"}
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
