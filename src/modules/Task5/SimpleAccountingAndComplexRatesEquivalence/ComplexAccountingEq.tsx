import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface ComplexAccountingEqProps {
    i: number;
    n: number;
    d: number;
}

export const ComplexAccountingEqForm: FC = () => {
    const [form] = Form.useForm<ComplexAccountingEqProps>();

    const handleChanges = useCallback((_, allValues: ComplexAccountingEqProps) => {
        const {n, d} = allValues;

        if(!n || !d) return;

        const i = (Math.pow(1 - n * d/100, -1/n) - 1) * 100;
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
                            label={"Тривалість угоди (n) у роках"}
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

