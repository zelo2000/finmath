import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface ComplexNominalProps {
    d: number;
    j: number;
    m: number;
}

export const ComplexNominalEqForm: FC = () => {
    const [form] = Form.useForm<ComplexNominalProps>();

    const handleChanges = useCallback((_, allValues: ComplexNominalProps) => {
        const {m, j} = allValues;
        if(!m || !j) return;

        const d = (1 - Math.pow((1+j/100/m), -m))*100;
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
                            name={"m"}
                            label={"К-сть нарахувань (m)"}
                        >
                            <InputNumber placeholder="20"/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name={"j"}
                            label={"Номінальна ставка (j) %"}
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
                            name={"d"}
                            label={"Складна облікова ставка (d) %"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

