import {FC, useCallback} from 'react';
import {Checkbox, Col, Form, Input, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';
import {createWriteStream} from 'fs';

export interface ConsolidatedPaymentSizeProps {
    n0: number;
    S: string;
    i: number;
    n: string;
    isComplex: boolean;
    S0: number;
}

export const ConsolidatedPaymentSizeForm: FC = () => {
    const [form] = Form.useForm<ConsolidatedPaymentSizeProps>();

    const handleChanges = useCallback((_, allValues: ConsolidatedPaymentSizeProps) => {
        let {n0, S, n, isComplex, i} = allValues;

        i /= 100;
        if(!n0 || !S || !n || !i) return;

        const SArr = S.split(',').map(x => +x);
        const nArr = n.split(',').map(x => +x);

        let S0 = 0;
        const SnZipped = SArr.map((e, i) => [e, nArr[i]]);

        for(let s of SnZipped){
            if(s[1] < n0){
                const t = n0 - s[1];
                S0 += s[0] * (isComplex ? Math.pow(1 + i, t/365) : (1 + i * t/365))
            }

            if(s[1] >= n0){
                const t = s[1] - n0;
                S0 += s[0] * (isComplex ? Math.pow(1 + i, -t/365) : Math.pow((1 + i * t/365), -1))
            }
        }

        form.setFieldsValue({S0: round(S0, 2)});
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
                            name={"S"}
                            label={"Платежі розділені комами (S)"}
                        >
                            <Input placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"n"}
                            label={"Терміни платежів у днях розділені комами (n)"}
                        >
                            <Input placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"n0"}
                            label={"Термін консолідації у днях"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"i"}
                            label={"Ставка (i)"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item
                            name={"isComplex"}
                            valuePropName="checked"
                        >
                            <Checkbox>Складний відсоток?</Checkbox>
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
                            name={"S0"}
                            label={"Консолідований платіж"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
