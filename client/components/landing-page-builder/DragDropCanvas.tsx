import React, { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { LandingPage, LandingPageBlock, DragItem } from "./types";
import { DraggableBlock } from "./DraggableBlock";
import { Copy } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface DragDropCanvasProps {
  page: LandingPage;
  selectedBlockId: string | null;
  onSelectBlock: (blockId: string | null) => void;
  onAddBlock: (block: LandingPageBlock, parentId?: string) => void;
  onUpdateBlock: (blockId: string, properties: Record<string, any>) => void;
  onDeleteBlock: (blockId: string) => void;
  onMoveBlock: (blockId: string, direction: "up" | "down") => void;
}

export const DragDropCanvas: React.FC<DragDropCanvasProps> = ({
  page,
  selectedBlockId,
  onSelectBlock,
  onAddBlock,
  onUpdateBlock,
  onDeleteBlock,
  onMoveBlock,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyBlocks = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(page.blocks, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy blocks:", error);
    }
  };

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: ["BLOCK_ITEM"],
      drop: (item: DragItem) => {
        // Handle drop of new block from sidebar
        if (item.sourceId === "sidebar") {
          // The new block will be handled by the parent component
          return { parentId: undefined };
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  const renderBlock = (block: LandingPageBlock, index: number) => {
    const isSelected = selectedBlockId === block.id;

    return (
      <DraggableBlock
        key={block.id}
        block={block}
        index={index}
        isSelected={isSelected}
        onSelect={() => onSelectBlock(block.id)}
        onUpdate={(props) => onUpdateBlock(block.id, props)}
        onDelete={() => onDeleteBlock(block.id)}
        onMoveUp={() => onMoveBlock(block.id, "up")}
        onMoveDown={() => onMoveBlock(block.id, "down")}
        canMoveUp={index > 0}
        canMoveDown={index < page.blocks.length - 1}
      />
    );
  };

  if (page.blocks.length === 0) {
    return (
      <div
        ref={dropRef}
        className={`w-full bg-white rounded-lg shadow-md px-8 py-6 border-2 transition-colors flex flex-col items-center justify-center min-h-20 ${
          isOver ? "border-valasys-orange bg-orange-50" : "border-gray-200"
        }`}
      >
        <p className="text-gray-500 text-center text-sm">
          Drag blocks from the sidebar to start building
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div
        ref={dropRef}
        className={`w-full space-y-4 transition-all ${
          isOver ? "bg-orange-50 rounded-lg p-4" : ""
        }`}
      >
        {page.blocks.map((block, index) => renderBlock(block, index))}
      </div>
      {page.blocks.length > 0 && (
        <div className="absolute top-3 right-3 flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="h-8 w-8 p-0 bg-valasys-orange hover:bg-orange-600 text-white border-0"
                onClick={handleCopyBlocks}
                title={copied ? "Copied!" : "Copy blocks"}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? "Copied!" : "Copy blocks"}</TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
};
