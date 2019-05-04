import {Component} from 'inferno';
import {connect} from 'inferno-redux';
import * as actions from '../Actions/index';
import './style.css';


class FormItem extends Component{
    render() {
        let {text, checkedName, checkedSurname, checkedSex} = this.props;
        return (
            <div className='output-form__item'>
                <h1>{text}</h1>
                <div className='form-input'>
                    {checkedName? <input type="name" placeholder='name' className='input1'/>:null}
                    {checkedSurname? <input type="name" placeholder='surname' className='input2'/>:null}
                    {checkedSex? <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>:null}
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(FormItem);