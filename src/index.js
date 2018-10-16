import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './index.css';
import {types, onSnapshot} from "mobx-state-tree"
import axios from 'axios';
import {observer} from "mobx-react";
import {RootStore, storex} from "./RootStore";
import {data, columns} from "./TableData";
import {ActivityImportSummary} from "./ActivityImportSummary";
import * as Spinner from 'react-spinkit';


class ViatorImport extends React.Component {

    componentDidMount() {
        console.log(this.props.storex.products.size);
    }

    render() {
        console.log("rendering with ", this.props.storex.isFetchInProgress);
        return (
            <div>

                <h1>das ist props {}</h1>

                <div>
                    <h1>Import products from Viator into Bokun</h1>
                    <p></p>
                    <span>In this section you'll be able to import products from Viator into Bokun system. Please do the following:<br/>
                        - speficy your supplier id on Viator system <br/>
                        - press "Preview Products..". Products will be fetched and displayed <br/>
                        - You can choose manually import product-by-product <br/>
                        - Or you can choose "Import all.."
                        <p></p>
                    </span>
                </div>
                <div style={{display: 'inline'}}>
                    <span style={{fontWeight: 'bold'}}>Viator Supplier Id</span>

                    <input type={'text'}
                           placeholder={'Viator Supplier ID'}/>

                    <button
                        onClick={e => this.props.storex.addProducts()}
                        disabled={this.props.storex.isFetchInProgress ? true : false}>
                        {/*{<i className='fa-circle-o-notch fa-spin'></i> }*/}
                        Preview Products...
                    </button>

                    {this.props.storex.isFetchInProgress ?
                        <div style={{display: 'inline'}}> Loading ... <Spinner style={{display: 'inline'}}
                                                                               name="three-bounce"/></div> :
                        null}
                </div>

                {this.props.storex.products.length != 0 ? <div><ExpandableTable store={this.props.storex}/></div> : <div></div>}

                {/*{this.props.storex.products.map(item => (<div>item.title</div>))}*/}

            </div>
        );
    };
}


class ExpandableTable extends React.Component {
    render() {
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    className="-striped -highlight"
                    SubComponent={row => <div style={{padding: '20px'}}>
                        <ActivityImportSummary
                            row={row}
                            data={data}
                        />
                    </div>}
                />

            </div>
        );
    }
}


// ========================================


const ObservedViatorImport = observer(ViatorImport);

ReactDOM.render(
    <ObservedViatorImport storex={storex}/>, document.getElementById('root')
);

