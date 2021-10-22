import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface SimpleNominalEqFormProps {
    j: number;
    m: number;
    n: number;
    i_n: number;
}

export const SimpleNominalEqForm: FC = () => {
    const [form] = Form.useForm<SimpleNominalEqFormProps>();

    const handleChanges = useCallback((_, allValues: SimpleNominalEqFormProps) => {
        const {j, m, n} = allValues;

        if(!j || !m || !n) return;

        const i_n = (Math.pow((1 + j/100/m), m*n) - 1) / n * 100;
        form.setFieldsValue({i_n : round(i_n, 2)});
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
                            name={"j"}
                            label={"Номінальна відсоткова ставка (j) %"}
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
                    <Col span={6}>
                        <Form.Item
                            name={"m"}
                            label={"Частота нарахувань за рік (m)"}
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
                            name={"i_n"}
                            label={<span>Проста відсоткова ставка (i<sub>n</sub>) %</span>}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

