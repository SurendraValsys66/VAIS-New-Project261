import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { landingPageTemplates, getTemplateColor } from "./templates";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplatesGalleryProps {
  onSelectTemplate: (templateIndex: number) => void;
  onPreview: (templateIndex: number) => void;
}

export const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({
  onSelectTemplate,
  onPreview,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Choose a Template
        </h2>
        <p className="text-gray-600 mt-2">
          Start with one of our professionally designed templates
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landingPageTemplates.map((template, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
          >
            {/* Preview Area */}
            <div
              className={cn(
                "w-full h-48 flex items-center justify-center text-white relative overflow-hidden",
              )}
              style={{ backgroundColor: getTemplateColor(index) }}
            >
              <div className="text-center z-10 px-4">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {template.name}
                </h3>
                <p className="text-sm opacity-90 line-clamp-2">
                  {template.description}
                </p>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPreview(index);
                    }}
                    className="gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTemplate(index);
                    }}
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    Use Template
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{template.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {template.description}
                </p>

                {/* Template Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3">
                  <span>{template.blocks.length} sections</span>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => onSelectTemplate(index)}
                  className="w-full bg-valasys-orange hover:bg-orange-600"
                >
                  Use This Template
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
