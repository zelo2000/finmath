import { FC, useCallback } from 'react';
import { Col, Form, InputNumber, Row } from 'antd';
import { round } from '../../../utils/helpers';

export interface AllEqualProps {
    Y: number;
    D: number;
    g: number;
    n: number;
}

export const AllEqual: FC = () => {
    const [form] = Form.useForm<AllEqualProps>();

    const handleChanges = useCallback((_, allValues: AllEqualProps) => {
        let { D, g, n, } = allValues;
        if (!D || !g || !n) return;

        const a = (1 - Math.pow((1 + g / 100), -n)) / (g / 100)
        const Y = D / a;

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
