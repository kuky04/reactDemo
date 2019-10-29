import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation} from './components/Navigation';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      datos:[]
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1dqbsk')
    .then(res => res.json())
    .then((data) => {
      this.setState({ datos: data })
    })
    .catch(console.log)
  }


  handleAddTodo(datos){
    this.setState({
      datos:[...this.state.datos,datos]
    })
  }

  handleRemove(index){
    const items = {...this.state.datos};
    const newItems = Object.keys(items).map(key => items[key]);

    newItems.splice(index, 1);
    this.setState({
      todo: newItems
    });
  }

  render(){
    
  const todo=  this.state.datos.map((todo)=>{
      return (
        <div className="col-md-4">
          <div className="card  mt-4">
            <div className="card-header">
              <h3>
              {todo.title}
              </h3>
              <span className="badge badge-pill badge-warning ml-2">{todo.prioridad.toUpperCase()}</span>
            </div>
            <div className="card-body">
              <p>
                {todo.description}
              </p>
              <p>
               <strong>
                <mark>{todo.responsable}</mark>
              </strong> 
              </p>
              </div>
              <div className="card-footer">
                <button
                className="btn btn-danger"
                onClick={this.handleRemove}>Borrar</button>

              </div>
          </div>
        </div>

      )
    })
    return (
        <div className="App">
          <Navigation titulo="menu" cantidad={todo.length} />
          <div className="container">
            <div className="row mt-4">
                <div className="col-md-3 text-center">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Form onAddTodo={this.handleAddTodo}></Form>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {todo}
                  </div>
                </div>
              </div>
          </div>
          <div>
        </div>
        <div>

<Footer></Footer>
</div>
        </div>


       
      );
    }
  }
  

export default App;
