import React, { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props)  => {

    let categoryKeys: string[] = Object.keys(categories);

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(dateField),
            category: categoryField,
            title: titleField,
            value: valueField,
        };
        onAdd(newItem);
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <C.Container>
            <C.AreaItem>
                <C.Label>Data</C.Label>
                <C.Input type='date' value={dateField} onChange={e => setDateField( e.target.value )}/>
            </C.AreaItem>
            
            <C.AreaItem>
                <C.Label>Categoria</C.Label>
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </>
                </C.Select>
            </C.AreaItem>
            
            <C.AreaItem>
                <C.Label>Titulo</C.Label>
                <C.Input type='text' value={titleField} onChange={e => setTitleField( e.target.value )}/>
            </C.AreaItem>
            
            <C.AreaItem>
                <C.Label>Total</C.Label>
                <C.Input type='number' value={valueField} onChange={e => setValueField( parseFloat(e.target.value ))}/>
            </C.AreaItem>
            
            <C.AreaItem>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.AreaItem>
        </C.Container>
    );
}