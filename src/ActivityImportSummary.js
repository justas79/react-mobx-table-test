import React from "react";

export class ActivityImportSummary extends React.Component {
    render() {

        const item = this.props.data[this.props.row.index];

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td><b>Description</b></td>
                        <td> This is description of the activity abagasfd fadsfj asdfksadf kasjf . asdf kjasdfk fsd.
                        </td>
                    </tr>
                    <tr>
                        <td><b>Start Times</b></td>
                        <td>10:15, 20:30, 23:30</td>
                    </tr>
                    <tr>
                        <td><b>Pricing Categories</b></td>
                        <td>Adult, Child, Family 2A2C, Family 2A4C, Infant, Senior</td>
                    </tr>
                    <tr>
                        <td><b>Pick Up</b></td>
                        <td>Victoria Station Centrale, Santo Domingo west side colombus 4e</td>
                    </tr>
                    <tr>
                        <td><b>Attribute5</b></td>
                        <td>Value 5</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        );
    }

}