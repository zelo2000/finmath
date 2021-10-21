import {FC, useCallback} from 'react';
import {Col, Form, InputNumber, Row} from 'antd';
import {round} from '../../../utils/helpers';


export interface SimpleComplexEqFormProps {
    in: number;
    ic: number;
    n: number;
}

export const SimpleComplexEqForm: FC = () => {
    const [form] = Form.useForm<SimpleComplexEqFormProps>();

    const handleChanges = useCallback((_, allValues: SimpleComplexEqFormProps) => {
        const {ic, n} = allValues;

        if(!ic || !n) return;

        const i_n = (Math.pow((1 + ic / 100), n) - 1) / n * 100;
        form.setFieldsValue({in: round(i_n, 2)})
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
                            name={"ic"}
                            label={<span>Складна відсоткова ставка (i<sub>c</sub>) %</span>}
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
                            name={"in"}
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

