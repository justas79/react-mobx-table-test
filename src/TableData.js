import React from "react";


class ActivityImportPanel extends React.Component {

    importActivity(item) {
        console.log('Importing:', item);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.importActivity(this.props.item)}>Import</button>
            </div>
        );
    }
}

export const data = [{
    id: "ABC1232",
    title: 'Walk downtown LA',
    descr: 'This tour is balblablablab and blablablabl',

    importValuesPreview: {
        detail1: 'DATE_AND_TIME',
        detail2: 23,
        detail3: ""
    },

    importPossibleValues: {
        detail1: {values: ['DATE', 'PICKUP']},
        detail3: ""
    }

},
    {
        id: "XX1",
        title: 'Elephant room',
        descr: 'Ticket to museum ',

        importValuesPreview: {
            detail1: 'FREESALE',
            detail2: 23,
        },

        importPossibleValues: {
            detail1: [{title: "Meet on location", value: "MEET_ON_LOCATION"}]
        }

    }
];

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
    id: 'importDetails',
    Header: 'Import details',
    accessor: d => d.importValuesPreview.detail1
}, {
    id: 'importButton',
    className: "right",
    Header: '',
    style: {
        textAlign: "right"
    },
    Cell: props => <ActivityImportPanel item={props}/>


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

