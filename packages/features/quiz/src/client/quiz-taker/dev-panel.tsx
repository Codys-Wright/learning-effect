import { Badge, Button, Card, Input, Label } from "@ui/shadcn";
import { RotateCcwIcon, SettingsIcon } from "lucide-react";
import React from "react";

// Type for the analysis config overrides
export type AnalysisConfigOverrides = {
  // Point values for ideal answers
  primaryPointValue: number;
  secondaryPointValue: number;

  // Point weight multipliers
  primaryPointWeight: number;
  secondaryPointWeight: number;

  // Distance falloff for each type
  primaryDistanceFalloff: number;
  secondaryDistanceFalloff: number;

  // Beta for visual separation
  beta: number;
};

// Empty default config - let Effect config handle defaults
const defaultConfig: Partial<AnalysisConfigOverrides> = {};

type DevPanelProps = {
  config: Partial<AnalysisConfigOverrides>;
  isVisible: boolean;
  onConfigChange: (config: Partial<AnalysisConfigOverrides>) => void;
  onToggleVisibility: () => void;
};

const NumberInput: React.FC<{
  description?: string;
  label: string;
  max?: number;
  min?: number;
  onChange: (value: number) => void;
  step?: number;
  value: number;
}> = ({ description, label, max, min, onChange, step = 0.1, value }) => (
  <div className="space-y-1">
    <Label className="text-sm font-medium">{label}</Label>
    {description !== undefined && <p className="text-xs text-muted-foreground">{description}</p>}
    <Input
      type="number"
      value={value}
      onChange={(e) => {
        const numValue = parseFloat(e.target.value);
        onChange(isNaN(numValue) ? 0 : numValue);
      }}
      min={min}
      max={max}
      step={step}
      className="h-8"
    />
  </div>
);

export const DevPanel: React.FC<DevPanelProps> = ({
  config,
  isVisible,
  onConfigChange,
  onToggleVisibility,
}) => {
  const updateConfig = (updates: Partial<AnalysisConfigOverrides>) => {
    const newConfig = {
      ...config,
      ...updates,
    };
    onConfigChange(newConfig);
  };

  const resetToDefaults = () => {
    onConfigChange(defaultConfig);
  };

  if (!isVisible) {
    return (
      <Button
        className="fixed bottom-4 left-4 z-50"
        size="sm"
        variant="outline"
        onClick={() => {
          onToggleVisibility();
        }}
      >
        <SettingsIcon className="h-4 w-4 mr-2" />
        Dev Panel
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 left-4 w-96 max-h-[80vh] overflow-hidden z-50 shadow-lg">
      <Card.Header className="pb-2">
        <div className="flex items-center justify-between">
          <Card.Title className="text-sm flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            Analysis Dev Panel
          </Card.Title>
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              title="Reset to defaults"
              variant="ghost"
              onClick={() => {
                resetToDefaults();
              }}
            >
              <RotateCcwIcon className="h-3 w-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                onToggleVisibility();
              }}
            >
              ×
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Live Preview
          </Badge>
          <Badge variant="outline" className="text-xs">
            Ctrl+D to toggle
          </Badge>
        </div>
      </Card.Header>
      <Card.Content className="pt-0 max-h-[60vh] overflow-y-auto">
        <div className="space-y-4">
          <NumberInput
            description="Base points awarded for perfect primary ideal answers"
            label="Primary Point Value"
            max={50}
            min={1}
            onChange={(value) => {
              updateConfig({ primaryPointValue: value });
            }}
            step={1}
            value={config.primaryPointValue ?? 10.0}
          />
          <NumberInput
            description="Base points awarded for perfect secondary ideal answers"
            label="Secondary Point Value"
            max={50}
            min={1}
            onChange={(value) => {
              updateConfig({ secondaryPointValue: value });
            }}
            step={1}
            value={config.secondaryPointValue ?? 5.0}
          />
          <NumberInput
            description="Multiplier for primary questions (most important questions)"
            label="Primary Point Weight"
            max={3}
            min={0.1}
            onChange={(value) => {
              updateConfig({ primaryPointWeight: value });
            }}
            step={0.1}
            value={config.primaryPointWeight ?? 1.0}
          />
          <NumberInput
            description="Multiplier for secondary questions (supporting questions)"
            label="Secondary Point Weight"
            max={3}
            min={0.1}
            onChange={(value) => {
              updateConfig({ secondaryPointWeight: value });
            }}
            step={0.1}
            value={config.secondaryPointWeight ?? 1.0}
          />
          <NumberInput
            description="How distance from ideal answers affects primary question scoring"
            label="Primary Distance Falloff"
            max={5}
            min={0.1}
            onChange={(value) => {
              updateConfig({ primaryDistanceFalloff: value });
            }}
            step={0.1}
            value={config.primaryDistanceFalloff ?? 1.0}
          />
          <NumberInput
            description="How distance from ideal answers affects secondary question scoring"
            label="Secondary Distance Falloff"
            max={5}
            min={0.1}
            onChange={(value) => {
              updateConfig({ secondaryDistanceFalloff: value });
            }}
            step={0.1}
            value={config.secondaryDistanceFalloff ?? 1.0}
          />
          <NumberInput
            description="Higher number separates the high percentages from the lower ones on the graph visually to reveal a more distinct winner"
            label="Beta"
            max={5}
            min={0.1}
            onChange={(value) => {
              updateConfig({ beta: value });
            }}
            step={0.1}
            value={config.beta ?? 1.0}
          />
        </div>
      </Card.Content>
    </Card>
  );
};
