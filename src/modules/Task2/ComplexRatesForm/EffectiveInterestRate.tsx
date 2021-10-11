import React, { FC, useCallback, useState } from "react";
import { Col, Form, InputNumber, Radio, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface EffectiveInterestRateProps { // completely done
    nominalRate: number;
    effectiveRate: number;
    term: number;
    changeAmount: number;
    calculatedByNominalRate: number;
    calculatedByEffectiveRate: number;
}

const EffectiveInterestRate: FC = () => {
    const [form] = Form.useForm<EffectiveInterestRateProps>();
    const [calculateByNominalRate, setByCalculateNominalRate] = useState<boolean>(true);

    const handleChange = useCallback((_, allValues: EffectiveInterestRateProps) => {
        if (calculateByNominalRate) {
            if (allValues.changeAmount && allValues.term && allValues.nominalRate) {
                let rate = allValues.nominalRate / 100;
                let result = Math.pow((1 + (rate / allValues.changeAmount)), (allValues.term * allValues.changeAmount));
                form.setFieldsValue({ calculatedByNominalRate: round(result, 2) });
            }
        }
        else {
            if (allValues.term && allValues.effectiveRate) {
                let rate = allValues.effectiveRate / 100;
                let result = Math.pow((1 + rate), (allValues.term));
                form.setFieldsValue({ calculatedByEffectiveRate: round(result, 2) });
            }
        }
    }, [form, calculateByNominalRate]);

    const onRadioChange = useCallback((e) => {
        e.target.value === 1 ? setByCalculateNominalRate(true) : setByCalculateNominalRate(false);
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
                    className="row-without-margin year-select-block"
                >
                    <Radio.Group onChange={onRadioChange} defaultValue={1}>
                        <Radio value={1}>Обчислити за номінальною ставкою</Radio>
                        <Radio value={2}>Обчислити за ефективною ставкою</Radio>
                    </Radio.Group>
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    <Col span={8}>
                        <Form.Item
                            name="term"
                            label="Термін угоди у роках (n)"
                        >
                            <InputNumber placeholder="3" />
                        </Form.Item>
                    </Col>

                    {
                        calculateByNominalRate ?
                            <Col span={8}>
                                <Form.Item
                                    name="changeAmount"
                                    label="Кількість нарахувань у році (m)"
                                >
                                    <InputNumber placeholder="4" />
                                </Form.Item>
                            </Col>
                            :
                            <></>
                    }
                </Row>



                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    {
                        calculateByNominalRate ?
                            <Col span={8}>
                                <Form.Item
                                    name="nominalRate"
                                    label="Номінальна ставка (%)"
                                >
                                    <InputNumber placeholder="15" />
                                </Form.Item>
                            </Col>
                            :
                            <Col span={8}>
                                <Form.Item
                                    name="effectiveRate"
                                    label="Ефективна ставка (%)"
                                >
                                    <InputNumber placeholder="15" />
                                </Form.Item>
                            </Col>

                    }
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    {
                        calculateByNominalRate ?

                            <Col span={8}>
                                <Form.Item
                                    name="calculatedByNominalRate"
                                    label="Множник нарощення за номінальною ставкою"
                                >
                                    <InputNumber disabled />
                                </Form.Item>
                            </Col>
                            :
                            <Col span={8}>
                                <Form.Item
                                    name="calculatedByEffectiveRate"
                                    label="Множник нарощення за ефективною ставкою (%)"
                                >
                                    <InputNumber disabled />
                                </Form.Item>
                            </Col>
                    }
                </Row>
            </Form>
        </div>
    );
};

export default EffectiveInterestRate;
