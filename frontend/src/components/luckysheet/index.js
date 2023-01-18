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
      let data;

      await axios.get('http://localhost:4000/get-all-cell-data').then((response) => {
         data = response.data.data;
      });

      return data;
   }

   useEffect(() => {
      const init = async () => {
         const fetchedData = await getCellData();
         const allSheetsData = luckysheet.getAllSheets();
         if (allSheetsData.length === 0) {
            luckysheet.create({
               container: "luckysheet",
               data: fetchedData.length > 0 ? fetchedData : [{
                  name: "Sheet",
               }],
            });
         }
      };

      init();
   }, []);

   const onSaveClick = async () => {
      const allSheetsData = luckysheet.getAllSheets();
      await axios.post('http://localhost:4000/save-cell-data', allSheetsData).then((res) =>
         console.log('======================>>>>>', res)
      )
   }

   const testPost = async () => {
      try {
         await axios.post('https://google.com', { req: "request" }).then((res) =>
            console.log('======================>>>>>', res)
         );
      } catch (err) {
         luckysheet.setCellValue(0, 3, "POST test was successful!");
      }
   }
   return (
      <div className={styles.container}>
         <div className={styles.actionBtnsRow}>
            <button onClick={() => testPost()}>POST TEST</button>
            <button onClick={() => onSaveClick()}>Save</button>
         </div>
         <div
            id="luckysheet"
            style={luckyCss}
         ></div>
      </div>
   )
}

export default Luckysheet;
