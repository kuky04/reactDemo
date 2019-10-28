import React,{Component} from 'react';
import SweetAlert from 'sweetalert2-react';


export class Form extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      prioridad: 'baja'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInput(e){
    const {value,name }=e.target;
    this.setState({
      [name]:value
    })
   }

   handleForm(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
   }

  render(){
    return(
      <div className="card">
         <form className="card-body" onSubmit={this.handleForm}>
            <div className="form-group">
              <h4>Agregar Datos</h4>
                <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control form-control-sm"
                placeholder="Título"
                />
              </div>
            <div className="form-group">
              <input
                type="text"
                name="responsable"
                onChange={this.handleInput}
                className="form-control form-control-sm"
                placeholder="Responsable"
                />
             </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control form-control-sm"
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control form-control-sm"
                onChange={this.handleInput}
             >
              <option>baja</option>
              <option>media</option>
              <option>alta</option>
            </select>
          </div>
          <button onClick={() => this.setState({ show: true })} type="submit" className="btn btn-primary btn-block text-uppercase">
            Guardar
            <SweetAlert
              show={this.state.show}
              title="Guardado!"
              text="Agregado con éxito"
              onConfirm={() => this.setState({ show: false })}
            />
          </button>
         </form>
      </div>
    );
  }
}

export default Form;