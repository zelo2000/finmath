import {FC, useCallback} from 'react';
import {Checkbox, Col, Form, Input, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';
import {createWriteStream} from 'fs';

export interface ConsolidatedPaymentTermProps {
    n0: number;
    S: string;
    i: number;
    n: string;
    isComplex: boolean;
    S0: number;
}

export const ConsolidatedPaymentTermForm: FC = () => {
    const [form] = Form.useForm<ConsolidatedPaymentTermProps>();

    const handleChanges = useCallback((_, allValues: ConsolidatedPaymentTermProps) => {
        let {S0, S, n, isComplex, i} = allValues;

        i /= 100;
        if(!S0 || !S || !n || !i) return;

        const SArr = S.split(',').map(x => +x);
        const nArr = n.split(',').map(x => +x);

        const SnZipped = SArr.map((e, i) => [e, nArr[i]]);

        let n0 = 0;

        if(isComplex){
            let sum = 0;
            for (let s of SnZipped){
                sum += s[0]* Math.pow(1 + i, -s[1]/365);
            }

            n0 = Math.log(S0/sum)/Math.log(1 + i);
        }
        else {
            let sum = 0;
            for (let s of SnZipped){
                sum += s[0]* Math.pow((1 + s[1]*i/365), -1);
            }

            n0 = (S0/sum - 1) / i;
        }

        form.setFieldsValue({ n0: round(n0 * 365, 2)});
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
                            name={"S0"}
                            label={"Сума консолідованого платежу"}
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
                            name={"n0"}
                            label={"Термін консолідованого платежу"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
