import {FC, useCallback} from 'react';
import {Checkbox, Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';
import {createWriteStream} from 'fs';

export interface OneMorePrivilegeFormProps {
    n: number;
    g: number;
    i: number;
    D: number;
    W: number;
    w: number;
    L: number;
}

export const OneMorePrivilegeForm: FC = () => {
    const [form] = Form.useForm<OneMorePrivilegeFormProps>();

    const handleChanges = useCallback((_, allValues: OneMorePrivilegeFormProps) => {
        let {n, g, i, D, L} = allValues;

        if(!n || !g || !i || !D || !L) return;

        const a = (n: number, i: number) => (1 - Math.pow((1 + i/100), -n)) / (i/100);

        const w = 1 - (a(n - L, i)/a(n - L, g))*Math.pow((1 + g/100)/(1 + i/100), L);
        const W = D * w;

        form.setFieldsValue({W: round(W, 2), w: round(w, 2)});
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
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"g"}
                            label={"Пільгова відсоткова ставка (g) %"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"i"}
                            label={"Ринкова відсоткова ставка (i) %"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"n"}
                            label={"Термін позики n"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"L"}
                            label={"Пільговий період (L)"}
                        >
                            <InputNumber placeholder="5"/>
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
                            name={"W"}
                            label={"Абсолютний грант-елемент (W)"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"w"}
                            label={"Відносний грант-елемент (w)"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
