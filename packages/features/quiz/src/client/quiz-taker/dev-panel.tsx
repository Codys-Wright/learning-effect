import { Badge, Button, Card, Checkbox, Collapsible, Input, Label, Separator } from "@ui/shadcn";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  InfoIcon,
  RotateCcwIcon,
  SettingsIcon,
} from "lucide-react";
import React, { useState } from "react";

// Type for the analysis config overrides
export type AnalysisConfigOverrides = {
  // Scoring configuration overrides
  primaryWeight: number;
  nonPrimaryWeight: number;
  distanceGamma: number;
  beta: number;
  scoreMultiplier: number;

  // Analysis behavior flags
  disableSecondaryPoints: boolean;
  overrideBaseWeights: boolean;
  overrideCustomWeights: boolean;
  overrideDistanceWeight: boolean;

  // Additional analysis parameters
  minPercentageThreshold: number;
  enableQuestionBreakdown: boolean;
  maxEndingResults: number;

  // Custom weight overrides (when override flags are enabled)
  customPrimaryWeight: number;
  customNonPrimaryWeight: number;
  customDistanceGamma: number;
  customBeta: number;
  customScoreMultiplier: number;
};

// Default values matching the AnalysisConfig
const defaultConfig: AnalysisConfigOverrides = {
  primaryWeight: 1.5,
  nonPrimaryWeight: 0.2,
  distanceGamma: 1.6,
  beta: 1.4,
  scoreMultiplier: 1.0,
  disableSecondaryPoints: false,
  overrideBaseWeights: false,
  overrideCustomWeights: false,
  overrideDistanceWeight: false,
  minPercentageThreshold: 0.0,
  enableQuestionBreakdown: true,
  maxEndingResults: 10,
  customPrimaryWeight: 2.0,
  customNonPrimaryWeight: 0.5,
  customDistanceGamma: 2.0,
  customBeta: 1.8,
  customScoreMultiplier: 1.2,
};

type DevPanelProps = {
  config: AnalysisConfigOverrides;
  isVisible: boolean;
  onConfigChange: (config: AnalysisConfigOverrides) => void;
  onToggleVisibility: () => void;
};

const ConfigSection: React.FC<{
  children: React.ReactNode;
  description?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  title: string;
}> = ({ children, description, isOpen = false, onToggle, title }) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const open = onToggle !== undefined ? isOpen : internalOpen;
  const toggle =
    onToggle ??
    (() => {
      setInternalOpen(!internalOpen);
    });

  return (
    <Collapsible open={open} onOpenChange={toggle}>
      <Collapsible.Trigger asChild>
        <Button variant="ghost" className="w-full justify-between p-2 h-auto">
          <div className="flex items-center gap-2">
            {open ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
            <span className="font-medium">{title}</span>
            {description !== undefined && <InfoIcon className="h-3 w-3 text-muted-foreground" />}
          </div>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content className="space-y-3 p-2">{children}</Collapsible.Content>
    </Collapsible>
  );
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

const BooleanSwitch: React.FC<{
  description?: string;
  label: string;
  onChange: (value: boolean) => void;
  value: boolean;
}> = ({ description, label, onChange, value }) => (
  <div className="flex items-center justify-between space-x-2">
    <div className="space-y-1">
      <Label className="text-sm font-medium">{label}</Label>
      {description !== undefined && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
    <Checkbox checked={value} onCheckedChange={onChange} />
  </div>
);

export const DevPanel: React.FC<DevPanelProps> = ({
  config,
  isVisible,
  onConfigChange,
  onToggleVisibility,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateConfig = (updates: Partial<AnalysisConfigOverrides>) => {
    onConfigChange({ ...config, ...updates });
  };

  const resetToDefaults = () => {
    onConfigChange(defaultConfig);
  };

  const resetSection = (
    section: keyof AnalysisConfigOverrides | Array<keyof AnalysisConfigOverrides>,
  ) => {
    const keys = Array.isArray(section) ? section : [section];
    const updates: Partial<AnalysisConfigOverrides> = {};
    for (const key of keys) {
      (updates as Record<string, unknown>)[key] = defaultConfig[key];
    }
    updateConfig(updates);
  };

  if (!isVisible) {
    return (
      <Button
        className="fixed bottom-4 right-4 z-50"
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
    <Card className="fixed bottom-4 right-4 w-96 max-h-[80vh] overflow-hidden z-50 shadow-lg">
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
          <Button
            className="h-6 px-2 text-xs"
            size="sm"
            variant="ghost"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Collapse" : "Expand"} All
          </Button>
        </div>
      </Card.Header>
      <Card.Content className="pt-0 max-h-[60vh] overflow-y-auto">
        <div className="space-y-4">
          {/* Base Scoring Configuration */}
          <ConfigSection
            title="Base Scoring"
            description="Core scoring parameters that affect how points are calculated"
            isOpen={isExpanded}
          >
            <NumberInput
              description="Weight for primary question rules"
              label="Primary Weight"
              max={5}
              min={0}
              onChange={(value) => {
                updateConfig({ primaryWeight: value });
              }}
              step={0.1}
              value={config.primaryWeight}
            />
            <NumberInput
              description="Weight for secondary question rules"
              label="Non-Primary Weight"
              max={5}
              min={0}
              onChange={(value) => {
                updateConfig({ nonPrimaryWeight: value });
              }}
              step={0.1}
              value={config.nonPrimaryWeight}
            />
            <NumberInput
              description="Controls how distance from ideal answers affects scoring"
              label="Distance Gamma"
              max={5}
              min={0.1}
              onChange={(value) => {
                updateConfig({ distanceGamma: value });
              }}
              step={0.1}
              value={config.distanceGamma}
            />
            <NumberInput
              description="Nonlinear amplification factor for sharpening winners"
              label="Beta"
              max={5}
              min={0.1}
              onChange={(value) => {
                updateConfig({ beta: value });
              }}
              step={0.1}
              value={config.beta}
            />
            <NumberInput
              description="Global multiplier for all scores"
              label="Score Multiplier"
              max={5}
              min={0}
              onChange={(value) => {
                updateConfig({ scoreMultiplier: value });
              }}
              step={0.1}
              value={config.scoreMultiplier}
            />
          </ConfigSection>

          <Separator />

          {/* Analysis Behavior */}
          <ConfigSection
            title="Analysis Behavior"
            description="Flags that control analysis behavior and processing"
            isOpen={isExpanded}
          >
            <BooleanSwitch
              description="Skip non-primary question rules entirely"
              label="Disable Secondary Points"
              onChange={(value) => {
                updateConfig({ disableSecondaryPoints: value });
              }}
              value={config.disableSecondaryPoints}
            />
            <BooleanSwitch
              description="Include detailed question-by-question analysis"
              label="Enable Question Breakdown"
              onChange={(value) => {
                updateConfig({ enableQuestionBreakdown: value });
              }}
              value={config.enableQuestionBreakdown}
            />
            <NumberInput
              description="Minimum percentage to show in results"
              label="Min Percentage Threshold"
              max={100}
              min={0}
              onChange={(value) => {
                updateConfig({ minPercentageThreshold: value });
              }}
              step={0.1}
              value={config.minPercentageThreshold}
            />
            <NumberInput
              description="Maximum number of results to return"
              label="Max Ending Results"
              max={50}
              min={1}
              onChange={(value) => {
                updateConfig({ maxEndingResults: value });
              }}
              step={1}
              value={config.maxEndingResults}
            />
          </ConfigSection>

          <Separator />

          {/* Override Controls */}
          <ConfigSection
            title="Override Controls"
            description="Enable/disable various override behaviors"
            isOpen={isExpanded}
          >
            <BooleanSwitch
              description="Use custom weights instead of base weights"
              label="Override Base Weights"
              onChange={(value) => {
                updateConfig({ overrideBaseWeights: value });
              }}
              value={config.overrideBaseWeights}
            />
            <BooleanSwitch
              description="Ignore individual question weight multipliers"
              label="Override Custom Weights"
              onChange={(value) => {
                updateConfig({ overrideCustomWeights: value });
              }}
              value={config.overrideCustomWeights}
            />
            <BooleanSwitch
              description="Use custom distance gamma instead of per-question values"
              label="Override Distance Weight"
              onChange={(value) => {
                updateConfig({ overrideDistanceWeight: value });
              }}
              value={config.overrideDistanceWeight}
            />
          </ConfigSection>

          <Separator />

          {/* Custom Override Values */}
          <ConfigSection
            title="Custom Override Values"
            description="Values used when override flags are enabled"
            isOpen={isExpanded}
          >
            <NumberInput
              description="Custom weight for primary questions when overrides enabled"
              label="Custom Primary Weight"
              max={5}
              min={0}
              onChange={(value) => {
                updateConfig({ customPrimaryWeight: value });
              }}
              step={0.1}
              value={config.customPrimaryWeight}
            />
            <NumberInput
              description="Custom weight for secondary questions when overrides enabled"
              label="Custom Non-Primary Weight"
              max={5}
              min={0}
              onChange={(value) => {
                updateConfig({ customNonPrimaryWeight: value });
              }}
              step={0.1}
              value={config.customNonPrimaryWeight}
            />
            <NumberInput
              description="Custom distance gamma when overrides enabled"
              label="Custom Distance Gamma"
              max={5}
              min={0.1}
              onChange={(value) => {
                updateConfig({ customDistanceGamma: value });
              }}
              step={0.1}
              value={config.customDistanceGamma}
            />
            <NumberInput
              description="Custom beta when overrides enabled"
              label="Custom Beta"
              max={5}
              min={0.1}
              onChange={(value) => {
                updateConfig({ customBeta: value });
              }}
              step={0.1}
              value={config.customBeta}
            />
            <NumberInput
              description="Custom score multiplier when overrides enabled"
              label="Custom Score Multiplier"
              max={5}
              min={0}
              onChange={(value) => {
                updateConfig({ customScoreMultiplier: value });
              }}
              step={0.1}
              value={config.customScoreMultiplier}
            />
          </ConfigSection>

          {/* Quick Actions */}
          <div className="pt-2">
            <div className="flex gap-2">
              <Button
                className="text-xs"
                size="sm"
                variant="outline"
                onClick={() => {
                  resetSection([
                    "primaryWeight",
                    "nonPrimaryWeight",
                    "distanceGamma",
                    "beta",
                    "scoreMultiplier",
                  ]);
                }}
              >
                Reset Scoring
              </Button>
              <Button
                className="text-xs"
                size="sm"
                variant="outline"
                onClick={() => {
                  resetSection([
                    "disableSecondaryPoints",
                    "overrideBaseWeights",
                    "overrideCustomWeights",
                    "overrideDistanceWeight",
                  ]);
                }}
              >
                Reset Flags
              </Button>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
