import { CraftBlock, CraftTextBlock, CraftTextBlockStyle } from "@craftdocs/craft-extension-api";
import { blockWithSomeSubblockLevels } from "./mock/blocks";

export async function getCurrentDocument(isDevMode: boolean): Promise<CraftTextBlock> {
  const currentDocument = await getCurrentPage(isDevMode);
  return currentDocument;
}

async function getCurrentPage(isDevMode: boolean): Promise<CraftTextBlock> {
  if (isDevMode) {
    // DEV mode
    let mockCurrentDocument = blockWithSomeSubblockLevels;
    return mockCurrentDocument;
  } else {
    // PROD mode
    let result = await craft.dataApi.getCurrentPage();
    if (result.status !== "success") {
      throw new Error(result.error);
    }
    return result.data;
  }
}