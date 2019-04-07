
import './form-player.scss';
import React, { useState } from 'react';
import { FormPlayerValidator } from '../../core/football.validator';

//This data not fetch from api, #FIXME
const positions = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre-Back',
    'Centre-Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left-Back',
    'Right-Back'
];

export default function FormPlayer({ onSearch } : { onSearch: Function }) {

    const [formData, setFormData] = useState({
        name: '',
        position: positions[0],
        age: '18',
    });

    const [formErr, setFormErr] = useState({
        name: null,
        position: null,
        age: null
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (FormPlayerValidator.isValid(formErr)) {
            onSearch(formData);
        }
    }

    const onChange = ({ target } : { target: any }) => {
        const { name, value } = target;
        setFormData({ ...formData, [name]: value });
        setFormErr({ ...formErr, [name]: FormPlayerValidator.validateField(name, value, positions)});
    }

    return (
        <form className="form-player-ctn" onSubmit={(e : React.FormEvent<HTMLFormElement>)=> onSubmit(e)} onChange={(e : React.ChangeEvent<HTMLFormElement>)=> onChange(e)}>
            <div className="form-player-ctn__form-player-group">
                <input type="text" name={FormPlayerValidator.INPUT_NAME} className="form-control form-player-group__ctrl" placeholder="Player Name" required/>
                { formErr.name && <span className="form-player-group__err">{formErr.name}</span>}
            </div>
            <div className="form-player-ctn__form-player-group">
                <select className="form-control form-player-group__ctrl" name={FormPlayerValidator.INPUT_POSITION}>
                    {positions.map((position, i) => <option value={position} key={i}>{position}</option>)}
                </select>
            </div>
            <div className="form-player-ctn__form-player-group">
                <input type="number" name={FormPlayerValidator.INPUT_AGE} className="form-control form-player-group__ctrl" placeholder="Age" defaultValue={formData.age} />
                { formErr.name && <span className="form-player-group__err">{formErr.age}</span>}
            </div>
            <div className="form-player-ctn__form-player-group">
                <button type="submit" className="btn btn-lg btn-block btn-primary form-player-group__btn">Search</button>
            </div>
        </form>
    );

}