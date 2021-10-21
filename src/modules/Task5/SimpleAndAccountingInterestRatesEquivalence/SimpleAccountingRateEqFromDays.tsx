import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';


export interface SimpleAccountingRateEqFormDaysProps {
    simpleAccountingRate: number;
    simpleRate: number;
    term: number;
    timeBase: number;
}

export const SimpleAccountingRateEqFormDays: FC = () => {
    const [form] = Form.useForm<SimpleAccountingRateEqFormDaysProps>();

    const handleChanges = useCallback((_, allValues: SimpleAccountingRateEqFormDaysProps) => {
        const {term, simpleRate, timeBase} = allValues;
        if (!term || !simpleRate || !timeBase) return;

        const simpleAccountingRate = round(360 * simpleRate / (timeBase + simpleRate * term / 100), 2)
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
                            label={"Тривалість угоди (n) у днях"}
                        >
                            <InputNumber placeholder="5"/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name={"timeBase"}
                            label={"Часова база (К) у днях"}
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

