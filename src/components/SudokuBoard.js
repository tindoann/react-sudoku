import React, { Component } from 'react'; 
import SudokuField from './SudokuField'; 

export default class SudokuBoard extends Component {
  render() {
    const { sudoku, onChange } = this.props; 

    return (
      <div>
        {sudoku.rows.map(row => {
          <div className='row' key={row.index}>
            {row.cols(field => (
              <SudoKuField field={col} key={field.col} />
            ))}
          </div>
        })}
      </div>
    )
  }
}