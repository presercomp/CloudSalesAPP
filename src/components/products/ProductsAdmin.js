import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import config from './../../helpers/config.json';

class ProductsAdmin extends React.Component{

    state = {
        productList: []
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET', headers: { 'Content-Type': 'application/json'}
        };
        fetch(config.apiURL+"products/"+config.operatorId, requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            this.setState({ productList: result.data.map((product) => { return product; }) });
        });
    
    }
    
    disable = (product) => {
        if(window.confirm("¿Está seguro/a de querer deshabilitar:\n"+product.name)){
            const requestOptionsPatch = {
                method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({
                    operatorId: config.operatorId,
                    name: product.name,
                    MSU: parseInt(product.MSU),
                    price: parseInt(product.price),
                    stock: parseInt(product.stock),
                    MDPrice: parseInt(product.MDPrice),
                    MDPercentage: parseInt(product.MDPercentage),
                    active: false
                })
            };
            fetch(config.apiURL+"products/"+product.id, requestOptionsPatch).then((response) => {
                return response.json();
            }).then((result) => {
                const requestOptions = {
                    method: 'GET', headers: { 'Content-Type': 'application/json'}
                };
                fetch(config.apiURL+"products/"+config.operatorId, requestOptions).then((response) => {
                    return response.json();
                }).then((result) => {
                    this.setState({ productList: result.data.map((product) => { return product; }) });
                    window.alert("Deshabilitación completada")
                });
            });   
        }
    }
    enable = (product) => {
        if(window.confirm("¿Está seguro/a de querer volver a habilitar:\n"+product.name)){
            const requestOptionsPatch = {
                method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({
                    operatorId: config.operatorId,
                    name: product.name,
                    MSU: parseInt(product.MSU),
                    price: parseInt(product.price),
                    stock: parseInt(product.stock),
                    MDPrice: parseInt(product.MDPrice),
                    MDPercentage: parseInt(product.MDPercentage),
                    active: true
                })
            };
            fetch(config.apiURL+"products/"+product.id, requestOptionsPatch).then((response) => {
                return response.json();
            }).then((result) => {
                const requestOptions = {
                    method: 'GET', headers: { 'Content-Type': 'application/json'}
                };
                fetch(config.apiURL+"products/"+config.operatorId, requestOptions).then((response) => {
                    return response.json();
                }).then((result) => {
                    this.setState({ productList: result.data.map((product) => { return product; }) });
                    window.alert("Habilitación completada")
                });
            });   
        }
    }

    render() {
        let rowData;
        if(this.state.productList.length === 0){
            rowData = <tr><td colSpan="4" className="text-center">No existen productos</td></tr>;
        } else {
            rowData = this.state.productList.map(p => {
                let button;
                if(p.active){
                    button = <button className="btn btn-secondary" onClick={() => this.disable(p)}><i className="fas fa-eye-slash"></i> Deshabilitar</button>;
                } else {
                    button = <button className="btn btn-primary" onClick={() => this.enable(p)}><i className="fas fa-eye"></i> Habilitar</button>;
                }
                
                return (<tr>
                    <td>{p.name}</td><td className="text-right">${p.price}</td><td className="text-right">{p.stock}</td>
                    <td className="d-flex justify-content-between">
                        {button}
                        <button className="btn btn-warning"><i className="fas fa-pencil"></i> Editar</button>
                    </td>
                </tr>); 
            });
        }
        return (
            <div>
                <Topbar />
                <Sidebar />
                <div className="content-wrapper">
                    <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Panel de Ventas</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/">Cloud Sales</a></li>
                                    <li className="breadcrumb-item active">Productos</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className="content">
                        <div className="card">
                            <div className="card-header">
                                <Link to="/products/add" className="btn btn-success"><i className="fas fa-plus"></i> Nuevo</Link>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Precio Unitario</th>
                                                <th>Stock Actual</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {rowData}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default ProductsAdmin;