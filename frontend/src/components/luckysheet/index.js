import React, { useEffect } from 'react';
import styles from './styles.module.css';

const luckyCss = {
    margin: '0px',
    padding: '0px',
    flex: 1,
};

const Luckysheet = () => {
    const luckysheet = window.luckysheet;
    useEffect(() => {
        luckysheet.create({
            container: "luckysheet",
            data: [
                {
                    "name": "Cell", //Worksheet name
                    "color": "", //Worksheet color
                    "status": 1, //Worksheet active status
                    "order": 0, //The order of the worksheet
                    "hide": 0,//Whether worksheet hide 
                    "defaultRowHeight": 19, //Customized default row height
                    "defaultColWidth": 73, //Customized default column width
                    "celldata": [{
                        "r": 0,
                        "c": 0,
                        "v": {
                            ct: { fa: "General", t: "g" },
                            m: "value1",
                            v: "value1"
                        }
                    }, {
                        "r": 0,
                        "c": 1,
                        "v": {
                            ct: { fa: "General", t: "g" },
                            m: "value2",
                            v: "value2"
                        }
                    }], //Initial the cell data
                    "config": {
                        "merge": {}, //merged cells
                        "rowlen": {}, //Table row height
                        "columnlen": {}, //Table column width
                        "rowhidden": {}, //hidden rows
                        "colhidden": {}, //hidden columns
                        "borderInfo": {}, //borders
                        "authority": {}, //Worksheet protection
                    },
                    "luckysheet_select_save": [], //selected area
                    "calcChain": [],//Formula chain
                    "isPivotTable": false,//Whether is pivot table
                    "pivotTable": {},//Pivot table settings
                    "filter_select": {},//Filter range
                    "filter": null,//Filter configuration
                    "luckysheet_alternateformat_save": [], //Alternate colors
                    "luckysheet_alternateformat_save_modelCustom": [], //Customize alternate colors	
                    "luckysheet_conditionformat_save": {},//condition format
                    "frozen": {}, //freeze row and column configuration
                    "chart": [], //Chart configuration
                    "zoomRatio": 1, // zoom ratio
                    "image": [], //image
                    "showGridLines": 1, //Whether to show grid lines
                }
            ]
        });
    }, []);

    const onSaveClick = () => {
        console.log('*************************>>>>', luckysheet.getAllSheets());
    }
    return (
        <div className={styles.container}>
            <button onClick={() => onSaveClick()}>Save</button>
            <div
                id="luckysheet"
                style={luckyCss}
            ></div>
        </div>
    )
}

export default Luckysheet;
