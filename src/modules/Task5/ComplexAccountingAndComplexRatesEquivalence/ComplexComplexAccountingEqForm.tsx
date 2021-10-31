import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';

export interface ComplexComplexAccountingProps {
    i: number;
    d: number;
}

export const ComplexComplexAccountingEqForm: FC = () => {
    const [form] = Form.useForm<ComplexComplexAccountingProps>();

    const handleChanges = useCallback((_, allValues: ComplexComplexAccountingProps) => {
        const {i} = allValues;
        if(!i) return;

        const d = i/(1+i/100);
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
                            label={"Складна Облікова ставка (d) %"}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

