import { Button, Card } from '@monorepo/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          App One - Using Shared UI Components
        </h1>
        
        <Card title="Welcome to App One" className="mb-6">
          <p className="text-gray-600 mb-4">
            This is the first Next.js application in our monorepo. It uses shared UI components 
            from our design system.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </Card>
        
        <Card title="Different Button Sizes">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
