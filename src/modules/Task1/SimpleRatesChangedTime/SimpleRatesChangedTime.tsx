import React, { FC, useCallback } from 'react';
import moment from 'moment';
import { Button, Col, DatePicker, Form, InputNumber, Row } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { round } from '../../../utils/helpers';

export interface SimpleRatesChangedTimeProps { // completely done
    totalRate: number;
    daysAmountInYear: number
    rates: { date: Date, transaction: number, remainder: number, term: number, rate: number }[];
    eventualLoan: number;
}

const SimpleRatesChangedTime: FC = () => {
    const [form] = Form.useForm<SimpleRatesChangedTimeProps>();

    const handleChange = useCallback((_, allValues: SimpleRatesChangedTimeProps) => {
        if (allValues.totalRate && allValues.daysAmountInYear && allValues.rates) {
            const rateDivider = allValues.daysAmountInYear / allValues.totalRate;
            let eventualRate = 0;
            for (let index = 0; index < allValues.rates.length; index++) {
                if (allValues.rates[index]) {
                    if (index === 0) {
                        allValues.rates[index].remainder = allValues.rates[index].transaction;
                        allValues.rates[index].term = 0;
                        allValues.rates[index].rate = 0;
                    }
                    else {
                        allValues.rates[index].remainder = allValues.rates[index - 1].remainder + allValues.rates[index].transaction;
                        allValues.rates[index - 1].term = moment(allValues.rates[index].date).startOf('day').diff(moment(allValues.rates[index - 1].date).startOf('day'), 'days');
                        allValues.rates[index - 1].rate = allValues.rates[index - 1].remainder * allValues.rates[index - 1].term / 100;
                        eventualRate += allValues.rates[index - 1].rate;
                    }
                }
            }
            const eventualLoan = eventualRate / rateDivider;
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
                    rates: [{ date: undefined, transaction: undefined, remainder: undefined, term: undefined, rate: undefined }]
                }}
            >
                <Row
                    justify='start'
                    align='bottom'
                    gutter={[16, 0]}
                    className='row-without-margin'
                >
                    <Col span={6}>
                        <Form.Item
                            name='totalRate'
                            label='Відсоткова ставка (і) %'
                        >
                            <InputNumber placeholder='15' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name='daysAmountInYear'
                            label='Кількість днів у році'
                        >
                            <InputNumber placeholder='365' />
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
                                    <Col span={4}>
                                        <Form.Item
                                            {...field}
                                            label='Дата'
                                            name={[field.name, 'date']}
                                            fieldKey={[field.fieldKey, 'date']}
                                        >
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            {...field}
                                            label='Рух коштів'
                                            name={[field.name, 'transaction']}
                                            fieldKey={[field.fieldKey, 'transaction']}
                                        >
                                            <InputNumber placeholder='120 000' />
                                        </Form.Item>
                                    </Col>

                                    <Col span={4}>
                                        <Form.Item
                                            {...field}
                                            label='Залишок на рахунку'
                                            name={[field.name, 'remainder']}
                                            fieldKey={[field.fieldKey, 'remainder']}
                                        >
                                            <InputNumber disabled />
                                        </Form.Item>
                                    </Col>

                                    <Col span={4}>
                                        <Form.Item
                                            {...field}
                                            label='Термін'
                                            name={[field.name, 'term']}
                                            fieldKey={[field.fieldKey, 'term']}
                                        >
                                            <InputNumber disabled />
                                        </Form.Item>
                                    </Col>

                                    <Col span={4}>
                                        <Form.Item
                                            {...field}
                                            label='Процентне число'
                                            name={[field.name, 'rate']}
                                            fieldKey={[field.fieldKey, 'rate']}
                                        >
                                            <InputNumber disabled />
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

export default SimpleRatesChangedTime;
