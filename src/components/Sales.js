import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Sales = () => {
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
                                    <li className="breadcrumb-item"><a href="#">Cloud Sales</a></li>
                                    <li className="breadcrumb-item active">Ventas</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group">
                                        <label htmlFor="client" className="control-label">Cliente</label>
                                        <select name="client" id="client" className="form-control">
                                            <option value="0">--Seleccione</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor className="control-label label-empty" />
                                    <button className="btn btn-success"><i className="fas fa-chevron-right" /></button>
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="product" className="control-label">Producto</label>
                                        <select name="product" id="product" className="form-control">
                                            <option value="0">--Seleccione</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label-control" htmlFor="msv">U.M.V.</label>
                                        <input className="form-control" type="text" name="msv" id="msv" readOnly="readonly" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label-control" htmlFor="stock">Stock</label>
                                        <input className="form-control" type="text" name="stock" id="stock" readOnly="readonly" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label-control" htmlFor="qty">Cantidad</label>
                                        <input className="form-control" type="number" name="qty" id="qty" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label-control" htmlFor="unitary">Unitario</label>
                                        <input className="form-control" type="number" name="unitary" id="unitary" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label-control" htmlFor="discount">Descuento</label>
                                        <input className="form-control" type="number" name="discount" id="discount" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label-control" htmlFor="total">Total</label>
                                        <input className="form-control" type="number" name="total" id="total" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary btn-block">
                                        <i className="fas fa-cart-plus" />Agregar
                                    </button>
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>Total</th>
                                                <th>Accion</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="neto" className="control-label">Neto</label>
                                    <input className="form-control" type="text" name="neto" id="neto" readOnly="readonly" value="0" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="tax" className="control-label">IVA</label>
                                    <input className="form-control" type="text" name="tax" id="tax" readOnly="readonly" value="0" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="otherTaxs" className="control-label">Otros Impuestos</label>
                                    <input className="form-control" type="text" name="otherTaxs" id="otherTaxs" readOnly="readonly" value="0" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="final" className="control-label">Total</label>
                                    <input className="form-control" type="text" name="final" id="final" readOnly="readonly" value="0" />
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="type" className="control-label">Tipo de Venta</label>
                                    <select className="form-control" name="type" id="type">
                                        <option value="0">-- --Seleccione</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="document" className="control-label">Tipo de Documento</label>
                                    <select className="form-control" name="document" id="document">
                                        <option value="0">-- --Seleccione</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Sales;