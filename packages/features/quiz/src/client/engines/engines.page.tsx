import { useAtomRefresh, useAtomValue } from "@effect-atom/atom-react";
import { Badge, Button, Card } from "@ui/shadcn";
import React from "react";
import { enginesAtom } from "./engines-atoms.js";

// PageContainer component with padding and layout
type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <div className="container mx-auto px-4 py-8 max-w-6xl">{children}</div>
);

// Engines page component
export const EnginesPage: React.FC = () => {
  const enginesResult = useAtomValue(enginesAtom);
  const refreshEngines = useAtomRefresh(enginesAtom);

  return (
    <PageContainer>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analysis Engines</h1>
            <p className="text-muted-foreground">
              View and manage all analysis engines used for processing quiz responses.
            </p>
          </div>
          <Button onClick={refreshEngines} variant="outline">
            Refresh
          </Button>
        </div>

        {/* Engines List */}
        <div className="space-y-4">
          {enginesResult._tag === "Success" ? (
            enginesResult.value.length > 0 ? (
              enginesResult.value.map((engine) => (
                <Card key={engine.id} className="w-full">
                  <Card.Header>
                    <div className="flex items-center justify-between">
                      <div>
                        <Card.Title className="text-lg">{engine.name}</Card.Title>
                        <Card.Description>{engine.description}</Card.Description>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">v{engine.version}</Badge>
                        <Badge variant={engine.isActive ? "default" : "outline"}>
                          {engine.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <Badge variant="outline">
                          {new Date(engine.createdAt.epochMillis).toLocaleString()}
                        </Badge>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Content>
                    <div className="space-y-3">
                      {/* Engine Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Slug:</span>{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">
                            {engine.slug}
                          </code>
                        </div>
                        <div>
                          <span className="font-medium">ID:</span>{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">
                            {engine.id.slice(0, 8)}...
                          </code>
                        </div>
                        <div>
                          <span className="font-medium">Updated:</span>{" "}
                          {new Date(engine.updatedAt.epochMillis).toLocaleString()}
                        </div>
                      </div>

                      {/* Scoring Configuration */}
                      <div>
                        <h4 className="font-medium mb-2">Scoring Configuration:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                          <div className="bg-muted p-2 rounded">
                            <div className="font-medium">Primary Weight</div>
                            <div>{engine.scoringConfig.primaryWeight}</div>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <div className="font-medium">Non-Primary Weight</div>
                            <div>{engine.scoringConfig.nonPrimaryWeight}</div>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <div className="font-medium">Distance Gamma</div>
                            <div>{engine.scoringConfig.distanceGamma}</div>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <div className="font-medium">Beta</div>
                            <div>{engine.scoringConfig.beta}</div>
                          </div>
                          <div className="bg-muted p-2 rounded">
                            <div className="font-medium">Score Multiplier</div>
                            <div>{engine.scoringConfig.scoreMultiplier}</div>
                          </div>
                        </div>
                      </div>

                      {/* Endings Summary */}
                      <div>
                        <h4 className="font-medium mb-2">Endings ({engine.endings.length}):</h4>
                        <div className="flex flex-wrap gap-1">
                          {engine.endings.map((ending, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {ending.name}
                              <span className="ml-1 text-muted-foreground">
                                ({ending.questionRules.length} rules)
                              </span>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Metadata */}
                      {engine.metadata !== undefined && (
                        <div>
                          <h4 className="font-medium mb-2">Metadata:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            {engine.metadata !== null &&
                              typeof engine.metadata.totalQuestions === "number" && (
                                <div className="bg-muted p-2 rounded">
                                  <div className="font-medium">Total Questions</div>
                                  <div>{engine.metadata.totalQuestions}</div>
                                </div>
                              )}
                            {engine.metadata !== null &&
                              typeof engine.metadata.totalEndings === "number" && (
                                <div className="bg-muted p-2 rounded">
                                  <div className="font-medium">Total Endings</div>
                                  <div>{engine.metadata.totalEndings}</div>
                                </div>
                              )}
                            {engine.metadata !== null &&
                              Array.isArray(engine.metadata.categories) &&
                              engine.metadata.categories.length > 0 && (
                                <div className="bg-muted p-2 rounded md:col-span-2">
                                  <div className="font-medium">Categories</div>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {engine.metadata.categories.map(
                                      (category: string, index: number) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                          {category}
                                        </Badge>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card.Content>
                </Card>
              ))
            ) : (
              <Card>
                <Card.Content className="flex flex-col items-center justify-center py-12">
                  <div className="text-center">
                    <h3 className="text-lg font-medium">No analysis engines found</h3>
                    <p className="text-muted-foreground">
                      No analysis engines have been created yet.
                    </p>
                  </div>
                </Card.Content>
              </Card>
            )
          ) : (
            <Card>
              <Card.Content className="flex flex-col items-center justify-center py-12">
                <div className="text-center">
                  <h3 className="text-lg font-medium">Loading analysis engines...</h3>
                  <p className="text-muted-foreground">
                    Please wait while we fetch the analysis engines.
                  </p>
                </div>
              </Card.Content>
            </Card>
          )}
        </div>
      </div>
    </PageContainer>
  );
};
