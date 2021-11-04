import { FC, useCallback } from 'react';
import { Col, Form, InputNumber, Row } from 'antd';
import { round } from '../../../utils/helpers';

export interface NotConstantPaymentsProps {
    Y: number;
    D: number;
    g: number;
    n: number;
    t: number;
    Dt_1: number;
}

export const AmortizationEqual: FC = () => {
    const [form] = Form.useForm<NotConstantPaymentsProps>();

    const handleChanges = useCallback((_, allValues: NotConstantPaymentsProps) => {
        let { D, g, n, t } = allValues;
        if (!D || !g || !n || !t) return;

        let Dt_1 = D;
        t--;
        while (t > 0) {
            Dt_1 = Dt_1 * (n - 1) / n;
            t--;
        }

        const Yt = Dt_1 * g / 100 + D / n;
        form.setFieldsValue({ Y: round(Yt, 2), Dt_1: round(Dt_1, 2) });
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
                    <Col span={5}>
                        <Form.Item
                            name={"Dt_1"}
                            label={"Залишок боргу (Dt-1)"}
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
