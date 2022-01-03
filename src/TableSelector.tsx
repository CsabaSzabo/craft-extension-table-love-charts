import * as React from 'react';
import { CraftTableBlock } from "@craftdocs/craft-extension-api";

type TableSelectorProps = {
  isDarkMode: boolean;
  documentTables: CraftTableBlock[],
  onTableSelected: (table: CraftTableBlock) => void,
}

export const TableSelector: React.FC<TableSelectorProps> = (props) => {
  const { isDarkMode, documentTables, onTableSelected } = props;

  React.useEffect(() => {
    // Automatically select the first table if there is any table
    if (documentTables.length >= 1) {
      onTableSelected(documentTables[0]);
    }
  }, []);

  return (
    <div>
      {/* 0 table */}
      { documentTables.length === 0 && (
        <div className="tlc-no-tables">
          No table found in this document.
        </div>
      )}
      { /* 1 table */}
      { documentTables.length === 1 && (
        <div className="tlc-one-table">
          Found one table in the document. We generate the chart from it.
        </div>
      )}
      { /* > 1 table */}
      { documentTables.length > 1 && (
        <div className="tlc-tables">
          <span>Found { documentTables.length } tables. Please select one.</span>
          <select onChange={(e) => onTableSelected(documentTables[parseInt(e.target.value)])}>
            { documentTables.map((table, index) => (
              <option key={index} value={index}>
                Table-{index+1} ({table.rows.length} rows, {table.rows[0].cells.length} columns)
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

// export const Settings: React.FC<SettingsProps> = (props) => {