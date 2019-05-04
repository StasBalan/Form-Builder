import {Component} from 'inferno';
import {connect} from 'inferno-redux';
import FormItem from '../NewForm-item/index.js';
import './style.css'
import * as actions from "../Actions/index";


class New extends Component{
    render() {
        const {todoArr} = this.props;
        const elements = todoArr.map((elem, index) => {
            const {...items} = elem;
            return (
                <div key={index}
                    className='output-form'>
                    <FormItem {...items} />
                </div>
            );
        });

        return (
            <div className='output-form__app'>
                {elements}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {
       todoArr: state.items
   }
};

export default connect(mapStateToProps, actions)(New);
