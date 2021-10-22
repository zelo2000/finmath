import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface NominalSimpleEqProps {
    j: number;
    m: number;
    n: number;
    i_n: number;
}

export const NominalSimpleEqForm: FC = () => {
    const [form] = Form.useForm<NominalSimpleEqProps>();

    const handleChanges = useCallback((_, allValues: NominalSimpleEqProps) => {
        const {i_n, m, n} = allValues;

        if(!i_n || !m || !n) return;

        const j = m * (Math.pow((1 + n * i_n/100), 1/(m*n)) - 1) * 100;
        form.setFieldsValue({j : round(j, 2)});
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
                            name={"i_n"}
                            label={<span>Проста відсоткова ставка (i<sub>n</sub>) %</span>}
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
                            name={"j"}
                            label={"Номінальна відсоткова ставка (j) %"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

