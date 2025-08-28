import { Atom, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { Question } from "@my-artist-type/domain/quiz/questions/question-rpc";
import {
  Badge,
  Button,
  Card,
  DropdownMenu,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
} from "@org/shadcn";
import { Arbitrary, FastCheck } from "effect";
import {
  AtSignIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  FileTextIcon,
  LayersIcon,
  ListIcon,
  PlusIcon,
  SettingsIcon,
  SparklesIcon,
  StarIcon,
  TypeIcon,
} from "lucide-react";

interface PageContainerProps {
  children: React.ReactNode;
}

// Create atoms to track state
const selectedCardAtom = Atom.make<number | null>(null).pipe(Atom.keepAlive);
const selectedQuizAtom = Atom.make<string>("JavaScript Fundamentals").pipe(Atom.keepAlive);

// Generate sample questions using Arbitrary.make() with faker annotations from domain schemas
const questionArb = Arbitrary.make(Question);
const allQuestions = FastCheck.sample(questionArb, 50);

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <div className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div className="h-full p-6">
      <div className="w-full h-full">{children}</div>
    </div>
  </div>
);

const TopBar: React.FC = () => {
  const selectedQuiz = useAtomValue(selectedQuizAtom);
  const setSelectedQuiz = useAtomSet(selectedQuizAtom);

  const quizOptions = [
    "JavaScript Fundamentals",
    "React Advanced Concepts",
    "Database Design",
    "System Architecture",
    "Testing Strategies",
  ];

  return (
    <div className="border-b bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileTextIcon className="size-5 text-primary" />
            <h1 className="text-lg font-semibold">Quiz Editor</h1>
          </div>

          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" className="gap-2">
                <LayersIcon className="size-4" />
                {selectedQuiz}
                <ChevronDownIcon className="size-4" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="start" className="w-56">
              <DropdownMenu.Label>Select Quiz</DropdownMenu.Label>
              <DropdownMenu.Separator />
              {quizOptions.map((quiz) => (
                <DropdownMenu.Item
                  key={quiz}
                  onClick={() => {
                    setSelectedQuiz(quiz);
                  }}
                  className="gap-2"
                >
                  <LayersIcon className="size-4" />
                  {quiz}
                  {selectedQuiz === quiz && (
                    <CheckCircleIcon className="size-4 ml-auto text-primary" />
                  )}
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Separator />
              <DropdownMenu.Item className="gap-2 text-primary">
                <PlusIcon className="size-4" />
                Create New Quiz
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <SettingsIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const getQuestionTypeIcon = (type: Question["data"]["type"]) => {
  switch (type) {
    case "rating":
      return StarIcon;
    case "email":
      return AtSignIcon;
    case "multiple-choice":
      return ListIcon;
    case "text":
      return TypeIcon;
    default:
      return FileTextIcon;
  }
};

const getQuestionTypeLabel = (type: Question["data"]["type"]) => {
  switch (type) {
    case "rating":
      return "Rating";
    case "email":
      return "Email";
    case "multiple-choice":
      return "Multiple Choice";
    case "text":
      return "Text";
    default:
      return "Question";
  }
};

const QuestionCard: React.FC<{ index: number }> = ({ index }) => {
  const selectedQuestion = useAtomValue(selectedCardAtom);
  const setSelectedQuestion = useAtomSet(selectedCardAtom);

  const isSelected = selectedQuestion === index;
  const question = allQuestions[index];
  const IconComponent = getQuestionTypeIcon(question.data.type);
  const questionTypeLabel = getQuestionTypeLabel(question.data.type);

  return (
    <Card
      className={`p-4 mb-3 cursor-pointer transition-all duration-200 hover:shadow-md shrink-0 ${
        isSelected ? "border-primary bg-primary/5 shadow-md" : "hover:bg-accent/30 border-border/50"
      }`}
      onClick={() => {
        setSelectedQuestion(index);
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted"}`}
        >
          <IconComponent className="size-4" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-medium text-sm line-clamp-2 leading-tight">{question?.title}</h3>
          </div>

          {question?.subtitle && (
            <p className="text-xs text-muted-foreground mb-1">{question.subtitle}</p>
          )}

          <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
            {question?.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs py-0.5 px-1.5">
                {questionTypeLabel}
              </Badge>
              <Badge variant="outline" className="text-xs py-0.5 px-1.5">
                Order: {question?.order}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const QuestionDetailsCard: React.FC = () => {
  const selectedCard = useAtomValue(selectedCardAtom);

  if (selectedCard === null) {
    return (
      <Card className="h-full p-6">
        <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
          <SparklesIcon className="size-12 mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">No Question Selected</h3>
          <p className="text-sm text-center">
            Choose a question from the sidebar to view and edit its details
          </p>
        </div>
      </Card>
    );
  }

  const question = allQuestions[selectedCard];
  const IconComponent = getQuestionTypeIcon(question.data.type);
  const questionTypeLabel = getQuestionTypeLabel(question.data.type);

  const renderQuestionPreview = () => {
    switch (question.data.type) {
      case "rating":
        const choices = Array.from(
          { length: question.data.maxRating - question.data.minRating + 1 },
          (_, i) => i + question.data.minRating,
        );

        return (
          <div className="space-y-4">
            {/* Choice Grid */}
            <div className="grid grid-cols-11 gap-1">
              {choices.map((choice) => (
                <Button
                  key={choice}
                  className="h-10 w-full bg-muted hover:bg-accent border border-border/60 rounded-md text-sm font-medium transition-colors"
                  disabled
                >
                  {choice}
                </Button>
              ))}
            </div>

            {/* Range indicator bar placeholder */}
            <div className="mt-2">
              <div className="relative h-2">
                <div className="absolute h-1.5 rounded-sm bg-primary/60 left-[18%] w-[45%]" />
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>{question.data.minLabel}</span>
              <span>{question.data.maxLabel}</span>
            </div>
          </div>
        );
      case "email":
        return (
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border rounded-md bg-background"
              disabled
            />
            <p className="text-xs text-muted-foreground">Email input field</p>
          </div>
        );
      case "multiple-choice":
        return (
          <div className="space-y-2">
            {question.data.choices.map((choice, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="radio" name="choice" disabled />
                <label className="text-sm">{choice}</label>
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              {question.data.choices.length} options available
            </p>
          </div>
        );
      case "text":
        return (
          <div className="space-y-2">
            <textarea
              placeholder={question.data.placeholder || "Enter your answer..."}
              className="w-full px-3 py-2 border rounded-md bg-background resize-none"
              rows={4}
              disabled
            />
            <p className="text-xs text-muted-foreground">Free text input</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="h-full">
      <div className="h-full flex flex-col">
        {/* Header with question info */}
        <div className="p-6 border-b">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <IconComponent className="size-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
              {question.subtitle && (
                <p className="text-lg text-muted-foreground mb-2">{question.subtitle}</p>
              )}
              {question.description && (
                <p className="text-muted-foreground mb-4">{question.description}</p>
              )}
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{questionTypeLabel}</Badge>
                <Badge variant="outline">Order: {question.order}</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 p-6">
          <Card className="w-full max-w-3xl mx-auto border border-border/60 bg-card/90 shadow-sm relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_40%,theme(colors.primary/0.10),transparent_70%)]" />

            {/* Question Title */}
            <div className="p-6 min-h-24 flex items-center justify-center text-center relative">
              <h3 className="text-xl font-semibold leading-tight">{question.title}</h3>
            </div>

            {/* Question Content */}
            <div className="px-6 pb-6 space-y-4 relative">{renderQuestionPreview()}</div>
          </Card>
        </div>
      </div>
    </Card>
  );
};

const QuestionCardList = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 pb-2 shrink-0 border-b">
        <h2 className="text-sm font-medium text-muted-foreground">
          Questions ({allQuestions.length})
        </h2>
        <Button size="sm" variant="ghost" className="gap-1 text-xs">
          <PlusIcon className="size-3" />
          Add
        </Button>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4 pt-2 space-y-3">
            {allQuestions.map((_, index) => (
              <QuestionCard key={index} index={index} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export const PlaygroundPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="h-full flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex-1 min-h-0">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={30} minSize={20} maxSize={40} className="h-full">
              <QuestionCardList />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70} className="h-full">
              <QuestionDetailsCard />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </PageContainer>
  );
};
