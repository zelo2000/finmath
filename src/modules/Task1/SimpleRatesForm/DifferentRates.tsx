import React, { FC, useCallback } from 'react';
import { Button, Col, Form, InputNumber, Row } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { round } from '../../../utils/helpers';

export interface DifferentRatesProps { // completely done
    initialLoan: number;
    rates: { rate: number, term: number }[];
    eventualLoan: number;
}

const DifferentRates: FC = () => {
    const [form] = Form.useForm<DifferentRatesProps>();

    const handleChange = useCallback((_, allValues: DifferentRatesProps) => {
        if (allValues.initialLoan && allValues.rates) {
            let eventualLoan = 1;
            for (let index = 0; index < allValues.rates.length; index++) {
                if (allValues.rates[index]) {
                    eventualLoan += (allValues.rates[index].rate / 100) * allValues.rates[index].term;
                }
            }
            eventualLoan *= allValues.initialLoan;
            form.setFieldsValue({ eventualLoan: round(eventualLoan, 2) });
        }
    }, [form]);

    return (
        <div>
            <Form
                name='task1'
                form={form}
                onValuesChange={handleChange}
                layout='vertical'
                className='form-content'
                initialValues={{
                    rates: [{ rate: undefined, term: undefined }]
                }}
            >
                <Row
                    justify='start'
                    align='bottom'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Col span={8}>
                        <Form.Item
                            name='initialLoan'
                            label='Початкова сума (P)'
                        >
                            <InputNumber placeholder='10 000' />
                        </Form.Item>
                    </Col>
                </Row>


                <Form.List name='rates'>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(field => (
                                <Row
                                    justify='start'
                                    align='middle'
                                    gutter={[16, 0]}
                                    key={field.key}
                                    className='row-without-margin'
                                >
                                    <Col span={8}>
                                        <Form.Item
                                            {...field}
                                            label='Відсоткова ставка (і) %'
                                            name={[field.name, 'rate']}
                                            fieldKey={[field.fieldKey, 'rate']}
                                        >
                                            <InputNumber placeholder='25' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            {...field}
                                            label='Термін угоди у роках (n)'
                                            name={[field.name, 'term']}
                                            fieldKey={[field.fieldKey, 'term']}
                                        >
                                            <InputNumber placeholder='5' />
                                        </Form.Item>
                                    </Col>

                                    <Col>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Col>

                                </Row>
                            ))}

                            <Row>
                                <Col span={4}>
                                    <Form.Item>
                                        <Button
                                            type='primary'
                                            ghost
                                            onClick={() => add()}
                                            block
                                            icon={<PlusOutlined />}
                                        >
                                            Додати період
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </>
                    )}
                </Form.List>


                <Row
                    justify='start'
                    align='top'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Col span={8}>
                        <Form.Item
                            name='eventualLoan'
                            label='Нарощена сума (S)'
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default DifferentRates;
