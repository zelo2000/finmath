import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';


export interface SimpleRateEqFormDaysProps {
    simpleAccountingRate: number;
    simpleRate: number;
    term: number;
    timeBase: number;
}

export const SimpleRateEqFormDays: FC = () => {
    const [form] = Form.useForm<SimpleRateEqFormDaysProps>();

    const handleChanges = useCallback((_, allValues: SimpleRateEqFormDaysProps) => {
        const {simpleAccountingRate, term, timeBase} = allValues;

        if (!simpleAccountingRate || !term || !timeBase) return;

        const simpleRate = timeBase * simpleAccountingRate / (360 - term * simpleAccountingRate / 100);
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

