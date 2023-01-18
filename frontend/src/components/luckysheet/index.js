import React, { useEffect } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

const luckyCss = {
   margin: '0px',
   padding: '0px',
   width: '100%',
   flex: 1,
};

const Luckysheet = () => {
   const luckysheet = window.luckysheet;

   const getCellData = async () => {
      await axios.get('http://localhost:4000/get-all-cell-data').then((response) => {
         console.log("*******************", response);
      });
   }

   const sheetCellData = [{
      "r": 0,
      "c": 0,
      "v": {
         v: "value1"
      }
   }, {
      "r": 0,
      "c": 1,
      "v": {
         v: "value2"
      }
   }];

   const sheetData = [
      {
         "name": "Cell", //Worksheet name
         "color": "", //Worksheet color
         "status": 1, //Worksheet active status
         "order": 0, //The order of the worksheet
         "hide": 0,//Whether worksheet hide 
         "defaultRowHeight": 19, //Customized default row height
         "defaultColWidth": 73, //Customized default column width
         "celldata": sheetCellData, //Initial the cell data
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
   ];

   useEffect(() => {
      luckysheet.create({
         container: "luckysheet",
         data: sheetData,
      });

      getCellData();
   }, []);

   const onSaveClick = async () => {
      const allSheetsData = luckysheet.getAllSheets();
      const saveData = allSheetsData[0].celldata.map((item) => {
         return {
            sheetName: allSheetsData[0].name,
            row: item.r,
            column: item.c,
            value: item.v.v,
         }
      });

      await axios.post('http://localhost:4000/save-cell-data', saveData).then((res) => console.log('======================>>>>>', res))
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
