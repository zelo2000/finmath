import {FC, useCallback} from 'react';
import {Checkbox, Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';
import {createWriteStream} from 'fs';

export interface MortgageFormProps {
    n: number;
    g: number;
    D: number;
    Y: number;
    m: number;
    t: number;
    S: number;
}

export const MortgageForm: FC = () => {
    const [form] = Form.useForm<MortgageFormProps>();

    const handleChanges = useCallback((_, allValues: MortgageFormProps) => {
        let {D, g, m, n, t} = allValues;

        if(!D || !g || !m || !n || !t) return;

        g /= 100;

        const k = 1 + g/m;
        const Y = D* g/m * Math.pow(k, m*n)/(Math.pow(k, m*n) - 1);
        const S = D * (Math.pow(k, m*n) - Math.pow(k, t-1))/(Math.pow(k, m*n) - 1);

        form.setFieldsValue({Y: round(Y, 2), S: round(S, 2)});
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
                            label={"Відсоткова ставка (g) %"}
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
                            name={"m"}
                            label={"Кількість нарахувань у році (m)"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"t"}
                            label={"Номер періоду нарахувань (t)"}
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
                            name={"Y"}
                            label={"Величина щомісячної виплати (Y)"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"S"}
                            label={"Сума боргу в період t (S)"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
