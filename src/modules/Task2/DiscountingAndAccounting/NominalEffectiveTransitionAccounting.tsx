import React, { FC, useCallback, useState } from "react";
import { Col, Form, InputNumber, Radio, Row } from "antd";

import { round } from '../../../utils/helpers';

export interface NominalEffectiveTransitionAccountionProps { // completely done
    nominalRate: number;
    effectiveRate: number;
    changeAmount: number;
    calculatedNominalRate: number;
    calculatedEffectiveRate: number;
}

const NominalEffectiveTransitionAccounting: FC = () => {
    const [form] = Form.useForm<NominalEffectiveTransitionAccountionProps>();
    const [calculateNominalRate, setCalculateNominalRate] = useState<boolean>(false);

    const handleChange = useCallback((_, allValues: NominalEffectiveTransitionAccountionProps) => {
        if (allValues.changeAmount && (allValues.nominalRate || allValues.effectiveRate)) {
            if (calculateNominalRate) {
                let rate = allValues.effectiveRate / 100;
                let result = allValues.changeAmount * (1 - Math.pow((1 - rate), (1 / allValues.changeAmount)));
                form.setFieldsValue({ calculatedNominalRate: round(result * 100, 2) });
            }
            else {
                let rate = allValues.nominalRate / 100;
                let result = 1 - Math.pow((1 - (rate / allValues.changeAmount)), (allValues.changeAmount));
                form.setFieldsValue({ calculatedEffectiveRate: round(result * 100, 2) });
            }
        }
    }, [form, calculateNominalRate]);

    const onRadioChange = useCallback((e) => {
        e.target.value === 2 ? setCalculateNominalRate(true) : setCalculateNominalRate(false);
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
                            name="changeAmount"
                            label="Кількість нарахувань у році (m)"
                        >
                            <InputNumber placeholder="2" />
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
                        <Radio value={1}>Обчислити ефективну ставку</Radio>
                        <Radio value={2}>Обчислити номінальну ставку</Radio>
                    </Radio.Group>
                </Row>

                <Row
                    justify="start"
                    align="bottom"
                    gutter={[16, 0]}
                    className="row-without-margin"
                >
                    {
                        calculateNominalRate ?

                            <Col span={8}>
                                <Form.Item
                                    name="effectiveRate"
                                    label="Ефективна ставка (%)"
                                >
                                    <InputNumber placeholder="20" />
                                </Form.Item>
                            </Col>
                            :
                            <Col span={8}>
                                <Form.Item
                                    name="nominalRate"
                                    label="Номінальна ставка (%)"
                                >
                                    <InputNumber placeholder="20" />
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
                        calculateNominalRate ?

                            <Col span={8}>
                                <Form.Item
                                    name="calculatedNominalRate"
                                    label="Номінальна ставка (%)"
                                >
                                    <InputNumber disabled />
                                </Form.Item>
                            </Col>
                            :
                            <Col span={8}>
                                <Form.Item
                                    name="calculatedEffectiveRate"
                                    label="Eфективна ставка (%)"
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

export default NominalEffectiveTransitionAccounting;
