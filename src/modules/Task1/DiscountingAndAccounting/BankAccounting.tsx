import React, { FC, useCallback, useState } from "react";
import { Col, Form, InputNumber, Radio, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface BankAccountingProps { // completely done
    initialLoan: number;
    rate: number;
    term: number;
    daysAmount: number;
    yearDaysAmount: number;
    paymentCount: number;
    eventualLoan: number;
    discount: number;
}

const BankAccounting: FC = () => {
    const [form] = Form.useForm<BankAccountingProps>();
    const [showYear, setShowYear] = useState<boolean>(true);

    const handleChange = useCallback((_, allValues: BankAccountingProps) => {
        if (allValues.eventualLoan && allValues.rate && (allValues.term || (allValues.daysAmount && allValues.yearDaysAmount))) {
            let initialLoan = 0;
            if (showYear) {
                initialLoan = allValues.eventualLoan * (1 - allValues.term * (allValues.rate / 100));
            }
            else {
                initialLoan = allValues.eventualLoan * (1 - (allValues.daysAmount / allValues.yearDaysAmount) * (allValues.rate / 100));
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
                            label="???????????????? ???????? (S)"
                        >
                            <InputNumber placeholder="100000" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="rate"
                            label="???????????????? ???????????? (d) %"
                        >
                            <InputNumber placeholder="15" />
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
                        <Radio value={1}>???????????? ?????????????????? ??????????</Radio>
                        <Radio value={2}>???????????? ?????????????????? ????????</Radio>
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
                                    label="???????????? ?????????? ?? ?????????? (n)"
                                >
                                    <InputNumber placeholder="1" />
                                </Form.Item>
                            </Col>
                            :
                            <>
                                <Col span={8}>
                                    <Form.Item
                                        name="daysAmount"
                                        label="?????????????????? ???????? ???????????? (t)"
                                    >
                                        <InputNumber placeholder="360" />
                                    </Form.Item>
                                </Col><Col span={8}>
                                    <Form.Item
                                        name="yearDaysAmount"
                                        label="?????????????????? ???????? ?? ???????? (K)"
                                    >
                                        <InputNumber placeholder="360" />
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
                            label="?????????????????? ???????? (P)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="discount"
                            label="?????????????? (D)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default BankAccounting;
