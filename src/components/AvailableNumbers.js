import React from "react";
import { Button } from "react-bootstrap";

const AvailableNumbers = ({ setStep, setDataFilled }) => {
  setStep(1);
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const rows = chunkArray(numbers, 5);

  const selectNumber = (number) => {
    setDataFilled(number.target.innerText);
    setStep(2);
  };

  return (
    <>
      <div className="row mb-5">
        {" "}
        {/* Agregamos un margen inferior */}
        <div className="col-12">
          <h1 className="mb-4">
            <em>Números disponibles del 1 al 100</em>
          </h1>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((number, columnIndex) => (
                      <td key={columnIndex}>
                        <Button onClick={selectNumber} variant="primary">
                          {number}
                        </Button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableNumbers;
