import { CraftBlock, CraftTableBlock, CraftTextBlock } from "@craftdocs/craft-extension-api";

export const blockWithoutTable: CraftTextBlock = getRootWithSubblocks([
  getTestTextBlock(),
]);

export const blockWithOneTable: CraftTextBlock = getRootWithSubblocks([
  getTable1(),
  getTestTextBlock(),
]);

export const blockWithTwoTables: CraftTextBlock = getRootWithSubblocks([
  getTable1(),
  getTestTextBlock(),
  getTable2(),
]);

// --------------------------------------------------
// Consuction of the block
// --------------------------------------------------
function getTable1(): CraftTableBlock {
  return {
    "id": "58D413CB-358A-4951-AC40-D3493D852012",
    "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "listStyle": {
      "type": "none"
    },
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "color": "text",
    "indentationLevel": 0,
    "type": "tableBlock",
    "rows": [
      {
        "cells": [
          {
            "block": {
              "id": "CE7DCB8A-A810-43FB-885A-09579B665A4A",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Dátum",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "C16ED57D-35E0-4A04-8AE9-CAFC51C98424",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Feszültség",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "C0269943-CE07-45E5-8FE5-49E47363EEA2",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Állapot",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "569CAF47-D501-4829-A874-92928FEE137A",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Fogyasztás",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "F9A7F3E4-8752-496D-AC0D-23EFAAF7925C",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.02 19:28",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "A9D4C652-7988-42C1-A090-E265C05D620A",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.46V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "06CE3B71-0066-423A-9EB9-392D323024BB",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Terhelés - fogy",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "7D67BA8B-69CA-4F01-A1E8-DA06176C752F",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.02 19:28",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "4AD8EA8B-6D31-4D53-98DA-A702270304F9",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.59V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "29E689F6-FC17-49B0-80D8-82F81E9D18F7",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Nyugalom",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "ED87FD2E-8F47-4769-9464-A66D54AACEF3",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.03 8:26",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "B6AF54D1-0E97-4D54-88F5-1096AB4E5500",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.72V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "A75E807C-3E18-4423-9FB7-24DE0DD44C0B",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Nyugalom",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "35CD858A-AEB5-4885-9FBB-91AD9178EF57",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.03 12:08",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "EC5B5E48-FA88-4273-91FA-CCFE5BDF806A",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.72V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "0649D3CE-F523-4BAA-B887-538AA898F52D",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Nyugalom",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "D581738A-EB60-4A57-A510-42B48D1225FC",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.04 17:03",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "8B251336-F0ED-4F7C-A048-982D6C43A614",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.69V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "34FAD1C6-1026-40A2-9422-47823B74A1F8",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Nyugalom",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "DA124C8B-7DBA-468A-86CA-536EEF2ACC3A",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.04 17:05",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "F540865F-D1BB-4F1E-AB61-51348343F0A0",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.46V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "C9E7197D-A597-4CB5-8EDD-6250023790DB",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Terheles - fogy",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "0FD64744-6EEA-46E4-9C8E-FEE273449704",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.04 18:05",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "1F5EE9B1-6E50-4F7C-9E0F-F7AD005DB943",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.33V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "126B314A-2587-472E-8417-0A24E9E5171D",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Terhelés - fogy",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "EA22E832-999B-445C-94DD-E47587D90CF2",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "0.13V / hour - 26W",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "83959249-427F-4042-9116-A6699959938E",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.04 19:57",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "96AE0930-8F88-4B52-B58F-36E73D288552",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.21V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "5C7976D7-B18D-49D5-A434-4CAC82805F0D",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Terhelés - fogy",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "34D5A9D7-52AC-4D47-8A2B-4BBA1C6CA2F8",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "0.12 V / 2 hour - 6W",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "FB0B54AD-1507-48A8-B57F-B9C45B2B7F72",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.04 19:59",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "16DDFC92-4DF7-4E75-A754-12B9A1C521F0",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.41V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "AFF4C09B-FB5C-43B5-9C5F-DF50645A3EED",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Nyugalom",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "3D42DD5B-29B4-4753-9B40-C3C29B082AF0",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "12.06 13:16",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "A7CD1C38-8651-4409-9ED1-6D84040CBFD0",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "22.56V",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "C0543082-17C5-4FC7-B7B3-172B79C00C5B",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Nyugalom",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {}
        ]
      },
      {
        "cells": [
          {},
          {},
          {},
          {}
        ]
      }
    ]
  }
}

function getTable2(): CraftTableBlock {
  return {
    "id": "DCEE57D1-BD68-4EC1-BE7A-4FA9A673A449",
    "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "listStyle": {
      "type": "none"
    },
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "color": "text",
    "indentationLevel": 0,
    "type": "tableBlock",
    "rows": [
      {
        "cells": [
          {
            "block": {
              "id": "227f9791-b0ce-4e9a-8d88-09fc274ad3af",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Column-date",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "b5f363ba-d334-431e-9c64-7e36dcd79dad",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Price",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "07b1ef73-ab07-4ff3-837d-6020c456791b",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Change",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "c9bd6e32-0f74-4b90-bfce-c114c94e5a2c",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Notes",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "00281eb1-7b1d-4e35-a949-8560d15e3d42",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "2022-01-01",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "d716d0c4-65f6-4ecf-9271-4b1cf0cc7310",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "100 USD",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "6c015b83-d1a6-4ed3-990c-ed04abc5ee94",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "0",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "5560789f-913b-4b43-ae4f-e212fdb0e531",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Start date",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "0a937130-c881-4fd4-969f-3e809982ed28",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "2022-01-02",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "5a7ad534-31a3-4be1-97fe-9d7bfc645a14",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "120 USD",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "01e52638-4d34-4bb8-b744-adc174d05926",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "+20",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "49f94af9-befd-46fb-a9e6-0620c675585a",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Great increase",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "27bb9889-2536-493f-bb89-dfb187ad75d7",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "2022-01-03",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "d411789b-20ac-47ec-8380-d4bdf612601e",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "135 USD",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "aec8cdb9-37d9-4e97-a21f-dc7765028420",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "+15",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "716d5300-299d-4b42-a8d2-4acebcef7bd5",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Good one",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "ddd95142-328b-483e-bc76-ae070ac3fc16",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "2022-01-04",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "3d30dfbf-3fbc-4bc3-a125-778a473672da",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "115 USD",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "975581a0-b4ea-4dba-8272-4cd4c7f88871",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "-20",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "0cc267df-9de5-4b8c-abe8-964310abb9ff",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "Big fall",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      },
      {
        "cells": [
          {
            "block": {
              "id": "9c32f7e6-7c59-4c26-ae40-7757aadeeb3e",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "2022-01-05",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "71ac420d-860e-424b-af64-5467c8ab1b08",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "115 USD",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "E699966E-18C0-490B-941B-C5BAB2DD88A8",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "0",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          },
          {
            "block": {
              "id": "7cde97f7-0acf-4483-a8a0-1ed6cda72195",
              "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
              "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
              "listStyle": {
                "type": "none"
              },
              "hasBlockDecoration": false,
              "hasFocusDecoration": false,
              "color": "text",
              "indentationLevel": 0,
              "type": "textBlock",
              "content": [
                {
                  "text": "No change",
                  "isBold": false,
                  "isItalic": false,
                  "isStrikethrough": false,
                  "isCode": false
                }
              ],
              "subblocks": [],
              "style": {
                "textStyle": "body",
                "fontStyle": "system",
                "alignmentStyle": "left"
              }
            }
          }
        ]
      }
    ],
  }
}

function getTestTextBlock(): CraftTextBlock {
  return {
    "id": "693CF3FF-0DE5-40BE-AFD3-4476FACDBE9C",
    "documentId": "11E8BBB1-5C8F-4DD7-96C5-F2E15954FB60",
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "listStyle": {
      "type": "none"
    },
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "color": "text",
    "indentationLevel": 0,
    "type": "textBlock",
    "content": [
      {
        "text": "abc",
        "isBold": false,
        "isItalic": false,
        "isStrikethrough": false,
        "isCode": false
      }
    ],
    "subblocks": [],
    "style": {
      "textStyle": "body",
      "fontStyle": "system",
      "alignmentStyle": "left"
    }
  }
}

function getRootWithSubblocks(subblocks: CraftBlock[]) : CraftTextBlock {
  return {
    "color": "text",
    "content": [
      {
        "isBold": false,
        "isCode": false,
        "isItalic": false,
        "isStrikethrough": false,
        "text": "Deep document structure test"
      }
    ],
    "documentId": "2AA68CA6-71B5-4F5C-93EB-12EA73D0F371",
    "hasBlockDecoration": false,
    "hasFocusDecoration": false,
    "id": "B18F8E8D-5EFC-44C7-BD17-85CCA61321CB",
    "indentationLevel": 0,
    "listStyle": {
      "type": "none"
    },
    "spaceId": "9de5d42c-a66a-4526-989a-d5f8a2b702d7",
    "style": {
      "alignmentStyle": "left",
      "fontStyle": "system",
      "textStyle": "body"
    },
    "subblocks": subblocks,
    "type": "textBlock"
  }
}