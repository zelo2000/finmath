import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';


export interface ComplexSimpleEqFormProps {
    in: number;
    ic: number;
    n: number;
}

export const ComplexSimpleEqForm: FC = () => {
    const [form] = Form.useForm<ComplexSimpleEqFormProps>();

    const handleChanges = useCallback((_, allValues: ComplexSimpleEqFormProps) => {
        const {n} = allValues;
        const i_n = allValues.in;

        if(!i_n || !n) return;

        const ic = (Math.pow((1 + n*i_n/100), 1/n) - 1) * 100;
        form.setFieldsValue({ic: round(ic, 2)})
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
                            name={"in"}
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
                </Row>
                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className={"row-without-margin"}
                >
                    <Col span={6}>
                        <Form.Item
                            name={"ic"}
                            label={<span>Складна відсоткова ставка (i<sub>c</sub>) %</span>}
                        >
                            <InputNumber disabled/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

