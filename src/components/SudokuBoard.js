import React, { Component } from 'react'; 
import SudokuField from './SudokuField'; 

export default class SudokuBoard extends Component {
  render() {
    const { sudoku, onChange } = this.props; 

    return (
      <div>

        {!sudoku.solveTime && <Timer start={sudoku.startTime} />}
        {sudoku.solveTime && <Result sudoku={sudoku} />}
        {sudoku.rows.map(row => (
          <div className='row' key={row.index}>
            {row.cols.map(field => (
              <SudoKuField field={field} key={field.col} onChange={onChange} />
            ))}
          </div>
        ))}
      </div>
    ); 
  }
}