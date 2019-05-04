import {Component} from 'inferno';
import {connect} from 'inferno-redux';
import './style.css';
import * as actions from '../Actions/index';
import {Alert} from 'inferno-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueT: '',
            checkedName: false,
            checkedSurname: false,
            checkedSex: false,
            isError: false
        }
    }

    valueText = (e) => {
        const text = e.target.value;
        this.setState({
            valueT: text
        });
    };

    doToggle = () => {
        this.setState({checkedName: !this.state.checkedName});
    };

    doToggle2 = () => {
        this.setState({checkedSurname: !this.state.checkedSurname});
    };

    doToggle3 = () => {
        this.setState({checkedSex: !this.state.checkedSex});
    };

    createForm = () => {
        const myText = this.state.valueT;
        const checkName = this.state.checkedName;
        const checkSurname = this.state.checkedSurname;
        const checkSex = this.state.checkedSex;

        if(checkName || checkSurname || checkSex){
            const lastArr = {
                text: myText,
                checkedName: checkName,
                checkedSurname: checkSurname,
                checkedSex: checkSex
            };
            this.props.actionCreateForm(lastArr);
            console.log(lastArr);
            this.setState({
                isError: false
            });
        }else {
            this.setState({
                isError: true
            });
        }

    };

    render() {
        return (
            <div className='form-builder'>
                <h1 className='form-builder__title'>Form Builder</h1>
                <input className='form-builder__input'
                       type="text"
                       placeholder='Enter some questions'
                       onChange={this.valueText}/>
                <h3 className='form-builder__sub-title'>Select the required fields for the form: </h3>
                <div className='form-builder__checkbox'>
                    <input type="checkbox"
                           id='check'
                           value={this.state.checkedName}
                           onChange={this.doToggle}
                        />
                    <label htmlFor="check">Name</label>
                    <input type="checkbox"
                           id='check'
                           value={this.state.checkedSurname}
                           onChange={this.doToggle2}
                    />
                    <label htmlFor="check">Surname</label>
                    <input type="checkbox"
                           id='check'
                           value={this.state.checkedSex}
                           onChange={this.doToggle3}/>
                    <label htmlFor="check">Sex</label>
                </div>
                <button className='form-builder__button' onClick={this.createForm}>Create</button>
                <div>
                    {this.state.isError?<Alert color="danger">
                        Some cool text in a <b>danger</b> alert box!
                    </Alert>:null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       itemArr: state.items
    }
};

export default connect(mapStateToProps, actions)(Home);