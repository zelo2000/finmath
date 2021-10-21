import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';


export interface SimpleRateEqFormProps {
    simpleAccountingRate: number;
    simpleRate: number;
    term: number;
}

export const SimpleRateEqForm: FC = () => {
    const [form] = Form.useForm<SimpleRateEqFormProps>();

    const handleChanges = useCallback((_, allValues: SimpleRateEqFormProps) => {
        const {simpleAccountingRate, term} = allValues;

        if (!simpleAccountingRate || !term) return;

        const simpleRate = simpleAccountingRate / (1 - term * simpleAccountingRate / 100);
        form.setFieldsValue({simpleRate: round(simpleRate, 2)})
    }, [form]);

    return (
        <div>
            <Form
                name="task1"
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
                            name={"simpleAccountingRate"}
                            label={"Проста облікова ставка (d) %"}
                        >
                            <InputNumber placeholder="20"/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name={"term"}
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
                            name={"simpleRate"}
                            label={"Проста ставка відсотків (i)"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

