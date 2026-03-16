import React from "react";
import { Plus, Search, Settings, MessageSquare, FolderOpen, Grid3x3, Code, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const RECENTS = [
  "Prompt writing request",
  "File comparison and correction",
  "Adding padding-top to content s...",
  "Campaign request form design r...",
  "Convert code to HTML CSS Boot...",
  "Fix email content spacing with p...",
  "Cross-platform email template H...",
  "Python developer manager roun...",
  "Contact out extension",
  "Invalid file format error with ren...",
  "PHP code review",
  "Chrome extension sliding panel ...",
  "Converting API error response t...",
  "Fetching remote HTML files in P...",
  "Reducing white space in card lay...",
];

export const AIBuilderSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-full">
      {/* Top Navigation */}
      <div className="p-4 space-y-2 border-b border-gray-200">
        {/* New Chat Button */}
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-200"
        >
          <Plus className="w-4 h-4 mr-3" />
          New chat
        </Button>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-9 h-8 text-sm border-gray-200"
          />
        </div>

        {/* Customize */}
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-200"
        >
          <Settings className="w-4 h-4 mr-3" />
          Customize
        </Button>
      </div>

      {/* Main Navigation */}
      <div className="p-4 space-y-2 border-b border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-200"
        >
          <MessageSquare className="w-4 h-4 mr-3" />
          Chats
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-200"
        >
          <FolderOpen className="w-4 h-4 mr-3" />
          Projects
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-200"
        >
          <Grid3x3 className="w-4 h-4 mr-3" />
          Artifacts
        </Button>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex-1 justify-start text-gray-700 hover:bg-gray-200"
          >
            <Code className="w-4 h-4 mr-3" />
            Code
          </Button>
          <span className="text-xs font-semibold text-valasys-orange pr-2">Upgrade</span>
        </div>
      </div>

      {/* Recents Section */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-gray-500 uppercase">Recents</h3>
        </div>
        <div className="space-y-1">
          {RECENTS.map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md transition-colors truncate"
              title={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
