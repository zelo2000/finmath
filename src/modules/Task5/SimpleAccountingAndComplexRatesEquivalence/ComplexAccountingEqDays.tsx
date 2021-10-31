import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface ComplexAccountingEqDaysProps {
    i: number;
    n: number;
    d: number;
    K: number;
}

export const ComplexAccountingEqDaysForm: FC = () => {
    const [form] = Form.useForm<ComplexAccountingEqDaysProps>();

    const handleChanges = useCallback((_, allValues: ComplexAccountingEqDaysProps) => {
        const {n, d, K} = allValues;

        if(!n || !d || !K) return;

        const i = (Math.pow(1 - n/360 * d/100, -K/n) - 1) * 100;
        form.setFieldsValue({i: round(i, 2)});
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
                    <Col span={6}>
                        <Form.Item
                            name={"d"}
                            label={"Проста облікова ставка ставка (d) %"}
                        >
                            <InputNumber placeholder="20"/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name={"n"}
                            label={"Тривалість угоди (n) у днях"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name={"K"}
                            label={"Часова база (К)"}
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
                    <Col span={6}>
                        <Form.Item
                            name={"i"}
                            label={"Складна відсоткова ставка (i) %"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

