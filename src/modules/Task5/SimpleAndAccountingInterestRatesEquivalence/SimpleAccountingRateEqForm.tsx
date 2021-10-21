import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';


export interface SimpleAccountingRateEqFormProps {
    simpleAccountingRate: number;
    simpleRate: number;
    term: number;
}

export const SimpleAccountingRateEqForm: FC = () => {
    const [form] = Form.useForm<SimpleAccountingRateEqFormProps>();

    const handleChanges = useCallback((_, allValues: SimpleAccountingRateEqFormProps) => {
        const {term, simpleRate} = allValues;
        if (!term || !simpleRate) return;

        const simpleAccountingRate = round(simpleRate / (1 + simpleRate * term / 100), 2)
        form.setFieldsValue({simpleAccountingRate})
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
                            name={"simpleRate"}
                            label={"Проста відсоткова ставка (i) %"}
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
                            name={"simpleAccountingRate"}
                            label={"Проста облікова ставка (d)"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

