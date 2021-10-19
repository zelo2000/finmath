import React, { FC, useCallback, useState } from "react";
import { Col, Form, InputNumber, Radio, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface ComplexRateIncreaseProps { // completely done
    initialLoan: number;
    nominalRate: number;
    effectiveRate: number;
    term: number;
    changeAmount: number;
    eventualLoan: number;
}

const ComplexRateIncrease: FC = () => {
    const [form] = Form.useForm<ComplexRateIncreaseProps>();
    const [calculateByNominalRate, setCalculateByNominalRate] = useState<boolean>(false);

    const handleChange = useCallback((_, allValues: ComplexRateIncreaseProps) => {
        if (allValues.initialLoan && allValues.term && ((allValues.nominalRate && allValues.changeAmount) || allValues.effectiveRate)) {
            if (calculateByNominalRate) {
                let rate = allValues.nominalRate / 100;
                let eventualLoan = allValues.initialLoan / (Math.pow((1 - rate / allValues.term), (allValues.term * allValues.changeAmount)));
                form.setFieldsValue({ eventualLoan: round(eventualLoan, 2) });
            }
            else {
                let rate = allValues.effectiveRate / 100;
                let eventualLoan = allValues.initialLoan / Math.pow((1 - rate), (allValues.term));
                form.setFieldsValue({ eventualLoan: round(eventualLoan, 2) });
            }
        }
    }, [form, calculateByNominalRate]);

    const onRadioChange = useCallback((e) => {
        e.target.value === 2 ? setCalculateByNominalRate(true) : setCalculateByNominalRate(false);
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
                            name="initialLoan"
                            label="Початкова сума (P)"
                        >
                            <InputNumber placeholder="50000" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="5" />
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
                        <Radio value={1}>Обчислити за ефективною ставкою</Radio>
                        <Radio value={2}>Обчислити за номінальною ставкою</Radio>
                    </Radio.Group>
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    {
                        calculateByNominalRate ?
                            <>
                                <Col span={8}>
                                    <Form.Item
                                        name="nominalRate"
                                        label="Номінальна ставка (%)"
                                    >
                                        <InputNumber placeholder="17" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="changeAmount"
                                        label="Кількість нарахувань у році (m)"
                                    >
                                        <InputNumber placeholder="4" />
                                    </Form.Item>
                                </Col>
                            </>
                            :
                            <Col span={8}>
                                <Form.Item
                                    name="effectiveRate"
                                    label="Ефективна ставка (%)"
                                >
                                    <InputNumber placeholder="17" />
                                </Form.Item>
                            </Col>
                    }
                </Row>

                <Row
                    justify="start"
                    align="top"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={8}>
                        <Form.Item
                            name="eventualLoan"
                            label="Нарощена сума (S)"
                        >
                            <InputNumber disabled />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ComplexRateIncrease;
