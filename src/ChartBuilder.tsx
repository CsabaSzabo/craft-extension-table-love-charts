import * as React from 'react';
import { ChartConfig } from './types';
import { CraftTableBlock } from "@craftdocs/craft-extension-api";

// ----------------------------------------------------------------------------
// Chart builder - series table
// ----------------------------------------------------------------------------
type ChartBuilderSeriesTableProps = {
  chartConfig: ChartConfig;
}

const ChartBuilderSeriesTable: React.FC<ChartBuilderSeriesTableProps> = (props) => {
  const { chartConfig } = props;

  return (
    <div>
      <span>Series</span>
      <div className="tlc-chart-builder-series">
        {/* Empty state */}
        { chartConfig.series.length === 0 && (
          <div className="tlc-chart-builder-series-empty">
            No series selected.
          </div>
        )}
        {/* List of selected series */}
        { chartConfig.series.length > 0 &&
          (<table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Label</th>
                <th>Actions</th>
              </tr>
            </thead>                  
            <tbody>
              { chartConfig.series.map((series, index) => (
                <tr key={index}>
                  <td>Column {series.yColumnIndex + 1}</td>
                  <td>{series.label}</td>
                  <td>Remove - MoveUp - MoveDown</td>
                </tr>
              ))}
            </tbody>
          </table>)
        }
      </div>
    </div>
  )
}

// ----------------------------------------------------------------------------
// Chart builder - series addition
// ----------------------------------------------------------------------------

type ChartBuilderSeriesAdditionProps = {
  xAxisColumnIndex: number,
  existingSeriesColumnIndexes: number[],
  columnIndexes: number[],
  onSeriesAdded: (columnIndex: number) => void,
}

const ChartBuilderSeriesAddition: React.FC<ChartBuilderSeriesAdditionProps> = (props) => {
  const { xAxisColumnIndex, existingSeriesColumnIndexes, columnIndexes, onSeriesAdded } = props;
  
  const selectableSeries = columnIndexes
  .filter(columnIndex => columnIndex !== xAxisColumnIndex)
  .filter(columnIndex => !existingSeriesColumnIndexes.includes(columnIndex));
  const [selectedColumnIndex, setSelectedColumnIndex] = React.useState<number>(selectableSeries[0]);

  return (
    <div>
      <select onChange={(e) => setSelectedColumnIndex(parseInt(e.target.value))}>
        { selectableSeries.map((columnIndex, index) => (
          <option key={index} value={columnIndex}>Column {columnIndex+1}</option>
        ))}
      </select>
      <button onClick={() => onSeriesAdded(selectedColumnIndex)}>Add Column {selectedColumnIndex + 1} to series</button>
    </div>
  )
}

// ----------------------------------------------------------------------------
// Chart builder
// ----------------------------------------------------------------------------

type ChartBuilderProps = {
  table: CraftTableBlock,
  chartConfig: ChartConfig,
  onChartConfigChanged: (chartConfig: ChartConfig) => void,
}

export const ChartBuilder: React.FC<ChartBuilderProps> = (props) => {
  const { table, chartConfig, onChartConfigChanged } = props;

  function onXColumnSelected(xColumnIndex: number) {
    onChartConfigChanged({
      ...chartConfig,
      xColumnIndex,
      // Remove x column from series if it is already selected
      series: chartConfig.series.filter(series => series.yColumnIndex !== xColumnIndex),
    });
  }

  return (
    <div className="tlc-chart-builder">
      <div className="tlc-chart-builder-header">
        Chart options
      </div>
      <div className="tlc-chart-builder-content">
        {/* Type */}
        <div>
          <label>
            <span>Chart type</span>
            <select
              value={chartConfig.type}
              onChange={(e) => onChartConfigChanged({ ...chartConfig, type: e.target.value as "line" | "bar" })}
            >
              { ['line', 'bar'].map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
        </div>
        {/* X column */}
        <div>
          <label>
            <span>X column</span>
            <select
              value={chartConfig.xColumnIndex}
              onChange={(e) => onXColumnSelected(parseInt(e.target.value))}
            >
              { table.rows[0].cells.map((cell, index) => (
                <option key={index} value={index}>Column {index + 1}</option>
              ))}
            </select>
          </label>
        </div>
        {/* Series */}
        <div>
          <ChartBuilderSeriesTable
            chartConfig={chartConfig}
          />
          <ChartBuilderSeriesAddition
            xAxisColumnIndex={chartConfig.xColumnIndex}
            existingSeriesColumnIndexes={chartConfig.series.map(series => series.yColumnIndex)}
            columnIndexes={table.rows[0].cells.map((cell, index) => index)}
            onSeriesAdded={(columnIndex) => onChartConfigChanged({ ...chartConfig, series: [...chartConfig.series, { yColumnIndex: columnIndex }] })}
          />
        </div>

        {/* Series labels */}
        <div>
          <label>
            <span>Use first row as series labels</span>
            <input
              type="checkbox"
              checked={chartConfig.useFirstRowAsSeriesLabels}
              onChange={(e) => onChartConfigChanged({ ...chartConfig, useFirstRowAsSeriesLabels: e.target.checked })}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
