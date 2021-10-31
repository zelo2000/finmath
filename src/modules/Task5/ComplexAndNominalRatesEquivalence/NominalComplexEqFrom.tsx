import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface NominalComplexProps {
    d: number;
    j: number;
    m: number;
}

export const NominalComplexEqForm: FC = () => {
    const [form] = Form.useForm<NominalComplexProps>();

    const handleChanges = useCallback((_, allValues: NominalComplexProps) => {
        const {m, d}= allValues;
        if(!m || !d) return;

        const j = (Math.pow((1/(1-d/100)), 1/m) - 1)*m*100;
        form.setFieldsValue({j: round(j, 2)});
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
                            name={"m"}
                            label={"К-сть нарахувань (m)"}
                        >
                            <InputNumber placeholder="20"/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name={"d"}
                            label={"Складна облікова ставка (d) %"}
                        >
                            <InputNumber placeholder="20"/>
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
                            label={"Номінальна ставка (j) %"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        </div>
    )
}

