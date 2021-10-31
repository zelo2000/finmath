import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface AccountingComplexEqProps {
    i: number;
    n: number;
    d: number;
}

export const AccountingComplexEqForm: FC = () => {
    const [form] = Form.useForm<AccountingComplexEqProps>();

    const handleChanges = useCallback((_, allValues: AccountingComplexEqProps) => {
        const {i, n} = allValues;

        if(!i || !n) return;

        const d = (1 - Math.pow((1 + i/100), -n))/n * 100;

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

