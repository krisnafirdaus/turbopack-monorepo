import { Button, Card } from '@monorepo/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          App Two - Using Shared UI Components
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Interactive Card Example" className="h-full">
            <p className="text-gray-600 mb-6">
              This is the second application using our shared UI components from the design system.
              Notice how we can use the same components with different layouts.
            </p>
            
            <Button variant="primary" className="w-full mb-2">
              Primary Action
            </Button>
            
            <Button variant="outline" className="w-full">
              Secondary Action
            </Button>
          </Card>
          
          <Card title="Feature Highlights" className="h-full" footer={
            <div className="flex justify-end">
              <Button size="sm" variant="secondary">Learn More</Button>
            </div>
          }>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Shared UI components</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Monorepo structure with pnpm workspaces</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Turbopack for faster builds</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Clean and maintainable code structure</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
