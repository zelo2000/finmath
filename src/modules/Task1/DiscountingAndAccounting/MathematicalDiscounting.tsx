import React, { FC, useCallback, useState } from "react";
import { Col, Form, InputNumber, Radio, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface MathematicalDiscountingProps { // completely done
    initialLoan: number;
    rate: number;
    term: number;
    daysAmount: number;
    yearDaysAmount: number;
    eventualLoan: number;
    discount: number;
}

const MathematicalDiscounting: FC = () => {
    const [form] = Form.useForm<MathematicalDiscountingProps>();
    const [showYear, setShowYear] = useState<boolean>(true);

    const handleChange = useCallback((_, allValues: MathematicalDiscountingProps) => {
        if (allValues.eventualLoan && allValues.rate && (allValues.term || (allValues.daysAmount && allValues.yearDaysAmount))) {
            let initialLoan = 0;
            if (showYear) {
                initialLoan = allValues.eventualLoan / (1 + allValues.term * (allValues.rate / 100));
            }
            else {
                initialLoan = allValues.eventualLoan / (1 + (allValues.daysAmount / allValues.yearDaysAmount) * (allValues.rate / 100));
            }
            const discount = allValues.eventualLoan - initialLoan;
            form.setFieldsValue({ initialLoan: round(initialLoan, 2), discount: round(discount, 2) });
        }
    }, [form, showYear]);

    const onRadioChange = useCallback((e) => {
        e.target.value === 1 ? setShowYear(true) : setShowYear(false);
    }, []);

    return (
        <div>
            <Form
                name="task1"
                form={form}
                onValuesChange={handleChange}
                layout="vertical"
                className="form-content"
            >
                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={8}>
                        <Form.Item
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber placeholder="100" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="rate"
                            label="Відсоткова ставка (і) %"
                        >
                            <InputNumber placeholder="20" />
                        </Form.Item>
                    </Col>

                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin year-select-block"
                >
                    <Radio.Group onChange={onRadioChange} defaultValue={1}>
                        <Radio value={1}>Ввести кількість років</Radio>
                        <Radio value={2}>Ввести кількість днів</Radio>
                    </Radio.Group>
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    {
                        showYear ?
                            <Col span={8}>
                                <Form.Item
                                    name="term"
                                    label="Термін угоди у роках (n)"
                                >
                                    <InputNumber placeholder="0.2486" />
                                </Form.Item>
                            </Col>
                            :
                            <>
                                <Col span={8}>
                                    <Form.Item
                                        name="daysAmount"
                                        label="Кількість днів позики (t)"
                                    >
                                        <InputNumber placeholder="91" />
                                    </Form.Item>
                                </Col><Col span={8}>
                                    <Form.Item
                                        name="yearDaysAmount"
                                        label="Кількість днів у році (K)"
                                    >
                                        <InputNumber placeholder="366" />
                                    </Form.Item>
                                </Col>
                            </>
                    }
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={8}>
                        <Form.Item
                            name="initialLoan"
                            label="Початкова сума (P)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="discount"
                            label="Дисконт (D)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default MathematicalDiscounting;
