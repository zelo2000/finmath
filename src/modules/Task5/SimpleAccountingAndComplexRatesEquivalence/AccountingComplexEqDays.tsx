import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface AccountingComplexEqDaysProps {
    i: number;
    n: number;
    d: number;
    K: number;
}

export const AccountingComplexEqDaysForm: FC = () => {
    const [form] = Form.useForm<AccountingComplexEqDaysProps>();

    const handleChanges = useCallback((_, allValues: AccountingComplexEqDaysProps) => {
        const {i, n, K} = allValues;

        if(!i || !n || !K) return;

        const d = 360/n * (1 - (Math.pow(1 + i/100, -n/K))) * 100;

        form.setFieldsValue({d: round(d, 2)});
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
                            name={"i"}
                            label={"Складна відсоткова ставка (i) %"}
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
                            label={"Часова база (К) у днях"}
                        >
                            <InputNumber placeholder="365"/>
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
                            name={"d"}
                            label={"Проста облікова ставка (d) %"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

