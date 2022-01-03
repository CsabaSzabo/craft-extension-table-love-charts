import { CraftTextBlock, CraftTableBlock } from "@craftdocs/craft-extension-api";
import { blockWithoutTable, blockWithOneTable, blockWithTwoTables } from "./mock/blocks";

export async function getCurrentDocumentTables(isDevMode: boolean): Promise<CraftTableBlock[]> {
  const currentDocument = await getCurrentPage(isDevMode);
  return currentDocument.subblocks.filter(block => block.type === "tableBlock") as CraftTableBlock[];
}

async function getCurrentPage(isDevMode: boolean): Promise<CraftTextBlock> {
  if (isDevMode) {
    // DEV mode
    const testTableOptions = [blockWithoutTable, blockWithOneTable, blockWithTwoTables];
    // randomly select a table from the three mocks
    const mockCurrentDocument = testTableOptions[Math.floor(Math.random() * testTableOptions.length)];
    return mockCurrentDocument;
  } else {
    // PROD mode
    const result = await craft.dataApi.getCurrentPage();
    if (result.status !== "success") {
      throw new Error(result.error);
    }
    return result.data;
  }
}