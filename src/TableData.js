import React from "react";
import {RootStore, storex} from "./RootStore";

class ActivityImportPanel extends React.Component {

    constructor(props) {

        console.log('constructor', props);
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.importActivity = this.importActivity.bind(this);
    }

    importActivity(bokunId) {
        console.log('importing', bokunId);
        var millisecondsToWait = 1000;
        var that = this;
        setTimeout(function() {

            let responseBokunId = 2735;
            //import product and receive Bokun id simulation


            //TODO: need to update storex for this product, so it has bokunId value
            that.props.store.importProduct(bokunId);



        }, millisecondsToWait);
    }

    render() {

        console.log('render of ActivityImportPanel');

        let bokunId = this.props.item.original.bokunId;
        let viatorId = this.props.item.original.id;
        return (
            <div>
                {bokunId !== -1 ?
                    <a href={'http://localhost:3000/products/activities/' + bokunId}>{bokunId}</a> :
                    <button onClick={e => this.props.store.importProduct(viatorId)}>Import</button>
                }
            </div>
        );
    }
}

// export const data = [{
//     id: "ABC1232",
//     title: 'Walk downtown LA',
//     descr: 'This tour is balblablablab and blablablabl',
//
//     importValuesPreview: {
//         detail1: 'DATE_AND_TIME',
//         detail2: 23,
//         detail3: ""
//     },
//
//     importPossibleValues: {
//         detail1: {values: ['DATE', 'PICKUP']},
//         detail3: ""
//     }
//
// },
//     {
//         id: "XX1",
//         title: 'Elephant room',
//         descr: 'Ticket to museum ',
//
//         importValuesPreview: {
//             detail1: 'FREESALE',
//             detail2: 23,
//         },
//
//         importPossibleValues: {
//             detail1: [{title: "Meet on location", value: "MEET_ON_LOCATION"}]
//         }
//
//     }
// ];


export const columns = [{
    Header: 'Viator Id',
    accessor: 'id'
}, {
    Header: 'Product name',
    accessor: 'title'
}, {
    Header: 'Product descr.',
    accessor: 'descr',
    Cell: props => <span className='string'>{props.value}</span> // Custom cell
}, {
    Header: 'Prices from',
    accessor: 'priceFrom',
}, {
    id: 'importButton',
    className: "right",
    Header: '',
    style: {
        textAlign: "right"
    },
    Cell: props => <ActivityImportPanel item={props} store={storex} />


}, {
    Header: "",
    columns: [
        {
            expander: true,
            Header: () => <strong>More</strong>,
            width: 65,
            Expander: ({isExpanded, ...rest}) =>
                <div>
                    {isExpanded
                        ? <span>&#x2299;</span>
                        : <span>&#x2295;</span>}
                </div>,
            style: {
                cursor: "pointer",
                fontSize: 25,
                padding: "0",
                textAlign: "center",
                userSelect: "none"
            }
        }
    ]
}];

